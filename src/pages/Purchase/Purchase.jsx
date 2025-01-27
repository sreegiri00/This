import React, { useContext, useCallback, useState } from 'react';
import './Purchase.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../index';
import '../../components/Body/Product.css';
import { Button, Col, Row } from 'react-bootstrap';


export const Purchase = React.memo(() => {
  const sliceParchase = useSelector((state) => state.addToCartSlice.items);
  const { setPassId, passId } = useContext(ThemeContext);
  const [show, setShow] = useState(0);



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

  const totalPrice = sliceParchase.reduce((sum, item) => {
    return sum + (item.passId?.price || 0); 
  }, 0);


  if (!sliceParchase || sliceParchase.length === 0) {
    return (
      <div className="empty-cart">
        <p>No items in the cart.</p>
        <Link to="/" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container">

      <div className="parchase-nav">
        <Row className="parchase-nav-sub">
          <Col md={6} sm={12} className="parchase-nav-count">
            <h1 className='parchasenavcounthead '>Product Count : <span>{sliceParchase.length}</span></h1>
          </Col>
          <Col md={6} sm={12} className="parchase-nav-price">
            <h1 className='parchasenavpricehead'>Totel price : <span>{totalPrice.toFixed(2)}</span></h1>
          </Col>
        </Row>
      </div>
      <div className="parchase-cart">

        {sliceParchase.map((item) => {
          if (!item.passId || !item.passId.id) return null;

          return (
            <>
              <div key={item.passId.id} className="product-card section_padd" >

                <div className="parchase-add-btn">
                  <div className="parchase-add-btn-sub" onClick={() => setShow(show - 1)}>-</div>
                  <div className="parchase-add-btn-show">{show}</div>
                  <div className="parchase-add-btn-add" onClick={() => setShow(show + 1)}>+</div>
                </div>
                <Link to={`/product/${item.passId.id}`} onClick={() => handleClick(item.passId)} className='product-card-in'>
                  <img className='parchase-img' src={item.passId.thumbnail} alt={item.passId.title || 'Product Image'} />
                  <h1 className="product-card-title">{truncateText(item.passId.title, 20)}</h1>
                  <h6 className='product-card-ctg'>({item.passId.category})</h6>
                  <div className="product-card-prices">
                    <h1 className="product-card-price">
                      <span>Price: </span>${calculateDiscountPrice(item.passId.price, item.passId.discountPercentage)}
                    </h1>
                    {/* <h2 className="product-card-price-off">
                      <s>${item.passId.price}</s>
                    </h2>
                    <h3 className="product-card-price-prg">
                      <small>Off</small> {item.passId.discountPercentage}%
                    </h3> */}
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
});
