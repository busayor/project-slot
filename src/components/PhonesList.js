import React from 'react'
import Phone from './Phone'

export default function PhonesList({phones}) {
    if(phones.length === 0){
        return(
            <div className="empty-search">
                <h3>unfortunately, no rooms your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="rooms-list">
            <div className="roomslist-center">
                {
                    phones.map(item => {
                        return <Phone key={item.id} phone={item}/>
                    })
                }
            </div>
        </section>
    )
}
