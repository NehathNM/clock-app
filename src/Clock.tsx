import React, { useEffect, useState } from "react";
import './Clock.css'
import Button from "react-bootstrap/button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Clock() {
    const [clockState, setClockState] = useState('');

    //date.getMinutes()-10<10?'0':'')
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.getHours() + ':' + date.getMinutes());
        }, 1000)
    }, [])

    const [isMirrored, setMirroring] = useState(false);

    const Mirror = () => {

        setMirroring(true);
    }

    const Unmirror = () => {
        setMirroring(false);
    }

    let classname: string = "";

    if (isMirrored == true) {
        classname = "mirrored-ticking-clock"
    } else if (isMirrored == false) {
        classname = "ticking-clock"
    }
    return (
        <Container>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}
                    sm={{ span: 8, offset: 2 }}
                    md={{ span: 6, offset: 3 }}
                    lg={{ span: 4, offset: 4 }}
                >
                    <div className="title">
                        Clock App for Ekkodale
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col xs={{ span: 10, offset: 1 }}
                    sm={{ span: 8, offset: 2 }}
                    md={{ span: 6, offset: 3 }}
                    lg={{ span: 4, offset: 4 }}
                >
                    <div className={classname}>
                        {clockState}
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col xs={{ span: 10, offset: 1 }}
                    sm={{ span: 8, offset: 2 }}
                    md={{ span: 6, offset: 3 }}
                    lg={{ span: 4, offset: 4 }}
                >
                    <Row>
                        <Button variant="warning" onClick={() => Mirror()}>Mirror Clock Horizontically</Button>
                        <Button variant="success" onClick={() => Unmirror()}>Undo Mirroring</Button>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default Clock;