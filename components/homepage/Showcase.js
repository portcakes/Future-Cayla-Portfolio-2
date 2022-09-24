import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';


function getRandomIconz() {
    const icons = [
    <i className="bi bi-gem"></i>,
    <i className="bi bi-gear-wide-connected"></i>,
    <i className="bi bi-gift"></i>,
    <i className="bi bi-filetype-pdf"></i>,
    <i className="bi bi-filetype-js"></i>,
    <i className="bi bi-ev-station"></i>,
    <i className="bi bi-dpad"></i>,
    <i className="bi bi-easel2"></i>,
    <i className="bi bi-emoji-heart-eyes"></i>,
    <i className="bi bi-egg-fried"></i>,
    <i className="bi bi-emoji-smile"></i>,
    <i className="bi bi-device-ssd"></i>,
    <i className="bi bi-columns"></i>,
    <i className="bi bi-hand-index-thumb"></i>,
    <i className="bi bi-hdd"></i>,
    <i className="bi bi-hearts"></i>,
    <i className="bi bi-images"></i>,
    <i className="bi bi-incognito"></i>,
    <i className="bi bi-joystick"></i>,
    <i className="bi bi-laptop"></i>,
    <i className="bi bi-magic"></i>,
    <i className="bi bi-moon-stars-fill"></i>,
    <i className="bi bi-paperclip"></i>,
    <i className="bi bi-peace"></i>,
    <i className="bi bi-printer"></i>,
    <i className="bi bi-rainbow"></i>,
    <i className="bi bi-robot"></i>,
    <i className="bi bi-smartwatch"></i>,
    <i className="bi bi-terminal"></i>,
    <i className="bi bi-ticket-perforated"></i>,
    <i className="bi bi-trophy"></i>,
    <i className="bi bi-wifi"></i>,
    <i className="bi bi-window"></i>,
    <i className="bi bi-vinyl-fill"></i>,
    <i className="bi bi-airplane-engines"></i>,
    <i className="bi bi-asterisk"></i>,
    <i className="bi bi-battery-charging"></i>,
    <i className="bi bi-journal-code"></i>
    ];
    return icons[Math.floor(Math.random() * icons.length)];

}


export default function Showcase() {
    return (
        <Container fluid className=''>
            <Row className='p-5 text-center shadow-1-strong bg-primary'>
                <Col className='col-12 col-md-6'>
                    <Image src='cayla_1.jpeg' fluid rounded className='width-50'></Image>
                </Col>
                <Col className='p-5'>
                    <h1 className='text-warning'>Future Cayla</h1>
                    <p className='lead text-light'>Web Developer</p>
                    <p className='lead text-light'>Code Magician</p>
                    <p className='lead text-warning'>Cool Gal</p>
                    <h1 className='text-info'>{getRandomIconz()}</h1>
                    <Link href={'/contact'}><Button variant='light' className='mt-3'>Let's Get Started</Button></Link>
                </Col>
            </Row>
        </Container>
    )
}