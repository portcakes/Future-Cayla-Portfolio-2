import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Caards() {
    return (
        <Container fluid className='pb-3 bg-light'>
            <Row className='bg-light'>
                <Col className='col-12 text-center text-primary'>
                    <h1 className='p-3'>Knowledge Central:</h1>
                    <p className='lead pb-4'>Various tech I'm good at</p>
                </Col>
            </Row>
            <Row className='bg-light g-4 text-center'>
                <Col className='col-12 col-md-4'>
                    <Card>
                        <Card.Img variant="top" src="react.png" className='p-3'/>
                        <Card.Body>
                            <Card.Title className='text-center'>React</Card.Title>
                            <Card.Text>
                                I build React applications with Next.js and Tailwind CSS. I also have experience with React Native.
                            </Card.Text>
                            <Button href='/projects' variant="primary">See More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-12 col-md-4'>
                    <Card>
                        <Card.Img variant="top" src="node.png" className='p-3'/>
                        <Card.Body>
                            <Card.Title className='text-center'>Node.js</Card.Title>
                            <Card.Text>
                                I build Node applications with Express and MongoDB. I also have experience with GraphQL and Apollo.
                            </Card.Text>
                            <Button href='/projects' variant="primary">See More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-12 col-md-4'>
                    <Card>
                        <Card.Img variant="top" src="python1.png" className='p-3'/>
                        <Card.Body>
                            <Card.Title className='text-center'>Python</Card.Title>
                            <Card.Text>
                                I build Python applications with Flask and SQLAlchemy. I also have experience with Django.
                            </Card.Text>
                            <Button href='/projects' variant="primary">See More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}