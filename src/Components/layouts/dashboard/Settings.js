import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'

const Settings = ({ setPage }) => {
    return (
        <div>
            <Card bg="dark" className="p-4" style={{minHeight: '90vh'}}>
                <Card.Body>
                    <h3 className="text-center mb-4" style={{'color': 'whitesmoke'}}>Settings</h3>
                    <Container
                        className="d-flex align-items-center justify-content-center"
                    >
                        <div>
                            <div className="update">
                                <Button onClick={() => setPage('Update Email')}>Update Email</Button>
                            </div>
                            <div className="update">
                                <Button onClick={() => setPage('Update Password')}>Update Password</Button>
                            </div>
                            <div className="update">
                                <Button onClick={() => setPage('Update Username')}>Update Username</Button>
                            </div>
                        </div>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Settings
