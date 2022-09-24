import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function About() {
    return (
        <Container fluid>
            <Row className='p-5 text-center shadow-1-strong bg-dark'>
                <Col className='col-12 col-md-6 d-grid pe-md-5 pb-5 align-items-center'>
                    <h1 className='text-light'>About Me</h1>
                    <p className='text-light'>I am a software engineer who is passionate about building excellent software that improves the lives of those around me. I specialize in creating applications that are scalable, maintainable, and performant with the best user and developer experience. I am currently working on a full-stack application with React, Node, Express, and MongoDB.</p>
                    <p className='text-light'>When I am not coding, you can find me playing video games, reading, or learning about the latest tech trends.</p>
                    <Link href='/about'>
                        <Button variant='outline-warning'>Learn More</Button>
                    </Link>
                </Col>
                <Col className='col-12 col-md-6'>
                    <Image src='cayla_2.jpeg' fluid rounded className='width-50'></Image>
                </Col>
            </Row>
        </Container>
    )
}