import React from 'react'
import Footer from '../_components/Footer/page'
import Hero from '../_components/HeroSection/page'
import Skills from '../skills/page'
import Services from '../services/page'
import Education from '../education/page'
function LandingPage() {
    return (
        <div className=''
            style={
                {
                    backgroundImage: `url('https://img.freepik.com/free-vector/dark-grunge-background_1048-11745.jpg?w=740&t=st=1701339886~exp=1701340486~hmac=7f9e544c91f028e202814e22e15352814ce48802be5661c567705b9bf4c96de0')`,
                    // backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                }
            }
        >
            <Hero />
            <Skills />
            <Services />
            <Education />
            <Footer />
        </div>
    )
}

export default LandingPage