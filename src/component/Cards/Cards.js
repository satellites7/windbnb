import React, { useEffect, useState } from 'react'
import stays from './stays.json'
import './Card.css'
import { Container, Card, Row } from 'react-bootstrap'


const Cards = (props) => {
    const [cards, setCards] = useState(stays)
    useEffect(() => {
        let cityData = props.loc ? stays.filter((item) => item.city + ', Finland' === props.loc) : stays;
        let guestData = cityData.filter((item) => { return item.maxGuests > props.num })
            setCards(guestData);
    }, [props.loc,props.num])
    return (
        <>
            <Container>
                <div className="box">
                <h1>Stays in Finland</h1>
                <span>{cards.length}+ stays</span>
                </div>
                <Row lg={3} md={2} xs={1} className='row-cards'>
                    {

                        cards.map((item, index) => {
                            return (
                                <Card style={{ border: 'none' }} key={index}>
                                    <Card.Img variant="top" src={item.photo} className='card-img' />
                                    <Card.Body style={{ paddingLeft: '0', paddingRight: '0' }}>
                                        <Card.Text >
                                            {item.superHost ? <><span className='ifSuperHost'>surper Host</span> <span className='span-type' style={{ marginLeft: '10px' }}>{item.type}</span></>
                                                : <span className='span-type'>{item.type}</span>}
                                            <span className="span-rating">
                                                <span class="material-icons md16">
                                                    star
                                                </span>
                                                {' '}
                                                {item.rating}
                                            </span>
                                            <p style={{ marginTop: "12px" }}>{item.title}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Cards
