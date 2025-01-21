import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../index';
import { Button, Col, Row } from 'react-bootstrap';
import './Details.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../../utils/addToCartSlice';
import onePro from "../../../public/Data/onePro.json";

export const Details = () => {
  const  {passId}  = useContext(ThemeContext)
  // const [passId, setPassId] = useState(onePro)
  const { id, title, images = [], thumbnail, rating, brand, price, description, reviews = [], discountPercentage, category, dimensions, weight, stock, availabilityStatus } = passId;
  const [proImg, setProImg] = useState(thumbnail);
 const[imgg , setImgg ] = useState([...images,thumbnail])
  const dispatch = useDispatch()
  useEffect(() => {
    
    return () => {
      console.log("pas", passId);
      
    };
  }, [passId]);

  return (
    <>
      <Row className='cart-main container'>
        {/* CART LEFT  */}
        <Col md={6} className='cart-main-left' >
          <div className="cart-main-left-sub">

            <Col md={12}>
              <Row>
                <div className="cart-main-img">
                  <img srcSet={proImg} alt="" className='cart-main-img-in'/>
                </div>
              </Row>
            </Col>
            <Row><div className='cart-add'><Button className='cart-add-btn' onClick={() => dispatch(addCart({ passId }))}><h1 className='cart-add-btn-name'>Add Cart</h1></Button> </div></Row>
            <Row >
              <div className="cart-side-img-box-main">
                <div className="cart-side-img-box">
                  {imgg.map((res, index) => <Col key={ index} onClick={()=>setProImg(res)}><div className='cart-side-img' ><img srcSet={res} alt="" className='cart-side-img-in' /></div></Col>)}
                </div>
              </div>
            </Row>
          </div>
        </Col>
        {/* CART RIGHT  */}
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
                      <h1 className="cart-name-rating-brand-name">({brand})</h1>
                    </div>
                  </div >
                </div>
              </Row>
              <div className="cart-name-price-box">
                <div className="cart-name-price-box-in">
                  <h1 className="cart-name-price">Price&nbsp;:&nbsp;{price}&nbsp;$ </h1>
                </div>
                <div className="cart-name-price-sub">
                  <div className="cart-name-price-sub-not">
                    <h1 className="cart-name-price-sub-not-name"><s>4654</s> &nbsp;$</h1>
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
              <h1 className="cart-details-head cart-sub-head">Details : </h1>
              <div className="cart-details-paragraph">
                <div className="cart-details-paragraph-content">Brand : {brand}</div>
                <div className="cart-details-paragraph-content">Category : {category}</div>
                <div className="cart-details-paragraph-content">Weight :{weight}</div>
                <div className="cart-details-paragraph-content">Width :{dimensions.width}</div>
                <div className="cart-details-paragraph-content">Height :{dimensions.height}</div>
                <div className="cart-details-paragraph-content">Depth :{dimensions.depth} </div>
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
              {reviews.map((res) =>
                <Row key={id}>
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