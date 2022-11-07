import React from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

// import './About.css'

function About() {
    return (

        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
            <MDBCol>
                <MDBCard shadow='0' border='light' background='white' className='ms-auto me-auto' style={{ width: '25rem', }}>
                    <MDBCardBody>
                        <MDBCardTitle>OUR MISSION</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard shadow='0' border='light' background='white' className='ms-auto me-auto' style={{ width: '25rem', }}>
                    <MDBCardBody>
                        <MDBCardTitle>OUR VISION</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

    );
}

export default About