import React from 'react';

function Pricing(){
  return (
    <div className="container" style={{padding:'36px 0'}}>
      <h1>Pricing</h1>
      <p className="muted">Choose a plan that fits your needs.</p>
      <div className="card-grid" style={{marginTop:18}}>
        <div className="card"><div className="card-body"><h3>Single Order</h3><p className="muted">Pay per order. Perfect for occasional customers.</p></div></div>
        <div className="card"><div className="card-body"><h3>Monthly</h3><p className="muted">Regular deliveries and special discounts.</p></div></div>
        <div className="card"><div className="card-body"><h3>Catering</h3><p className="muted">Large events & weddings — contact us for quotes.</p></div></div>
      </div>
    </div>
  );
}
export default Pricing;
