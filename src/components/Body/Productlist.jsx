// import React, { useContext,  useCallback  } from 'react'
// import './Product.css';
// import { ThemeContext } from '../../index'
// import { Link } from 'react-router-dom';


// export const Productlist = React.memo(({ product }) => {
//   const { title, price, discountPercentage, thumbnail, description, id ,category} = product;

//   const { setPassId } = useContext(ThemeContext);

//   const truncateText = useCallback((text, length) => {
//     return text.length > length ? `${text.substring(0, length)}...` : text;
//   }, []);

//   const cal= useCallback((price, discount) => {
//     return parseFloat((price * (1 - discount / 100)).toFixed(2));
//   }, []);

//   const handleClick = useCallback((product) => {
//       setPassId(product);
//     },
//     [setPassId]
//   );

//   if (title == "The Product is not Found") {
//     return (
//       <div className="product-card">
//         <img src={thumbnail} alt="" srcSet="" />
//         <div className='product-card-titel'><h1>{title}</h1></div>
//       </div>
//     )

//   }
//   else {
//     return (
//       <>

//         <Link  to={`details/id=${id}`} className="product-card section_padd"  onClick={() => handleClick(product)}>
//           <img src={thumbnail} alt="" srcSet="" className='product-card-img'/>
//           <h1 className='product-card-titel'>{truncateText(title, 20)}</h1>
//           <h6 className='product-card-ctg'>({category})</h6>
//           {/* <p className='product-card-des'>{description}</p> */}
//           <div className="product-card-prices">
//             <div>
//               <h1 className="product-card-price"><span>Price :</span> {cal(price, discountPercentage)}$</h1>
//             </div>
//             <div>
//               <h2 className="product-card-price-off"><s>{price}</s>$</h2>

//               <h3 className="product-card-price-prg"><small>Off</small> {discountPercentage}%</h3>
//             </div>
//           </div>
//         </Link>

//       </>
//     )


//   }
// });








import React, { useContext, useCallback, useState, useEffect } from 'react'
import './Product.css';
import { ThemeContext } from '../../index'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { addCart } from '../../utils/addToCartSlice';
import { useSelector } from 'react-redux';

export const Productlist = React.memo(({ product }) => {
  const { title, price, discountPercentage, thumbnail, description, id, category } = product;

  const { setPassId } = useContext(ThemeContext);

  const truncateText = useCallback((text, length) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  }, []);

  const cal = useCallback((price, discount) => {
    return parseFloat((price * (1 - discount / 100)).toFixed(2));
  }, []);

  const handleClick = useCallback((product) => {
    setPassId(product);
  },
    [setPassId]
  );
  //////

  const [detail, setDetail] = useState({});
  const [have, setHave] = useState()
  
  const cartItems = useSelector((state) => state.addToCartSlice.items);
  
  useEffect(() => {
    
  setHave(cartItems.some((item) => item.detail.id === product.id))
  }, [have]);

  const dispatch = useDispatch()

  const addToPurchase = async (proId) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${proId}`);
      const data = await response.json();
      setDetail(data);

      const isAlreadyInCart = cartItems.some((item) => item.detail.id === data.id);
      setHave(isAlreadyInCart)
      if (isAlreadyInCart) {
        alert("This item is already in your cart.");
      } else {
        dispatch(addCart({ detail: data }));
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  //////
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

        <div className="product-card section_padd" onClick={() => handleClick(product)}>
          <div className='product-card-top'>
            <div>
              <div className='product-card-top-off'>
                <h3 className="product-card-price-prg"><small>Off</small> {discountPercentage}%</h3>
              </div>
            </div>
            <div className='product-card-top-addcart' onClick={(e) => {
              e.stopPropagation();
              addToPurchase(id);
            }}>
              <div className='product-card-top-addcart-in'>
                {have ?  <FontAwesomeIcon icon={faXmark} size="2x" color="#fff" /> :<FontAwesomeIcon icon={faPlus} size="2x" color="#fff" />}
                {/* <FontAwesomeIcon icon={faPlus} size="2x" color="#fff" /> */}
                {/* <FontAwesomeIcon icon={faXmark} size="2x" color="#fff" /> */}
              </div>
            </div>
          </div>
          <Link to={`details/id=${id}`} style={{ textDecoration: 'none' }}>
            <img src={thumbnail} alt="" srcSet="" className='product-card-img' />
            <h6 className='product-card-ctg'>({category})</h6>
            <h1 className='product-card-titel'>{truncateText(title, 20)}</h1>
            {/* <p className='product-card-des'>{description}</p> */}
            <div className="product-card-prices-up">

              <div className="product-card-prices">
                <div>
                  <h1 className="product-card-price"><span>Price :</span> {cal(price, discountPercentage)}$</h1>
                </div>
                <div>
                  <h2 className="product-card-price-off"><s>{price} $</s></h2>

                </div>
              </div>
              <div>

              </div>
            </div>
          </Link>
          {/* <Button variant="outlined" >Purchase</Button> */}
        </div>

      </>
    )


  }
});
