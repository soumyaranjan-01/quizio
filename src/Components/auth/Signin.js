import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Alert, Container, Form, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../contexts/AuthContext'
import Logo from "../home/images/logo.svg"

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signIn } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            setError('')
            setLoading(true)
            await signIn(emailRef.current.value, passwordRef.current.value)
            history.push('/quizio/dashboard')
        } catch {
            setError('Failed to Sign in')
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
                            <h1 className="m-0 d-flex justify-content-center">
                                <Link to='/quizio/'>
                                    <img className="header-logo-image" src={Logo} alt="Logo"></img>
                                </Link>
                            </h1>
                            <h3 className="text-center mb-4" style={{'color': '#262424'}}>Sign In</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Control type="email" ref={emailRef} placeholder="Email" autoComplete="off" required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                                </Form.Group>
                                <Button disabled={loading} type="submit" className="w-100">Sign In</Button>
                            </Form>

                            <div className="w-100 text-center mt-3" style={{fontSize: '0.78rem'}}>
                                Forgot your password? <Link to="/quizio/forgot-pass" style={{textDecoration: "none"}}>Forgot Password</Link>
                            </div>
                            <div className="w-100 text-center mt-2"style={{fontSize: '0.78rem'}}>
                                Need an account? <Link to="/quizio/signup" style={{textDecoration: "none"}}>Sign Up</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default Signin
