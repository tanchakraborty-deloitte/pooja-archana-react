import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';

function Navbar() {

    const [showToggle, setToggle] = useState(false);

    return (
        <MDBNavbar expand='lg' sticky light bgColor='light'>
            <MDBContainer>
                <MDBNavbarBrand className='fs-4' href='#'>
                    <img
                        src='https://img.icons8.com/color/96/null/hindu-swastik--v2.png'
                        height='60'
                        alt=''
                        loading='lazy'
                    /> PoojaArchana
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setToggle(!showToggle)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showToggle}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                        <MDBNavbarItem>
                            <MDBNavbarLink active className='fs-5' aria-current='page' href='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active className='fs-5' aria-current='page' href='#'>
                                Categories
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active className='fs-5' aria-current='page' href='#'>
                                About Us
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active className='fs-5' aria-current='page' href='#'>
                                Contact Us
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>

                    <MDBNavbarNav right className='mb-2 mb-lg-0'>

                        <MDBInputGroup tag="form" className='d-flex w-auto mt-2 mb-3'>
                            <input className='form-control' aria-label="Search" type='Search' />
                            <MDBBtn outline>Search</MDBBtn>
                        </MDBInputGroup>

                        <MDBNavbarItem>
                            <MDBNavbarLink className='fs-5 ms-3' active aria-current='page' href='/signin'>
                                <MDBBtn color='light'>
                                    Login
                                </MDBBtn>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active className='fs-5 ms-3' aria-current='page' href='/signup'>
                                <MDBBtn color='dark'>
                                    Register
                                </MDBBtn>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </MDBCollapse>

            </MDBContainer>
        </MDBNavbar>
    );
}

export default Navbar