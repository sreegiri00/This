import React, { useContext,  useCallback  } from 'react'
import './Product.css';
import { ThemeContext } from '../../index'
import { Link } from 'react-router-dom';


export const Productlist = React.memo(({ product }) => {
  const { title, price, discountPercentage, thumbnail, description, id } = product;

  const { setPassId } = useContext(ThemeContext);

  const truncateText = useCallback((text, length) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  }, []);

  const cal= useCallback((price, discount) => {
    return parseFloat((price * (1 - discount / 100)).toFixed(2));
  }, []);

  const handleClick = useCallback((id , product) => {
      console.log('Selected Product ID:', id,product);
      setPassId(product);
    },
    [setPassId]
  );
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

        <Link  to={`details/id=${id}`} className="product-card section_padd"  onClick={() => handleClick(id,product)}>
          <img src={thumbnail} alt="" srcSet="" />
          <h1 className='product-card-titel'>{truncateText(title, 20)}</h1>
          <h1 className='product-card-des'>{description}</h1>
          <div className="product-card-prices">
            <div>
              <h1 className="product-card-price"><span>Price :</span> {cal(price, discountPercentage)}$</h1>
            </div>
            <div>
              <h2 className="product-card-price-off"><s>{price}</s>$</h2>
            </div>
            <div>
              <h1 className="product-card-price-prg"><small>Off</small> {discountPercentage}%</h1>
            </div>
          </div>
        </Link>

      </>
    )


  }
});
