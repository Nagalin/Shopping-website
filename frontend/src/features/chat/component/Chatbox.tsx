import React from 'react';
import { Container, Stack, Form, Button } from 'react-bootstrap';

export default function Chatbox() {
    return (
        <Container className='bg-light'>
            <Stack>
                <div className="chat-header">Chat App</div>
            </Stack>
            <Stack className="chat-messages">
                <div
                    className="message"
                    style={{ alignSelf: 'flex-end', backgroundColor: 'lightblue' }}
                >
                    Hello
                </div>
                <div
                    className="message"
                    style={{ alignSelf: 'flex-start', backgroundColor: 'lightgray' }}
                >
                    What's up, man?
                </div>
            </Stack>
            <Stack>
                <Form>
                    <Form.Control type="text" placeholder="Type your message..." />
                    <Button variant="primary" type="submit">Send</Button>
                </Form>
            </Stack>
        </Container>
    );
}
