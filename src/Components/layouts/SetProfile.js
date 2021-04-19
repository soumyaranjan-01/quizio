import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Alert, Container, Form, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, db } from '../../firebase'

const SetProfile = () => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const userNameRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    
    function handleSubmit(e){
        e.preventDefault();

        try{
            setError('')
            setLoading(true)
            const docRef = db.collection('users').doc(auth.currentUser.uid)
            docRef.set({
                firstname: firstNameRef.current.value,
                lastname: lastNameRef.current.value,
                username: userNameRef.current.value
            }, {merge: true})
                .then(docRef => console.log(docRef.data()))
                .catch(err => console.log(err.message))
            
            history.push('/dashboard')
        } catch {
            setError('Failed to setup the account details')
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
                            <h3 className="text-center mb-4" style={{'color': '#262424'}}>Set Profile</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="firstname">
                                    <Form.Control type="text" ref={firstNameRef} placeholder="First Name" required/>
                                </Form.Group>
                                <Form.Group id="lastname">
                                    <Form.Control type="text" ref={lastNameRef} placeholder="Last Name" required/>
                                </Form.Group>
                                <Form.Group id="username">
                                    <Form.Control type="text" ref={userNameRef} placeholder="Username" required/>
                                </Form.Group>
                                <Button type="submit" disabled={loading} className="w-100">Next</Button>
                            </Form>
                            <div className="w-100 text-center mt-2" style={{fontSize: '0.78rem'}}>
                                <Link to="./signup" style={{textDecoration: "none"}}>Back</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default SetProfile
