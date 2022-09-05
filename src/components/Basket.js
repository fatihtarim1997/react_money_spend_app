import React from 'react'
import BasketItem from './BasketItem'
export default function Basket({basket,product,total}) {
  return (
    <>
    {total===0&&(
        <div className="basket">Sepetiniz boş</div>
    )}
    {basket.map(item =>(
        <BasketItem item={item} product={product} />
    ))}
    <div className="basket">${total}</div>
    </>
  )
}
