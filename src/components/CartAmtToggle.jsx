import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function CartAmtToggle({ amt, setDecrease, setIncrease }) {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amt}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default CartAmtToggle;
