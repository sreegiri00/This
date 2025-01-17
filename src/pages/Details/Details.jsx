import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../index';
import { Button, Col, Row } from 'react-bootstrap';
import onePro from '../../../public/Data/onePro.json'
import './Details.css'

export const Details = () => {
  const { passId, setPassId } = useContext(ThemeContext)
  // const [passId, setPassId] = useState(onePro)

  const { id, title, images, thumbnail, rating, brand, price, description, discountPercentage } = passId
  console.log("pas", passId);

  return (
    <>
      <Row className='container'>
        <Col md={6} className='cart-main-left' >
        <div className="cart-main-left-sub">
{/* 
          <Col md={6}>
            {images.map((res,index) => <Row key={res.id || index}><div className='cart-side-img' ><img srcSet={res} alt="" /></div></Row>)}
          </Col> */}
          <Col 
          md={12}
          >
            <Row>
              <div className="cart-main-img">
                <img srcSet={thumbnail} alt="" />
              </div>
            </Row>
          </Col>
            <Row><div className='cart-add'><Button><h1 className='cart-add-btn'>Add Cart</h1></Button> </div></Row>
        </div>
        </Col>
        <Col md={6} >
          <Row>
            <div className='cart-name'>
              <h1 className='cart-name-head'>{title}</h1>
              <div className="cart-name-rating-box">
                <div className="cart-name-rating">
                  <h1 className='cart-name-rating-no'>{rating}</h1>
                </div>
                <div className="cart-name-rating-brand">
                  <h1 className="cart-name-rating-brand-name">{brand}</h1>
                </div>
              </div>
              <h1 className="cart-name-price">Price : $ {price}</h1>
              <div className="cart-name-price-sub">
                <div className="cart-name-price-sub-not">
                  <h1 className="cart-name-price-sub-not-name">$ <s>4654</s></h1>
                </div>
                <div className="cart-name-price-sub-off">
                  <h1 className="cart-name-price-sub-off">Off : {discountPercentage} %</h1>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className='cart-detales'>
              <h1 className="cart-detales-head">Description : </h1>
              <p className="cart-detales-paragraph">{description}</p>
            </div>
          </Row>
          <Row>
            <div className='cart-discription'> </div>
          </Row>
          <Row>
            <div className='cart-specification'></div>
          </Row>
          <Row>
            <div className='cart-users'>
              <Row><div className="cart-user"></div></Row>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  )
}
