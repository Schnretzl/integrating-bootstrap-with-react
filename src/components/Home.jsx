// 1. Enhancing HomePage with React-Bootstrap
// Task 1: Integrating React-Bootstrap and Adding Buttons
//     First, ensure React-Bootstrap is installed in your project: npm install react-bootstrap bootstrap.
//     Import the necessary React-Bootstrap components into your HomePage component.
//     Add a primary button labeled "Shop Now" that represents the main call to action (CTA) for users.

// Task 2: Applying Color Scheme
//     Customize the background color of the HomePage component to improve visual appeal.
//     Apply a text color that complements the background, ensuring good readability. Expected Outcome:
//         The HomePage component's background and text colors are updated, enhancing visual contrast and readability.

// Task 3: Enhancing UI with Borders, Shadows, and Cards
//     Add a border to the HomePage component for better definition.
//     Utilize shadows on the "Shop Now" button to create a sense of depth and focus.
//     Introduce React-Bootstrap's Card component to display additional content or information on the HomePage. Expected Outcome:
//         The HomePage component features distinct borders and shadows, enhancing its aesthetic and emphasizing the "Shop Now" button.
//         Utilize the Card component to display additional content or information, such as featured products or promotions.

import { Button, Container, Card } from 'react-bootstrap';

const Home = () => {

    return (
        <Container className='bg-light text-dark p-3 border'>
            <h2>Home</h2>
            <p>Welcome to the Marvel Comics Store!</p>
            <Button variant="primary" className='shadow'>Shop Now</Button>
            <Card className='mt-3'>
                <Card.Body>
                    <Card.Title>Featured Product</Card.Title>
                    <Card.Text>
                        Check out our latest comic!
                    </Card.Text>
                    <Card.Img variant="top" 
                              src="https://i.annihil.us/u/prod/marvel/i/mg/9/20/651dedab46371.jpg"
                              style={{ width: '200px', height: 'auto'}}/>
                    <div className='mt-3'>
                        <Button variant="secondary shadow">View Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;