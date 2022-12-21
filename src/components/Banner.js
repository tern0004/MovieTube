import React from 'react';
import '../style/Banner.css';

export default function Banner() {
    return(
        <div className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
            backgroundPosition: 'center center',
        }}>
            <div className='banner-content'>
                <h1 className='movie-title'>Movie title</h1>
                <div className='banner-btns'>
                    <button className='banner-btn'>Play</button>
                    <button className='banner-btn'>My List</button>
                </div>
                <h2 className='banner-description'>Movie description</h2>
            </div>
        </div>
    )
}