import React from 'react'
import './Landing.css'
import chef from '../../images/chef.svg'
import Button from 'react-bootstrap/Button'

function Landing() {
    return (
        <div className="Landing">
            <img src={chef} alt="chef" className="chef-icon" />
            <h1 className="Landing-text">
                Welcome to <span className="title">cookbook.io</span>
            </h1>
            <h4 className="Landing-subtitle">connecting you with your favorite recipes</h4>
            <Button 
                variant="outline-primary" 
                size="lg" 
                className="pink-btn"
                onClick={() => { console.log("click"); }}
            >Sign Up</Button>
        </div>
    )
}

export default Landing;
