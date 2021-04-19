import React, { useRef, useState } from 'react'
import { Alert, Container, Form, Button, Card } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { db, auth } from '../../firebase'

const UpdateEmail = ({ setPage }) => {
    const emailRef = useRef()
    const { currentUser, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();

        setLoading(true)
        setError('')

        if(emailRef.current.value !== currentUser.email) {
            await updateEmail(emailRef.current.value).then(() => {
                db.collection('users').doc(auth.currentUser.uid).update({ email: emailRef.current.value })
                setMessage("Email Changed Successfully")    
            }).catch(() => {
                setError("Failed to Update Account")    
            }).finally(() => {
                setLoading(false)
                setTimeout(() => {
                    setPage('Home')
                }, 2000);
            })
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
                            <h3 className="text-center mb-4" style={{'color': 'whitesmoke'}}>Update Email</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Control type="email" ref={emailRef} autoComplete="off" defaultValue={currentUser.email} required />
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

export default UpdateEmail
