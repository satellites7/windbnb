import React, { useState, useImperativeHandle, useRef,useEffect } from 'react'
import { Modal, Container, Row, Col, Button, ListGroup } from 'react-bootstrap'
import './Nav.css'
import svg from './logo.svg'



function Nav(props) {
    let childRef = React.createRef();
    const showModal = () => {
        childRef.current.handleShow();
    }
    
    return (
        <div>
            <div className="container" style={{ marginTop: '32px' }}>
                <div className="row msRow">
                    <div className="col-8">
                        <img className='logo' src={svg} alt="" />
                    </div>
                    <div className="col-4 msDiv">
                        <div class="input-group mb-3" onClick={showModal}>
                            <input type="text" class="form-control" placeholder="Add location" aria-label="location" aria-describedby="basic-addon1" id='input1' />
                            <input type="text" class="form-control" placeholder="Add guests" aria-label="guests" aria-describedby="basic-addon1" id='input2' />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                                <span class="material-icons">
                                    search
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Example onRef={childRef} setLoc={props.setLoc} setNum={props.setNum}/>
        </div>
    )
}

export default Nav



function Example(props) {

    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');
    const [adluts, setAdluts] = useState(0);
    const [children, setChildren] = useState(0);
    const [total, setTotal] = useState(0);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    let {setLoc,setNum} = props;

    useEffect(() => {
        setLoc(location)
        setNum(children + adluts)
    })
    useImperativeHandle(
        props.onRef,
        () => {
            return {
                handleShow: handleShow
            }
        })
    function handleShow(breakpoint) {
        setShow(true);
    }
    const chooseLocation = (e) => {
        setLocation(e.target.textContent);
    }
    return (
        <>
            <Modal show={show} fullscreen onHide={() => setShow(false)} style={{ height: '460px' }}>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={6} md={4} style={{ position: 'relative' }}>
                                <span className='input-name'>Location</span>
                                <input type="text" class="form-control" placeholder="Add location" aria-label="location" 
                                aria-describedby="basic-addon1" id="input3" value={location} onChange={(e) => {setLocation(e.target.value)}} />
                                <ListGroup variant="flush" className='list-location' style={{ cursor: ' pointer' }}>
                                    <ListGroup.Item>
                                        <span class="material-icons icon-location">
                                            place
                                        </span>
                                        <span onClick={chooseLocation}>Helsinki, Finland</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <span class="material-icons icon-location">
                                            place
                                        </span>
                                        <span onClick={chooseLocation}>
                                            Turku, Finland
                                        </span>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <span class="material-icons icon-location">
                                            place
                                        </span>
                                        <span onClick={chooseLocation}>Oulu, Finland</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <span class="material-icons icon-location">
                                            place
                                        </span>
                                        <span onClick={chooseLocation}>Vaasa, Finland</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col xs={6} md={4} style={{ position: 'relative' }}>
                                <span className='input-name'>Guests</span>
                                <input type="number" class="form-control" placeholder="Add guests" aria-label="guests"
                                 aria-describedby="basic-addon1" id="input4" value={children + adluts} onChange={(e) => {setTotal(e.target.value)}} />
                                <ListGroup variant="flush" className='list-location'>
                                    <ListGroup.Item>Adults
                                        <p className='guest-p'>Ages 13 or above</p>
                                        <span class="material-icons op-icon" onClick={() => {setAdluts(ref1.current.innerHTML*1 - 1)}}>
                                            remove_circle_outline
                                        </span>
                                        <span style={{ padding: ' 0 15px ' }} ref={ref1}>{adluts}</span>
                                        <span class="material-icons op-icon" onClick={() => {setAdluts(ref1.current.innerHTML*1 + 1)}}>
                                            add_circle_outline
                                        </span>
                                    </ListGroup.Item>
                                    <ListGroup.Item>Children
                                        <p className='guest-p'>Ages 2-12</p>
                                        <span class="material-icons op-icon" onClick={() => {setChildren(ref2.current.innerHTML*1 - 1)}}>
                                            remove_circle_outline
                                        </span>
                                        <span style={{ padding: ' 0 15px ' }} ref={ref2}>{children}</span>
                                        <span class="material-icons op-icon" onClick={() => {setChildren(ref2.current.innerHTML*1 + 1)}}>
                                            add_circle_outline
                                        </span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col xs={6} md={4}>
                                <Button variant="success" className='search-btn'>
                                    <span class="material-icons" id='icon-search' onClick={() => {}}>
                                        search
                                    </span>Search</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}


