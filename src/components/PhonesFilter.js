import React, {useContext} from 'react'
import {ShopContext} from '../Context'
import Title from '../components/Title'

//here we are getting all the unique values
const getUnique = (item,value) => {
    return [...new Set(item.map(item => item[value]))]
}

export default function PhonesFilter({phones}) {
    const context = useContext(ShopContext)
    const {
        handleChange,
        handleReset,
        category,
        subCategory,
        ram,
        minRam,
        maxRam,
        rom,
        minRom,
        maxRom,
        price,
        minPrice,
        maxPrice,
        installmentalPayment,
        warranty
    } = context

    //here we want to get all the unique categories
    let categories = getUnique(phones, 'category')
    categories = ['all',...categories]

    //here we want to get all the unique categories
    let subCategories = getUnique(phones, 'subCategory')
    subCategories = ['all',...subCategories]

    //mapp them to each individual jsx element
    categories = categories.map((item,index) =>{
        return <option value={item} key={index}>{item}</option>
    })

    subCategories = subCategories.map((item,index) =>{
        return <option value={item} key={index}>{item}</option>
    })

    //get all unique ram and rom
    let newRam = getUnique(phones,'ram')
    newRam = newRam.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let newRom = getUnique(phones,'rom')
    newRom = newRom.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search phones"/>
            <form className="filter-form">
                {/* Select categories */}
                    {/* <div className="form-group">
                        <label htmlFor="type">category type</label>
                        <select 
                        name="category" 
                        id="category" 
                        value={category} 
                        className="form-control" 
                        onChange={handleChange}
                        >
                        {categories}
                    </select> 
                    </div> */}
                {/* End ofSelect categories */}
                {/* Select sub-categories */}
                <div className="form-group">
                        <label htmlFor="type">phone type</label>
                        <select 
                        name="subCategory" 
                        id="subCategory" 
                        value={subCategory} 
                        className="form-control" 
                        onChange={handleChange}
                        >
                        {subCategories}
                    </select> 
                    </div>
                {/* End of Select sub-categories */}
                {/* RAM */}
                <div className="form-group">
                    <label htmlFor="ram">ram</label>
                    <select 
                        name="ram" 
                        id="ram" 
                        value={ram} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                        {newRam}
                    </select>
                </div>
                {/* End of RAM */}
                {/* ROM */}
                <div className="form-group">
                    <label htmlFor="rom">rom</label>
                    <select 
                        name="rom" 
                        id="rom" 
                        value={rom} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                        {newRom}
                    </select>
                </div>
                {/* End of ROM */}
                <div className="form-group">
                    <label htmlFor="price">price N{price}</label>
                    <input 
                        type="range" 
                        name="price"  
                        min={minPrice} 
                        max = {maxPrice} 
                        id="price" 
                        value={price} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                {/* End of price filter */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            type="checkbox"
                            name="installmentalPayment"
                            id="installmentalPayment"
                            checked={installmentalPayment}
                            onChange={handleChange}
                        />
                        <label htmlFor="installmentalPayment">pay monthly?</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox"
                            name="warranty"
                            id="warranty"
                            checked={warranty}
                            onChange={handleChange}
                        />
                        <label htmlFor="warranty">warranty?</label>
                    </div>
                </div>
                {/* end of extras */}
                {/* reset button */}
                <div className="form-group">
                    <button className="btn-primary" type="reset" name="reset" id="reset" onClick={handleReset}>reset filters</button>
                </div>
                {/* end reset button */}
            </form>
        </section>
    )
}
