import React, { useContext, useCallback, useState } from 'react';
import './Purchase.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../index';
import '../../components/Body/Product.css';
import { Col, Row } from 'react-bootstrap';
import Button from '@mui/material/Button';
import notFount from '../../assets/notFount.webp'
import { useDispatch } from 'react-redux';
import { addCart } from '../../utils/addToCartSlice';


export const Purchase = React.memo(() => {
  const sliceParchase = useSelector((state) => state.addToCartSlice.items);
  const { setPassId, passId } = useContext(ThemeContext);
  const [show, setShow] = useState(0);

  const dispatch = useDispatch()


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
    return sum + (calculateDiscountPrice(item.detail?.price, item.detail?.discountPercentage) || 0);
  }, 0);

const totelProduct = sliceParchase.map(res=> res.detail.id)
console.log("idd::::",totelProduct);

// Find unique IDs
const uniqueIds = [...new Set(totelProduct)];

// Find duplicate IDs
const duplicateIds = totelProduct.filter((id, index, arr) => arr.indexOf(id) !== index);

console.log("Unique IDs:", uniqueIds);  // Output: [2, 3]
console.log("Duplicate IDs:", duplicateIds);  // Output: [3, 3, 3]



  const addProduct = async (proId) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${proId}`);
      const data = await response.json();
      
      dispatch(addCart({detail: data }));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }

  if (!sliceParchase || sliceParchase.length === 0) {
    return (
      <div className="empty-cart">
        <p>No items in the cart.</p>
        <img src={notFount} alt="" srcSet="" />
        <Link to="/" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container">

      <div className="parchase-nav">
        <Col className="parchase-nav-sub">
          <Col md={6} sm={12} className="parchase-nav-count">
            <h1 className='parchasenavcounthead '>Product Count : <span>{sliceParchase.length}</span></h1>
          </Col>
          <Col md={6} sm={12} className="parchase-nav-price">
            <h1 className='parchasenavpricehead'>Totel price : <span>{totalPrice.toFixed(2)}</span></h1>
          </Col>
        </Col>

        <Col className='parchase-nav-prchsall'><Button>Purchase all</Button></Col>

      </div>
      <div className="parchase-cart">

        {sliceParchase.map((item) => {
          if (!item.detail || !item.detail.id) return null;

          return (
            <>
              <div key={item.detail.id} className="product-card section_padd" >

                <div className="parchase-add-btn">
                  <div className="parchase-add-btn-sub" onClick={(e) => setShow(show - 1)}>-</div>
                  <div className="parchase-add-btn-show">{show}</div>
                  <div className="parchase-add-btn-add" onClick={(e) => {
                    e.stopPropagation();
                    addProduct(item.detail.id)
                  }}>+</div>
                </div>
                <Link to={`/details/id=${item.detail.id}`} onClick={() => handleClick(item.detail)} className='product-card-in'>
                  <img className='parchase-img' src={item.detail.thumbnail} alt={item.detail.title || 'Product Image'} />
                  <h1 className="product-card-title">{truncateText(item.detail.title, 20)}</h1>
                  <h6 className='product-card-ctg'>({item.detail.category})</h6>
                  <div className="product-card-prices">
                    <h1 className="product-card-price">
                      <span>Price: </span>${calculateDiscountPrice(item.detail.price, item.detail.discountPercentage)}
                    </h1>
                    {/* <h2 className="product-card-price-off">
                      <s>${item.passId.price}</s>
                    </h2>
                    <h3 className="product-card-price-prg">
                      <small>Off</small> {item.passId.discountPercentage}%
                    </h3> */}
                  </div>
                </Link>
              </div >
            </>
          );
        })}
      </div>
    </div >
  );
});
