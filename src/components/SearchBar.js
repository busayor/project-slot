import React, {useContext} from 'react'
import {ShopContext} from '../Context'
import Title from '../components/Title'

//here we are getting all the unique values
const getUnique = (item,value) => {
    return [...new Set(item.map(item => item[value]))]
}

export default function SearchBar({phones}) {
    // const context = useContext(ShopContext)
    // const {
    //     handleChange,
    //     handleReset,
    //     // category,
    //     subCategory,
    //     ram,
    //     // minRam,
    //     // maxRam,
    //     rom,
    //     // minRom,
    //     // maxRom,
    //     price,
    //     minPrice,
    //     maxPrice,
    //     installmentalPayment,
    //     warranty
    // } = context


    // //here we want to get all the unique categories
    // let subCategories = getUnique(phones, 'subCategory')

    // //mapp them to each individual jsx element
   

    // subCategories = subCategories.map((item,index) =>{
    //     return <option value={item} key={index}>{item}</option>
    // })


    return (
        <section className="filter-container">
            <Title title="search phones"/>
            <form className="filter-form">
                <div className="form-group">
                        <select 
                        name="subCategory" 
                        id="subCategory" 
                        // value={subCategory} 
                        className="form-control" 
                        // onChange={handleChange}
                        >
                        {/* {subCategories} */}
                    </select> 
                    </div>
                {/* End of Select sub-categories */}
                {/* ROM */}
                <div className="form-group">
                    <label htmlFor="rom">rom</label>
                    <input
                        type="text"
                        name="search"
                    />
                </div>
            </form>
        </section>
    )
}
