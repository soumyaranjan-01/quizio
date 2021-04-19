import React, { useRef, useState } from 'react'
import { Alert, Container, Form, Button, Card } from 'react-bootstrap'
import { auth, db } from '../../firebase'

const UpdateUsername = ({ setPage }) => {
    const usernameRef = useRef()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true)
        setError('')

        try {
            db.collection('users').doc(auth.currentUser.uid).update({ username: usernameRef.current.value })
            setMessage("Username Changed Successfully")    
        } catch(err) {
            console.log(err.message)
            setError("Failed to Update Account")    
        } finally {
            setLoading(false)
            setTimeout(() => {
                setPage('Home')
            }, 2000);
        }
        

    }

    return ( 
        <div>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "500px"}}>
                    <Card className="p-4" style={{background: '#242830'}}>
                        <Card.Body>
                            <h3 className="text-center mb-4" style={{'color': 'whitesmoke'}}>Update Username</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="username">
                                    <Form.Control type="text" ref={usernameRef} autoComplete="off" placeholder="New Username" required />
                                </Form.Group>
                                <Button disabled={loading} type="submit" className="w-100">Update</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default UpdateUsername
