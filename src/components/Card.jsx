
import React from 'react'
import starImage from '../assets/Star1.png'


function Card(props) {
    return (
        <div className='card'>
            <img src={`../../public/images/${props.img}`} className='card--image'/>
            <div className="card--stats">
                <img src={starImage} className='card--star' />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card