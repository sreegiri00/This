import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Product.css'
import { Productlist } from './Productlist';
import { Category } from '../Category/Category';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import notfount from '../../assets/notfount.webp'
import '../Category/Category.css'
import { ThemeContext } from '../../index';


export const Body = () => {

    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [ctg, setCtg] = useState('https://dummyjson.com/products');
    const [cls, setCls] = useState(true);
    const { focused } = useContext(ThemeContext)

    useEffect(() => {
        const check = (window.innerWidth)
        if (768 > check) {
            setCls(false)
        }
        else setCtg(true)
    }, []);
    useEffect(() => {
        fetch(ctg)
            .then(res => res.json())
            .then((data) => {
                setData(data.products),
                    setSearchData(data.products)
            })
    }, [ctg]);
    const inputFucused = () => {
        focused.current.focus()
    }


    //input is saved
    //search are use here 

    const filterProduct = (e) => {
        const searchValue = e.target.value.toLowerCase();
        if (searchValue == "") {
            setData(searchData)
        }
        else {
            const filtered = data.filter((product) => product.title.toLowerCase().includes(searchValue));

            if (filtered == "") {
                setData([{ "title": "The Product is not Found", "thumbnail": notfount }])
            }
            else {
                setData(filtered);
            }
        }
    };

    return (
        <>
            <div>
                <div className='banner-img'>
                    <div className='banner-head-main'>
                        <h1 className='banner-head'>Shop Smart, Shop Fast! </h1>
                        <div className='banner-p'>
                            Discover the best deals and latest trends. Browse, choose, and purchase in just a few clicks
                        </div>
                    </div>
                </div>
            </div>
            <div className="catagory-bar">
                <div className="product-main">
                    <div className='product-bar'>
                        <div>
                            <h1 className='product-bar-head' onClick={inputFucused}> PRODUCTS </h1>
                        </div>
                    </div>
                </div>
                <div className={`${cls ? 'ctg-main-box' : 'ctg-main-box-h'}`}>
                    <Category updateValue={setCtg} cls={cls} />
                    <div className={`${cls ? 'product-bar-srch' : 'product-bar-srch-h'}`}>
                        <div>
                            <input type="text" className='product-input' onChange={filterProduct} placeholder='Search the products...' ref={focused} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-cadd">
                <div className="product-cads">
                    {data.map((res) => <Productlist product={res} key={res.id} />)}
                </div>
            </div>

        </>
    )
}
