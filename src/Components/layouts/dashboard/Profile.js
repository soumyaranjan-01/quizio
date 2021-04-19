import React from 'react'
import { Card, Container, Table } from 'react-bootstrap'

const Profile = ({ user }) => {
    const firstname = user.firstname
    const lastname = user.lastname
    const email = user.email
    const username = user.username

    return (
        <div>
            <Card bg="dark" className="p-4">
                <Card.Body>
                    <h3 className="text-center mb-4" style={{'color': 'whitesmoke'}}>Profile</h3>
                    <div>
                        <div className="d-flex justify-content-center">
                            <h4 className="avatar">{firstname[0] + lastname[0]}</h4>
                        </div>
                        <Container
                            className="d-flex align-items-center justify-content-center"
                        >
                            <Table striped bordered hover variant="dark" style={{marginTop: '30px'}}>
                                <tbody>
                                    <tr>
                                        <th className="text-center">Name</th>
                                        <td>{firstname} {lastname}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-center">Username</th>
                                        <td>{username}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-center">Email</th>
                                        <td>{email}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile
