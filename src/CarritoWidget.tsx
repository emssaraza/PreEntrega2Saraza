import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CarritoWidget.css";

const CarritoWidget = () => {
  return (
    <div className="carrito-widget">
      <FaShoppingCart className="carrito-icono" />
      <span className="carrito-notificacion">0</span>
    </div>
  );
};

export default CarritoWidget;
