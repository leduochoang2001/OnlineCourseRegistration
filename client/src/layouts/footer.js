import React, { } from 'react';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter bgColor='transparent' className='text-center text-lg-start text-muted'>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
                            <p>
                                <MDBIcon icon="home" className="me-3" />
                                Hanoi,VietNam
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                lehoang2001@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

        </MDBFooter>
    );
}

export default Footer