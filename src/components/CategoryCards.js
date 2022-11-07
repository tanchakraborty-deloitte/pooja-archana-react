import React from 'react'
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRipple,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

// import './CategoryCards.css'

function CategoryCards() {
    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

            <MDBCol>
                <MDBCard className='ms-auto me-auto' style={{ width: '20rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>
                            <Link to='/mythology'>
                                Mtthology Stories
                            </Link>
                        </MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol>
                <MDBCard className='ms-auto me-auto' style={{ width: '20rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>
                            <Link to='/temples'>
                                Temples
                            </Link>
                        </MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol>
                <MDBCard className='ms-auto me-auto' style={{ width: '20rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>
                            <Link to='/festivals'>
                                Festivals & Cultures
                            </Link>
                        </MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </MDBRow>

    );
}

export default CategoryCards