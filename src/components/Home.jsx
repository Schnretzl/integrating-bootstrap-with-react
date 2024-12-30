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

// Task 4: Adding a Responsive Image to HomePage
//     Select an image that represents the theme of your application. For demonstration purposes, assume the image is located in your project at src/assets/welcome-image.jpg.
//     Import the Image component from React-Bootstrap and use it to add the chosen image to your HomePage component.
//     Apply React-Bootstrap's responsive image features to ensure the image scales nicely on different screen sizes.

import { Button, Container, Card, Image } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid className="p-0">
            <Image src='./src/assets/welcome-image.jpg' className='img-fluid w-100 h-auto'/>
            <Container className="bg-light text-dark p-3 mt-3 border" style={{ maxWidth: '800px' }}>
                <h2>Home</h2>
                <p>Welcome to the Marvel Comics Store!</p>
                <Button variant="primary" className="shadow">Shop Now</Button>
                <Card className="mt-3">
                    <Card.Body>
                        <Card.Title>Featured Product</Card.Title>
                        <Card.Text>
                            Check out our latest comic!
                        </Card.Text>
                        <Card.Img 
                            variant="top" 
                            src="https://i.annihil.us/u/prod/marvel/i/mg/9/20/651dedab46371.jpg"
                            style={{ width: '200px', height: 'auto' }}
                        />
                        <div className="mt-3">
                            <Button variant="secondary" className="shadow">View Details</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
};

export default Home;