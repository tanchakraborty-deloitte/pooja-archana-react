import React from 'react'

import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import CategoryCards from '../../components/CategoryCards'
import NewStoriesCard from '../../components/NewStoriesCard'
import About from '../../components/About'
import Footer from '../../components/Footer'
import { MDBContainer } from 'mdb-react-ui-kit'

// import './Home.css'

function Home() {
    return (
        <>
            <Navbar />

            <Carousel />

            <MDBContainer className='pt-5 pb-5'>
                <p className='text-center fw-normal fs-2'>Choose a Category</p>
            </MDBContainer>
            <CategoryCards />

            <MDBContainer className='pt-5 pb-5'>
                <p className='text-center fw-normal fs-2'>New stories to read</p>
            </MDBContainer>
            <NewStoriesCard />

            <MDBContainer className='pt-5 pb-5'>
                <p className='text-center fw-normal fs-2'>About Us</p>
            </MDBContainer>
            <About />


            <Footer />

        </>
    )
}

export default Home