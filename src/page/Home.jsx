import React from 'react'
import Hero from '../components/home/Hero'
import HomeNav from '../components/layout/HomeNav'
import Network from '../components/home/Network'
import Pool from '../components/home/pool'
import Work from '../components/home/Work'
import Security from '../components/home/Security'
import Partner from '../components/home/Partner'
import Update from '../components/home/Update'
import NewsLetter from '../components/home/Newsletter'
import Faq from '../components/home/Faq'
import Footer from '../components/layout/Footer'
import More from '../components/home/More'

const Home = () => {
    return (
        <div>
            <HomeNav />
            <Hero />
            <div className='bg-white'>  
            <Network />
            <Pool/>
            <Work/>
            <Security/>
            <Partner/>
            <Update/>
            <NewsLetter/>
            <Faq/>
            <div className='mt-12'>
            <More/>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home