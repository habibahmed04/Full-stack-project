<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class MenuItemController extends Controller
{
    /**
     * Get all menu items (Admin & Public use)
     */
    public function index()
    {
        return response()->json(
            MenuItem::orderBy('created_at', 'desc')->get(),
            200
        );
    }

    /**
     * Store a new menu item (Admin only)
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'required|string|max:255|unique:menu_items,name',
            'description' => 'nullable|string',
            'price'       => 'required|numeric|min:0',
            'category'    => 'nullable|string|max:50',
            'image'       => 'nullable|image|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('menu', 'public');
        }

        $menuItem = MenuItem::create([
            'name'        => $request->name,
            'description' => $request->description,
            'price'       => $request->price,
            'category'    => $request->category,
            'image'       => $imagePath,
        ]);

        return response()->json([
            'message' => 'Menu item added successfully!',
            'item'    => $menuItem,
        ], 201);
    }

    /**
     * Update an existing menu item (Admin only)
     */
    public function update(Request $request, $id)
    {
        $menuItem = MenuItem::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'name'        => 'required|string|max:255|unique:menu_items,name,' . $menuItem->id,
            'description' => 'nullable|string',
            'price'       => 'required|numeric|min:0',
            'category'    => 'nullable|string|max:50',
            'image'       => 'nullable|image|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        // Replace image if new one is uploaded
        if ($request->hasFile('image')) {
            if ($menuItem->image) {
                Storage::disk('public')->delete($menuItem->image);
            }
            $menuItem->image = $request->file('image')->store('menu', 'public');
        }

        $menuItem->update([
            'name'        => $request->name,
            'description' => $request->description,
            'price'       => $request->price,
            'category'    => $request->category,
        ]);

        return response()->json([
            'message' => 'Menu item updated successfully!',
            'item'    => $menuItem,
        ], 200);
    }

    /**
     * Delete a menu item (Admin only)
     */
    public function destroy($id)
    {
        $menuItem = MenuItem::findOrFail($id);

        if ($menuItem->image) {
            Storage::disk('public')->delete($menuItem->image);
        }

        $menuItem->delete();

        return response()->json([
            'message' => 'Menu item deleted successfully!',
        ], 200);
    }
}
