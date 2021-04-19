import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import QuestionGenerator from './QuestionGenerator'

const LiveRoom = ({ setPage,score,setScore,user,cardId }) => {
    const [connectionStatus,setConnectionStatus] = useState(false)
    const [message, setMessage] = useState('Connecting...')
    
    useEffect(() => {
        if(message === 'Connecting...') {
            setTimeout(() => {
                setScore(0)
                setMessage('')
                setConnectionStatus(true)
            }, 2000);
        }
    }, [message, setScore])

    return (
        <div>
            <Card
                style={{ width: '18rem', background: '#242830'}}
                className="mb-2 w-100"
            >
                <Card.Body style={{paddingTop: '0'}}>
                <Card.Text>
                    <h4>{message}</h4>
                </Card.Text>
                {connectionStatus ? <QuestionGenerator setPage={setPage} score={score} setScore={setScore} user={user} cardId={cardId} /> : null}
                </Card.Body>
            </Card>
        </div>
    )
}

export default LiveRoom
