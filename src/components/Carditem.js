import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
import './Carditem.css'
function Carditem() {
    return (
        <>
            <section className='sec'>
                <div className='pt-5'>
                    <p>Hello</p>
                </div>
                <MDBCard className='mx-5 mt-5' style={{ width: '18rem' }}>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
                    <MDBCardBody>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </section>


        </>

    )
}

export default Carditem