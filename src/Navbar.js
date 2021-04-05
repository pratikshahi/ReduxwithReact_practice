import React from "react";
import { useSelector } from "react-redux";
function Navbar() {
  const cartData = useSelector((store) => store);
  return (
    <div>
      <h1>Navbar component :number of item in cart : {cartData.cartCount}</h1>
    </div>
  );
}
export default Navbar;
