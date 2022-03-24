import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items' >
                        <CardItem 
                        src='/src/images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon jungle'
                        label='Adventure'
                        path='/services'
                        />

                        <CardItem 
                        src='/src/images/img-2.jpg'
                        text='Travel through the islands of bali in the private cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>

                    <ul className='cards__items' >
                        <CardItem 
                        src='/src/images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon jungle'
                        label='Adventure'
                        path='/services'
                        />

                        <CardItem 
                        src='/src/images/img-2.jpg'
                        text='Travel through the islands of bali in the private cruise'
                        label='Luxury'
                        path='/services'
                        />

                        <CardItem 
                        src='/src/images/img-2.jpg'
                        text='Travel through the islands of bali in the private cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
