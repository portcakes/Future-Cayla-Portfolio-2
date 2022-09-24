import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function getRandomIcon() {
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

export default function Nav1() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" display="inline">
            <Container>
                <Navbar.Brand href="/" className='text-warning'>Future Cayla {getRandomIcon()} </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='active text-info'>Home</Nav.Link>
                        <Nav.Link href="/about" className='text-info'>About</Nav.Link>
                        <Nav.Link href="/projects" className='text-info'>Projects</Nav.Link>
                        <Nav.Link href="/pricing" className='text-info'>Pricing</Nav.Link>
                        <Nav.Link href="/contact" className='text-success'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

