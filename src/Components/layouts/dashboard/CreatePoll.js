import React, { useState, useRef } from 'react'
import { Card, InputGroup, FormControl, Button, Form, Alert } from 'react-bootstrap'
import { db } from '../../../firebase'

const CreatePoll = () => {
    const pollRef = useRef()
    const optionOneRef = useRef()
    const optionTwoRef = useRef()
    const optionThreeRef = useRef()
    const optionFourRef = useRef()
    const [message, setMessage] = useState('')
    const [backgroundcolor, setColor] = useState('')

    function postPollLive(){
        const pRef = db.collection('polls').doc()
        pRef.set({
            pollQuestion: pollRef.current.value,
            options: [
                {option: optionOneRef.current.value, count: 0},
                {option: optionTwoRef.current.value, count: 0},
                {option: optionThreeRef.current.value, count: 0},
                {option: optionFourRef.current.value, count: 0},
            ],
            uid: pRef.id
        }).then(() => {
            setMessage('Your Poll is Live now!!')
            setColor('success')
        }).catch((err) => {
            console.log(err.message)
            setMessage('Some Error Occured')
            setColor('danger')
        })
    }

    return (
        <div>
            <Card bg="dark" className="p-4">
                <Card.Body>
                    <h3 className="text-center mb-4" style={{'color': 'whitesmoke'}}>Create Poll</h3>
                    <Form>
                        {message && <Alert variant={backgroundcolor}>{message}</Alert>}
                        <InputGroup size="lg" className="mb-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-lg">Enter here </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-lg" ref={pollRef} required/>
                        </InputGroup>
                        <FormControl className="mb-3" aria-label="Large" aria-describedby="inputGroup-sizing-lg" ref={optionOneRef} required/>
                        <FormControl className="mb-3" aria-label="Large" aria-describedby="inputGroup-sizing-lg" ref={optionTwoRef} required/>
                        <FormControl className="mb-3" aria-label="Large" aria-describedby="inputGroup-sizing-lg" ref={optionThreeRef} required/>
                        <FormControl className="mb-3" aria-label="Large" aria-describedby="inputGroup-sizing-lg" ref={optionFourRef} required/>
                        <Button onClick={postPollLive}>Submit Poll</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CreatePoll
