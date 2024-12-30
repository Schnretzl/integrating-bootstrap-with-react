// 2. Enhancing the NotFound Component with React-Bootstrap
// Task: Improving NotFound Component

// Integrate React-Bootstrap:
//     Ensure React-Bootstrap is installed in your project (npm install react-bootstrap bootstrap).
//     Import necessary components (Container, Row, Col, Image, Button) from React-Bootstrap.

// Apply a Color Scheme:
//     Use React-Bootstrap utilities to apply a color scheme that matches your app's design. Focus on text colors and backgrounds to make the NotFound page visually appealing.

// Structure Content with Grid:
//     Use the Container, Row, and Col components to structure the message and image within a grid layout, ensuring content is well-organized and responsive.

// Add an Engaging Image:
//     Include a friendly or humorous image related to navigation errors. This image should be responsive and fit well within the grid layout.

// Enhance Navigation with NavLink:
//     Replace the <Link> component with React-Bootstrap's NavLink for better styling and integration. Ensure the navigation back to the homepage is clear and inviting.

import React from 'react';
import { Container, Row, Col, Image, Button, NavLink } from 'react-bootstrap';


const NotFound = () => {
    return (
        <Container className="bg-light text-dark text-center d-flex align-items-center justify-content-center p-3" style={{ height: '100vh', flexDirection: 'column' }}>
            <Row className='w-100'>
                <Col xs={12} md={6} className='mt-3 d-flex align-items-center justify-content-center'>
                    <h2>404 Not Found</h2>
                </Col>
                <Col xs={12} md={6} className='mt-3'>
                    <Image className='img-fluid' src="./src/assets/oops.jpg" alt="Not Found" />
                </Col>
            </Row>
            <Row className='w-100'>
                <Col xs={12} className='mt-3'>
                    <Row>
                        <p>
                            Sorry, the page you are looking for does not exist.  Go back 
                            <NavLink to="/" style={{textDecoration: "underline", color: 'blue'}}>
                                home.
                            </NavLink>
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;