import React from 'react'
// import RoomsFilter from './RoomsFilter'
import PhonesList from './PhonesList'
import {withShopConsumer} from '../Context'


function PhonesContainer({context}){
    const {sortedPhones, phones} = context
   
        return (
            <>
                {/* <RoomsFilter rooms={rooms}/> */}
                <h6>&nbsp;</h6>
                <PhonesList phones={sortedPhones}/>
            </>
            )

}

export default withShopConsumer(PhonesContainer)