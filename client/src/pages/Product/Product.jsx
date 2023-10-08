import { useEffect, useState } from 'react';
import './Product.css'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/ProductSlice/ProductSlice';


function Product() {
  const [details, Setdetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    Setdetails(location.state.product)
  }, [location])

  const dispatch = useDispatch()

  const [qty, setqty] = useState(1)
  const minushandler = () => {
    setqty(qty - 1)
  }
  const plushabdler = () => {
    setqty(qty + 1)
  }
  return (
    <div className='product-container flex'>
      <div className='product-image relative'>
        <img src={details.image} alt={details.title} />
        <p className='isnew'>Sale</p>
      </div>

      <div className='product-details flex flex-column justify-center'>
        <h1 className='product-title-details m-20'>{details.title}</h1>
        <div className='price-details flex align-center gap-40 m-40'>
          <p className='price-details-old '>${details.oldPrice}</p>
          <p className='price-details-price'>${details.price}</p>
        </div>
        <div className='rate-details flex gap-40 m-40'>
          <p>{details.rating
            //for(let i =0  ; i<details.rating ; i++)
            // {
            //   details.rating 
            // }
          }</p>
          <p>(1 Customer review)</p>
        </div>
        <p className='product-details-details m-40'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et lacinia metus. Pellentesque dapibus augue a lectus rutrum pretium. Nam a nunc vel purus egestas molestie. Phasellus non imperdiet diam.
        </p>
        <div className='quantity-details flex align-center m-40'>
          <div className='quantity flex gap-10 '>
            <p>Quantity</p>
            <i onClick={qty === 1 ? (state => state.qty = 1) : minushandler} className="fa-solid fa-minus pointer"></i>
            <p>{qty}</p>
            <i onClick={plushabdler} className="fa-solid fa-plus pointer"></i>
          </div>
          <button onClick={()=>dispatch(addToCart({
                                    _id: details._id,
                                    title: details.title,
                                    image: details.image,
                                    price: details.price,
                                    quantity: qty,
                                    description: details.description,}))&toast.success(`${details.title} is added`)
                                    
                                    } className='addtocart-details '>
            add to cart
          </button>

        </div>
        <div className='category-details'>
          Category:  {details.category}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Product