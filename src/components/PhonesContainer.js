import React from 'react'
import PhonesFilter from './PhonesFilter'
import PhonesList from './PhonesList'
import {withShopConsumer} from '../Context'


function PhonesContainer({context}){
    const {sortedPhones, phones} = context
   
        return (
            <>
                <PhonesFilter phones={phones}/>
                <PhonesList phones={sortedPhones}/>
            </>
            )

}

export default withShopConsumer(PhonesContainer)