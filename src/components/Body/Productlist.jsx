import React, { useState } from 'react'
import './Product.css'

export const Productlist = (product) => {
  const [cost, setCost] = useState()
  const { title, price, discountPercentage, thumbnail, description, category, rating, weight } = product.product;

  function truncateText(title, length) {
    if (title.length > length) {
      return title.substring(0, length) + "...";
    } else {
      return title;
    }
  }

  function cal(pric, discountPercentag) {
    var a = (pric * (1 - (discountPercentag / 100)))
    var b = parseFloat(a.toFixed(2));
    return b;
  }

  if (title == "The Product is not Found") {
    return (
      <div className="product-card">
        <img src={thumbnail} alt="" srcSet="" />
        <div className='product-card-titel'><h1>{title}</h1></div>
      </div>
    )

  }
  else {
    return (
      <>

        <div className="product-card section_padd">
          <img src={thumbnail} alt="" srcSet="" />
          <h1 className='product-card-titel'>{truncateText(title, 20)}</h1>
          <h1 className='product-card-des'>{description}</h1>
          <div className="product-card-prices">
            <div>
              <h1 className="product-card-price"><span>Price :</span> {cal(price, discountPercentage)}$</h1>
            </div>
            <div>
              <h2 className="product-card-price-off"><s>{price}</s>$</h2>
            </div>
            <div>
              <h1 className="product-card-price-prg"><small>Off</small> {discountPercentage}%</h1>
            </div>
          </div>
        </div>

      </>
    )


  }
}
