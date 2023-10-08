import './Cart.css'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from '../../redux/ProductSlice/ProductSlice'
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react'

function Cart() {
  const user = useSelector(state=>state.bazar.userInfo)
  const cart_items = useSelector((state) => {
    console.log('Redux State:', state);
    return state.bazar.productData;
  });

  const dispatch = useDispatch()
  let total_price = 0;
  let sub_price = 0;


  const [Pay,SetPay]=useState(false)
  const checkouthandler =()=>{
    if(user){
      SetPay(true)
    }
    else{
      toast.error('please login by account')
      SetPay(false)
    }
  }
  return (
    <div className='cart-container'>
      <img className='cart-image' src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cartImg" />
      <div className='cart-content flex justify-between'>
        <div className='cart-details'>
          <h3 className='font-xl font-500'>shopping cart</h3>
          <div className='shopping-items font-500 flex justify-center flex-column gap-40'>
            {
              cart_items ?
                cart_items.map((item) => {
                  return (<div className='shop-item flex align-center gap-40' key={item._id}>
                    <i onClick={() => 
                      {
                        dispatch(deleteItem(item._id));
                        toast.error(`${item.title} is removed`);
                      }
                    } className="fa-solid fa-xmark pointer"></i>
                    <img className='item-image' src={item.image} alt='item' />
                    <p className='shop-item-title small1200'> {item.title}</p>
                    <p className='shop-item-price small1200'> ${item.price.toFixed(2)}</p>
                    <div className='quantity flex gap-10'>
                      <p className='qty-item small1200'>Quantity</p>
                      <i onClick={() => dispatch(decrementQuantity(item))} className="fa-solid fa-minus pointer"></i>
                      <p id='qty'>{item.quantity}</p>
                      <i onClick={() => dispatch(increamentQuantity(item))} className="fa-solid fa-plus pointer"></i>
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  )
                })
                : console.log('nothing to show')
            }
            <button onClick={() => dispatch(resetCart()) & toast.error('Cart Reset Well')} className='reset-products'>Reset Cart</button>

          </div>
        </div>


        <div className='cart-totals font-26 font-500'>
          {
            cart_items.map((item) => {
              total_price +=item.quantity * item.price;
              sub_price += item.price;

            })
          }
          <h2 className='m-30' > cart totals</h2>
          <div className='m-30 subtotal flex gap-30'>
            <p>Subtotal</p>
            <p>${sub_price.toFixed(2)}</p>
          </div>
          <div className='shipping flex gap-30 m-60'>
            <p>Shipping</p>
            <p className='shipping-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut lacus sed lacus</p>
          </div>

          <div className='total flex justify-between align-center'>
            <p>Total</p>
            <p>${total_price.toFixed(2)}</p>
          </div>
          <button onClick={checkouthandler} type='button'>
            Proceed to checkout
          </button>
          {
            Pay &&
            <div className='payment'>
              <StripeCheckout
                stripeKey='pk_test_51NucWEJlEV4xI8feUiy5Jm9J9itofLafnsBIHxN0ma0jMYET23pwt7JWwgYR1jEkdsFxXAjGbAzMgUnHjzabBTDO0019eBvOoa'
                name='Bazar online Shopping'
                amount={total_price*100}
                label='Pay to bazar'
                description={`Your Payment amount is ${total_price}`}
                // token={}
                email={user.email}
              />
            </div>
          }
        </div>
      </div>
      <div className='rest-home'>
        <Link to={'/'}>
          <p className='go-shopping flex align-center gap-10'><i className="fa-solid fa-left-long"></i>go shopping</p>
        </Link>
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

export default Cart