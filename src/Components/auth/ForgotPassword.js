import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Container, Form, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../contexts/AuthContext'

const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your email for further instructions")
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return ( 
        <div>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "500px"}}>
                    <Card className="p-4">
                        <Card.Body>
                            <h3 className="text-center mb-4" style={{'color': '#262424'}}>Forgot Password</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Control type="email" ref={emailRef} placeholder="Email" autoComplete="off" required />
                                </Form.Group>
                                <Button disabled={loading} type="submit" className="w-100">Reset Password</Button>
                            </Form>

                            <div className="w-100 text-center mt-3" style={{fontSize: '0.78rem'}}>
                                <Link to="./signin" style={{textDecoration: "none"}}>Sign In</Link>
                            </div>
                            <div className="w-100 text-center mt-2"style={{fontSize: '0.78rem'}}>
                                Need an account? <Link to="./signup" style={{textDecoration: "none"}}>Sign Up</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default ForgotPassword
        