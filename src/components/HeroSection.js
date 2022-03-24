import React from 'react'
import Button from './Button'
import '../App.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITES</h1>
            <p>what are you waiting for?</p>
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large' 
                childern={'Get Started'}
                >
                <i className='far fa-play-circle'  />
                </Button>

                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                childern={' WATCH TRAILER' }
                icon={<i className="far fa-play-circle" />}
                >
                    
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
