import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

const NotFound = () => {
    const history = useHistory()
    const routeHome = () => {
        history.push('/quizio/')
    }
    return (
        <div className="d-flex flex-column justify-content-center" style={{height: '100vh'}}>
            <h1 style={{fontSize: '6rem', marginBottom: '40px'}}>404 Error.</h1>
            <p style={{fontSize: '1.3rem'}}>Oops! The page you have requested is not found.</p>
            <div className="d-flex justify-content-center">
                <Button variant="outline-secondary" onClick={routeHome}>Go Back</Button>
            </div>

        </div>
    )
}

export default NotFound
