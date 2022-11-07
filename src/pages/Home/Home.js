import React from 'react'

import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import CategoryCards from '../../components/CategoryCards'
import NewStoriesCard from '../../components/NewStoriesCard'
import About from '../../components/About'
import Footer from '../../components/Footer'

// import './Home.css'

function Home() {
    return (
        <>
            <Navbar />

            <section>
                <Carousel />
            </section>

            <section>
                <section className='pt-5 pb-5'>
                    <p className='text-center fw-normal fs-2'>Choose a Category</p>
                </section>
                <CategoryCards />
            </section>

            <section>
                <section className='pt-5 pb-5'>
                    <p className='text-center fw-normal fs-2'>New stories to read</p>
                </section>
                <NewStoriesCard />
            </section>

            <section>
                <section className='pt-5 pb-5'>
                    <p className='text-center fw-normal fs-2'>About Us</p>
                </section>
                <About />
            </section>

            <Footer />

        </>
    )
}

export default Home