import React from "react";

export default function BasketItem({ item, product }) {
  const products = product.find((p) => p.id === item.id);
  return (
    <div className="basket">
      {products.title}*{item.amount}
    </div>
  );
}
