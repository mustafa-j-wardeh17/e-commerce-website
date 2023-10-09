/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
// import './CardProduct.css'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../redux/ProductSlice/ProductSlice';
import '../Products.css'
function CardProduct({ item }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _id = item.title;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);

    const handleDetails = () => {
        navigate(`/product/${rootId}`, {
            state: {
                product: item,
            },
        });
    }

    return (
        <div className='cards-container'>
            <div className='CardProduct flex flex-column'>
                <div onClick={handleDetails} className='card-image'>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className='card-content flex flex-column'>
                    <div className='flex justify-between  relative '>
                        <h2 className='card-title  bold text-wrap'>{item.title}</h2>
                        <div className='price-addcart  absolute'>
                            <div className='price-container flex justify-between align-center'>
                                <div className='price flex gap-10 '>
                                    <span className='old-price'>${item.oldPrice}</span>
                                    <span className='bold'>${item.price}</span>
                                </div>
                                <p
                                    onClick={() => {
                                        dispatch(
                                            addToCart({
                                                _id: item._id,
                                                title: item.title,
                                                image: item.image,
                                                price: item.price,
                                                quantity: 1,
                                                description: item.description,
                                            },)
                                        )&&
                                        toast.success(`${item.title} is added`);
                                    }}
                                    className='addtocart bold'
                                >
                                    Add to cart
                                </p>

                            </div>
                        </div>
                    </div>
                    <p className='category'>{item.category}</p>
                </div>
                {
                    item.isNew && <p className='isnew'>sale</p> 
                }
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

export default CardProduct