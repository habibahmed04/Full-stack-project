// import React from "react";
// import BookingForm from "../components/ContactForm/BookingForm";
// import mapImage from "../assets/Map.png"; // Import your local image

// function BookTable() {
//   return (
//     <div
//       style={{
//         position: "relative",
//         height: "100vh",
//         width: "100%",
//       }}
//     >
//       {/* Local Map PNG */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${mapImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 1,
//         }}
//       />

//       {/* Form Overlay */}
//       <div
//         style={{
//           paddingTop: "100px",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//           zIndex: 2,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "20px",
//         }}
//       >
//         <div
//           style={{
//             padding: "40px",
//             backgroundColor: "white",
//             borderRadius: "12px",
//             boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
//             maxWidth: "500px",
//             width: "100%",
//             zIndex: 3,
//           }}
//         >
//           <h1>Book A Table</h1>
//           <p style={{ color: "#666", marginBottom: "25px" }}>
//             Reserve your table for special events or dinner.
//           </p>
//           <BookingForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookTable;
import React from "react";
import BookingForm from "../components/ContactForm/BookingForm";
import mapImage from "../assets/Map.png"; // Your map PNG

function BookTable() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Top Beige Section - INCREASED HEIGHT (60%) */}
      <div
        style={{
          height: "40vh", // Increased from 50vh to 60vh
          backgroundColor: "#f5f5f0", // Beige background
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "0 20px",
        }}
      >
        {/* Text Content - Positioned higher */}
        <div
          style={{
            maxWidth: "800px",
            textAlign: "center",
            marginTop: "0px", // Pull text even higher
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "0px",
              color: "#2c1810",
              fontWeight: "800",
              letterSpacing: "-0.5px",
            }}
          >
            Book A Table
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.7",
              color: "#5a4a42",
              maxWidth: "700px",
              margin: "0 auto",
              fontStyle: "italic",
              opacity: 0.9,
            }}
          >
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
      </div>

      {/* Bottom Map Section - REDUCED HEIGHT (40%) */}
      <div
        style={{
          height: "50vh", // Reduced from 50vh to 40vh
          position: "relative",
        }}
      >
        {/* Your Map PNG */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${mapImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark overlay on map for better contrast */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>

      {/* Form Card - Adjusted vertical position */}
      <div
        style={{
          position: "absolute",
          top: "calc(60vh - 150px)", // Position form lower to avoid text overlap
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "500px",
          zIndex: 100,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div style={{ padding: "40px 30px" }}>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTable;
