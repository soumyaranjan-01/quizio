import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { db } from '../../../firebase'

const Polls = ({ setPage, pollCards, setPollCards, pollId, setPollId, setPollCard }) => {

    function redirectToPoll(id) {
        setPollId(id)

        const pRef = db.collection('polls').doc(id)

        pRef.get().then(docRef => {
            if(docRef.exists) {
                setPollCard(docRef.data())
                setPage('Poll Page')    
            }
        }).catch(err => console.log(err.message))        

    } 

    useEffect(() => {
        db.collection('polls').get().then(querySnapshot => {
            const polls = querySnapshot.docs.map(doc => doc.data())
            setPollCards(polls)
        })
    }, [setPollCards])

    return (
        <div>
            {
                pollCards && pollCards.map((card, idx) => {
                    return (
                        <Card
                            bg="dark"
                            index={idx}
                            style={{ width: '18rem' }}
                            className="mb-2 w-100"
                        >
                            <Card.Body style={{paddingTop: '0'}}>
                            <Card.Title style={{color: 'grey', textAlign: 'left'}}>{card.pollQuestion}</Card.Title>
                            <Card.Text className="text-left d-flex align-items-center justify-content-between">
                                <div style={{marginTop: '10px'}}>
                                    <Button className="w-100" variant="success" onClick={() => redirectToPoll(card.uid)}>Proceed</Button>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            {
                pollCards.length === 0 ? <h1>No Polls Available</h1>: null
            }
        </div>
    )
}

export default Polls
