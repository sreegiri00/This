import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Product.css'
import { Productlist } from './Productlist';
import { Category } from '../Category/Category';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import notfount from '../../assets/notfount.webp'
import '../Category/Category.css'


export const Body = () => {

    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [ctg, setCtg] = useState('https://dummyjson.com/products');
    const[cls , setCls] = useState(true);

    useEffect(() => {
        const check = (window.innerWidth)
        if (768>check) {
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
                <div className='banner-img'></div>
            </div>
            <div className="catagory-bar">

                <div className="product-main">
                    <div className='product-bar'>
                        <div>
                            <h1 className='product-bar-head'>PRODUCTS </h1>
                        </div>
                    </div>
                </div>
                <div className={`${cls ? 'ctg-main-box': 'ctg-main-box-h'}`}>
                    <Category updateValue={setCtg} cls={cls}/>

                    <div className={`${cls ? 'product-bar-srch' : 'product-bar-srch-h'}`}>
                        <div>
                            <input type="text" className='product-input' onChange={filterProduct} placeholder='Search the products...' />
                        </div>
                    </div>

                </div>
            </div>
            <div className="product-cads container">
                {data.map((res) => <Productlist product={res} key={res.id} />)}
            </div>

        </>
    )
}
