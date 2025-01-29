import React, { useContext, useEffect, useState, useCallback } from 'react';
import { ThemeContext } from '../../index';
import { Col, Row } from 'react-bootstrap';
import Button from '@mui/joy/Button';
import './Details.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../../utils/addToCartSlice';
import { useSelector } from 'react-redux';
import onePro from "../../../public/Data/onePro.json";

export const Details = () => {
  const { passId } = useContext(ThemeContext)
  const [imgg, setImgg] = useState([]);
  const [detail, setDetail] = useState({});
  // const [passId, setPassId] = useState(onePro)
  const sliceParchase = useSelector((state) => state.addToCartSlice.items);
  
  const url = window.location.href;
  const urlId = url.split("id=")[1];
  const [idVal, setIdVal] = useState(`https://dummyjson.com/products/${urlId}`);
  
  useEffect(() => {
    fetch(idVal)
    .then(res => res.json())
    .then(data => {
      
      setDetail(data);
    })
  }, [idVal]);  
  const { id, title, images = [], thumbnail, rating, brand, price, description, reviews = [], discountPercentage, category, dimensions, weight, stock, availabilityStatus } = detail;


  const dispatch = useDispatch()
  // console.log("ss: ", sliceParchase);
  // console.log("==op : ",imgg);
  
  const addToParchase = (e) => {
    dispatch(addCart({ passId }));
  };


  const cal = useCallback((price, discount) => {
    return parseFloat((price * (1 - discount / 100)).toFixed(2));
  }, []);

  return (
    <>

      <Row lg={12} className='cart-main '>
      
        <Col md={6} className='cart-main-left' >
          <div className="cart-main-left-sub">

            <Col md={12}>
              <Row>
                <div className="cart-main-img">
                  <img srcSet={imgg.length==0 ? thumbnail : imgg} alt="" className='cart-main-img-in' />
                </div>
              </Row>
            </Col>
            <Row>
              <div className='cart-add'>
                <Button className='cart-add-btn cart-add-btn-name' variant="soft" color="primary" name={id} onClick={addToParchase}> <h2 name={id}>Add Cart</h2></Button>
              </div>
            </Row>
            <Row >
              <div className="cart-side-img-box-main">
                <div className="cart-side-img-box">
                  {images?.map((res, index) => <Col key={index} ><div className='cart-side-img' onClick={()=>setImgg(res)}><img srcSet={res} alt="" className='cart-side-img-in' /></div></Col>)}
                </div>
              </div>
            </Row>
          </div>
        </Col>
      
        <Col md={6} className='cart-main-right' >
          <Row>
            <div className='cart-name'>
              <Row>
                <div className="cart-name-head-box-main">
                  <div className="cart-name-head-box">
                    <h1 className='cart-name-head'>{title}</h1>
                  </div>
                  <div className="cart-name-rating-box">
                    <div className="cart-name-rating">
                      <h1 className='cart-name-rating-no'>{rating} <span>★</span></h1>
                    </div>
                    <div className="cart-name-rating-brand">
                      <h1 className="cart-name-rating-brand-name">({category})</h1>
                    </div>
                  </div >
                </div>
              </Row>
              <div className="cart-name-price-box">
                <div className="cart-name-price-box-in">
                  <h1 className="cart-name-price">Price&nbsp;:&nbsp;{cal(price,discountPercentage)}&nbsp;$ </h1>
                </div>
                <div className="cart-name-price-sub">
                  <div className="cart-name-price-sub-not">
                    <h1 className="cart-name-price-sub-not-name"><s>{price}</s> &nbsp;$</h1>
                  </div>
                  <div className="cart-name-price-sub-off">
                    <h1 className="cart-name-price-sub-off">Off : {discountPercentage} %</h1>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <hr />
          <Row>
            <h1 className='cart-discription-head cart-sub-head'>Description : </h1>
            <div className='cart-discription-content'>{description} </div>
          </Row><hr />
          <Row>
            <div className='cart-detales'>
              <h1 className="cart-details-head cart-sub-head">Details :{id} </h1>
              <div className="cart-details-paragraph">
                <div className="cart-details-paragraph-content">Brand : {brand}</div>
                <div className="cart-details-paragraph-content">Category : {category}</div>
                <div className="cart-details-paragraph-content">Weight :{weight}</div>
                {/* <div className="cart-details-paragraph-content">Width :{dimensions.width}</div> */}
                {/* <div className="cart-details-paragraph-content">Height :{dimensions.height}</div> */}
                {/* <div className="cart-details-paragraph-content">Depth :{dimensions.depth} </div> */}
                <div className="cart-details-paragraph-content">Availebility :{availabilityStatus}</div>
                <div className="cart-details-paragraph-content">Stoke : {stock}</div>
              </div>
            </div>
          </Row>
          <Row>
            <div className='cart-specification-head .cart-sub-head-right'></div>
            <div className='cart-specification-content'> </div>
          </Row>
          <hr />
          <Row>
            <div className='cart-users'> <div className="cart-users-main"> <h1 className="cart-users-main cart-sub-head">Review : </h1></div>
              {reviews.map((res,index) =>
                <Row key={index}>
                  <div className="cart-user-box">
                    <Row className="cart-user-names">
                      <Col md={2}>
                        <div className="cart-user-name-box"><h1 className="cart-user-name-box-short"> {res.reviewerName.split("").filter((char) => char >= "A" && char <= "Z").join("")} </h1></div>
                      </Col>
                      <Col md={7} xs={8}>
                        <div className="cart-user-name"><h1 className="cart-user-name-in">{res.reviewerName}</h1></div>
                      </Col>
                      <Col md={3} xs={2}>
                        <div className="cart-user-date"><h1 className="cart-user-date-in">{res.date.split("T")[0]}</h1></div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} xs={1} ></Col>
                      <Col md={7} xs={7} className="cart-user-msg-box"><div className="cart-user-msg">{res.comment}</div></Col>
                      <Col md={3} xs={3} className="cart-user-rating"><div className="cart-user-rating-in">
                        {Array.from({ length: Math.floor(res.rating) }).map((_, index) => (<span key={index} className="star">★</span>))}</div></Col>
                    </Row>
                  </div>
                </Row>
              )}
            </div>
          </Row><hr />
        </Col>
      </Row>
    </>
  )
}