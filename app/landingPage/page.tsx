import React from 'react'
import Footer from '../_components/Footer/page'
import Hero from '../_components/HeroSection/page'
import Skills from '../skills/page'
function LandingPage() {
    return (
        <div className=''
        style={
            {
                backgroundImage: `url('https://images.unsplash.com/photo-1513569771920-c9e1d31714af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }
        }
        >
            <Hero />
            <Skills/>
            <Footer />
        </div>
    )
}

export default LandingPage