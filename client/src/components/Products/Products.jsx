import CardProduct from './CardProduct/CardProduct'
import './Products.css'
// eslint-disable-next-line react/prop-types
function Products({ products }) {
    return (
        <div className='shop-container color-black flex flex-column align-center '>
            <div className='shop flex flex-column'>
                <div className='shop-title flex flex-column justify-start align-center gap-20'>
                    <div className='h1-header'>
                        <h2 className='text-center color-white'>Shopping everyday</h2>
                    </div>
                    <p className='text-description text-center font-m'>
                        Lorem ipsum dolor sit amet,  adipiscing elit. Suspendisse quis venenatis massa, a tincidunt odio. Phasellus nec leo vel tortor faucibus consectetur. Proin vitae diam magna. Integer mi sem, luctus nec ante sit amet,
                    </p>
                </div>
            </div>
            <div className='shop-items gap-40'>
                {
                    // eslint-disable-next-line react/prop-types
                    products.map((item) => 
                    {
                        return (
                        <CardProduct key={item._id} item={item} />
                        )}
                    )
                }
            </div>
        </div>
    )
}

export default Products