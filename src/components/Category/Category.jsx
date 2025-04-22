import React, { useContext, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import data from '../../../public/Data/ctgData.json';
import './Category.css';
import { ThemeContext  } from '../../index';

export const Category = ({updateValue,cls}) => {
    const sliderRef = useRef(null);
    const carouselRef = useRef(null);
    const [fetchData, setFetchData] = useState();
    const [mergData, setMergData] = useState(data);
    const [wdt , setWdt] =useState((window.innerWidth)/200);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(res => setFetchData(res));
            setWdt((window.innerWidth)/200); 
             
    }, []);


    useEffect(() => {
        if (fetchData && data) {
            const mergedData = fetchData.map(fetchItem => {
                const matchingItem = data.find(dataItem => dataItem.slug === fetchItem.slug);
                return matchingItem ? { ...fetchItem, ...matchingItem } : fetchItem; 
            });
    
            setMergData(mergedData); 
        }
    }, [fetchData],[mergData],[data]);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };


    const handleMouseWheel = (e) => {
        if (carouselRef.current) {
            if (e.deltaY > 0) {
                sliderRef.current.slickNext();
            } else {
                sliderRef.current.slickPrev();
            }
            e.preventDefault();
        }
    };

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.addEventListener('wheel', handleMouseWheel, { passive: false });
        }

        return () => {
            if (carouselRef.current) {
                carouselRef.current.removeEventListener('wheel', handleMouseWheel);
            }
        };
    }, []);


    return (
        <>
            <div className={`${cls ? 'ctg-main-main' : 'ctg-main-main-h'}`} ref={carouselRef}>
                <Slider {...settings} ref={sliderRef}>
                    {mergData.map((item) => (
                        <div key={item.id} className='ctg-main' onClick={()=>updateValue(item.url)}>
                            <div className='ctg-img-sub'>
                                <img src={item.img} alt={item.name} className='ctg-img' />
                            </div>
                            <div className="ctg-img-sub">
                                <h4 className='ctg-name'>{item.name}</h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};
