import React from 'react'
import './Fliter_Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { Setselectedcategory, Setselectedprice } from '../../../redux/ProductSlice/ProductSlice'
const Filter_Products = ({ products }) => {


    const dispatch = useDispatch()
    const { price_filter,category_filter } = useSelector(state => state.bazar)

    console.log('price filter ' + price_filter)

    return (
        <div className='filter'>
            <div className='filter_container'>
                {/* filter by price */}
                <div className='filter_by_price'>
                    <h3 className='filter_title'>Price</h3>
                    <div className='space'>
                        <div className="input_container">
                            <input type="radio" checked={parseInt(price_filter) === 0} name='price' value={0} onChange={(e) => { dispatch(Setselectedprice(e.target.value)) }} id="zero" />
                            <label htmlFor="zero">All</label>
                        </div>
                        <div className="input_container">
                            <input type="radio" name='price' value={100} onChange={(e) => { dispatch(Setselectedprice(e.target.value)) }} id="one" />
                            <label htmlFor="one">0$-100$</label>
                        </div>
                        <div className="input_container">
                            <input type="radio" name='price' value={200} onChange={(e) => { dispatch(Setselectedprice(e.target.value)) }} id="two" />
                            <label htmlFor="two">100$-200$</label>
                        </div>
                        <div className="input_container">
                            <input type="radio" name='price' value={1000} onChange={(e) => { dispatch(Setselectedprice(e.target.value)) }} id="three" />
                            <label htmlFor="three">Up 200$</label>
                        </div>
                    </div>

                </div>
                {/* filter by category */}
                <div className='filter_by_category'>
                    <h3 className='filter_title'>Category</h3>
                    <div className='space'>
                        <div className="input_container">
                            <input type="radio" checked={category_filter === ''} name='category' value={''} onChange={(e) => { dispatch(Setselectedcategory(e.target.value)) }} id="all_cat" />
                            <label htmlFor="all_cat">All</label>
                        </div>
                        <div className="input_container">
                            <input type="radio" name='category' value={'women'} onChange={(e) => { dispatch(Setselectedcategory(e.target.value)) }} id="women" />
                            <label htmlFor="women">Women</label>
                        </div>
                        <div className="input_container">
                            <input type="radio" name='category' value={'men'} onChange={(e) => { dispatch(Setselectedcategory(e.target.value)) }} id="men" />
                            <label htmlFor="men">Men</label>
                        </div>
                        <div className="input_container">
                            <input type="radio" name='category' value={'kids'} onChange={(e) => { dispatch(Setselectedcategory(e.target.value)) }} id="kids" />
                            <label htmlFor="kids">Kids</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter_Products