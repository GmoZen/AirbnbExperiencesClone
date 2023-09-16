
import React from 'react'
import swimmerImage from '../assets/image12.png'
import starImage from '../assets/Star1.png'


function Card() {
    return (
        <div className='card'>
            <img src={swimmerImage} className='card--image'/>
            <div className="card--stats">
                <img src={starImage} className='card--star' />
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
}

export default Card