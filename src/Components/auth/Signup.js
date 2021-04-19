import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Alert, Container, Form, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../contexts/AuthContext'
import Logo from "../home/images/logo.svg"
import { auth, db } from '../../firebase'

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
                .then(() => {
                    db.collection('users').doc(auth.currentUser.uid).set({
                        uid: auth.currentUser.uid,
                        email: emailRef.current.value
                    })
                })
            history.push('/quizio/set-profile')
        } catch {
            setError('Failed to create an account')
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
                            <h3 className="text-center mb-4" style={{'color': '#262424'}}>Sign Up</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Control type="email" ref={emailRef} placeholder="Email" autoComplete="off" required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Control type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                                </Form.Group>
                                <Button disabled={loading} type="submit" className="w-100">Sign Up</Button>
                            </Form>
                            <div className="w-100 text-center mt-2" style={{fontSize: '0.78rem'}}>
                                Already have an account? <Link to="/quizio/signin" style={{textDecoration: "none"}}>Sign In</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default Signup
