import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function Ann() {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant='info' onClose={() => setShow(false)} dismissible className='m-0'>
                <Alert.Heading>Hello Friend!</Alert.Heading>
                <p>
                    Good News! I have a new project in the works. It's a full-stack application with React, Node, Express, and MongoDB. I'm also using Tailwind CSS for styling. I'm excited to share it with you soon!
                </p>
                <hr />
                <p className='mb-0'>
                    Click <Alert.Link href='/contact' className='text-decoration-none text-primary'>here</Alert.Link> to get in touch with me!
                </p>
            </Alert>
        );
    }
}