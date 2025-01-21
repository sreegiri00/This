import React, { useContext, useCallback } from 'react';
import './Purchase.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../index';
import '../../components/Body/Product.css'

export const Purchase = () => {
  const sliceParchase = useSelector((state) => state.addToCartSlice.items);
  const { setPassId } = useContext(ThemeContext);

  const truncateText = useCallback((text, length) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  }, []);

  const calculateDiscountPrice = useCallback((price, discount) => {
    return parseFloat((price * (1 - discount / 100)).toFixed(2));
  }, []);

  const handleClick = useCallback(
    (product) => {
      setPassId(product);
    },
    [setPassId]
  );

  if (!sliceParchase || sliceParchase.length === 0) {
    return <div>No items in the cart.</div>;
  }

  return (
    <div className="container">
      {sliceParchase.map((item) => (
        <div key={item.passId.id} className="product-card section_padd">
          <Link to={`/product/${item.passId.id}`} onClick={() => handleClick(item.passId)}>
            <img src={item.passId.thumbnail} alt={item.passId.title} />
            <h1 className="product-card-title">{truncateText(item.passId.title, 20)}</h1>
            <p className="product-card-des">{item.passId.description}</p>
            <div className="product-card-prices">
              <h1 className="product-card-price">
                <span>Price: </span>${calculateDiscountPrice(item.passId.price, item.passId.discountPercentage)}
              </h1>
              <h2 className="product-card-price-off">
                <s>${item.passId.price}</s>
              </h2>
              <h1 className="product-card-price-prg">
                <small>Off</small> {item.passId.discountPercentage}%
              </h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
