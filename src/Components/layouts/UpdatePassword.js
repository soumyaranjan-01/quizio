import React, { useRef, useState } from 'react'
import { Alert, Container, Form, Button, Card } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'

const UpdatePassword = ({ setPage }) => {
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }

        setLoading(true)
        setError('')

        if(passwordRef.current.value) {
            await updatePassword(passwordRef.current.value).then(() => {
                setMessage("Password Changed Successfully")    
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
                            <h3 className="text-center mb-4" style={{'color': 'whitesmoke'}}>Update Password</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="password">
                                    <Form.Control type="password" ref={passwordRef} placeholder="New Password" />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Control type="password" ref={passwordConfirmRef} placeholder="Confirm New Password" />
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

export default UpdatePassword
