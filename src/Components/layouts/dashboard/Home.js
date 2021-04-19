import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Home = ({ setPage, setCardId }) => {
    
    const cards = [
        {
            id: 'gk',
            title: 'General Knowledge',
            description: 'Beginner'
        },
        {
            id: 'science',
            title: 'Science',
            description: 'Intermediate'
        },
        {
            id: 'history',
            title: 'History',
            description: 'Indian History(Intermediate)'
        }
    ]

    const RedirectToRoom = (id) => {
        setCardId(id)
        setPage('Live Room')
    }

    return (
        cards.map((card, idx) => {
            return (
                <Card
                    bg="dark"
                    index={idx}
                    style={{ width: '18rem' }}
                    className="mb-2 w-100"
                >
                    <Card.Body style={{paddingTop: '0'}}>
                    <Card.Title style={{color: 'grey', textAlign: 'left'}}>{card.title}</Card.Title>
                    <Card.Text className="text-left d-flex align-items-center justify-content-between">
                        <div>{card.description}</div>
                        <div style={{marginTop: '10px'}}>
                            <Button className="w-100" variant="success" onClick={() => RedirectToRoom(card.id)}>Play</Button>
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            )
        })
    )
}

export default Home
