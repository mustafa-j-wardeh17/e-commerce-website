import { useSelector } from 'react-redux'
import CardProduct from './CardProduct/CardProduct'
import Filter_Products from './Filter Products/Filter_Products'
import './Products.css'
// eslint-disable-next-line react/prop-types
function Products({ products }) {

    const { price_filter, category_filter } = useSelector(state => state.bazar)

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

            <Filter_Products products={products} />
            <div className='shop-items gap-40'>
                {
                    // eslint-disable-next-line react/prop-types
                    products.filter((product) => {
                        if (parseInt(price_filter) === 0) {
                            return product.price > 0
                        }
                        else if (parseInt(price_filter) === 100) {
                            return product.price > 0 && product.price <= 100
                        }
                        else if (parseInt(price_filter) === 200) {
                            return product.price > 100 && product.price <= 200
                        }
                        else if (parseInt(price_filter) === 1000) {
                            return product.price > 200 && product.price <= 1000
                        }
                    }).filter((cat) => {
                        if (category_filter === '') {
                            return cat.category
                        }
                        else if (category_filter === 'men') {
                            return cat.category === 'men'
                        }
                        else if (category_filter === 'women') {
                            return cat.category === 'women'
                        }
                        else if (category_filter === 'kids') {
                            return cat.category === 'kids'
                        }
                    }).map((item) => {
                        return (
                            <CardProduct key={item._id} item={item} />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Products