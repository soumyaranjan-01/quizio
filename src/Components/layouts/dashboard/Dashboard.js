import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext'
import { auth, db } from '../../../firebase'
import Home from './Home'
import Performance from './Performance'
import Profile from './Profile'
import Settings from './Settings'
import LiveRoom from './LiveRoom'
import UpdateEmail from '../UpdateEmail'
import UpdatePassword from '../UpdatePassword'
import UpdateUsername from '../UpdateUsername'
import Leaderboard from './Leaderboard'
import './dashboard.css'
import CreatePoll from './CreatePoll'
import Polls from './Polls'
import PollPage from './PollPage'

const Dashboard = () => {
    const [score, setScore] = useState(0)
    const [error, setError] = useState("")
    const [user, setUser] = useState({uid: '', firstname: '', lastname: '', email: '', username: ''})
    const [page, setPage] = useState("Home")
    const [cardId, setCardId] = useState('')
    const { logout } = useAuth()
    const history = useHistory()
    const [pollCards, setPollCards] = useState([])
    const [pollId, setPollId] = useState('')
    const [pollCard, setPollCard] = useState({uid:'', options: [], pollQuestion: ''})

    useEffect(() => {
        const userInfoRef = db.collection('users').doc(auth.currentUser.uid)
        
        userInfoRef.get().then(userInfoRef => {
            if(userInfoRef.exists) {
                const data = userInfoRef.data() 
                setUser(data)
            } else { 
                console.log("No such user exists")
            }    
        }).catch(err => console.log(err.message))  
    }, [])
    
    async function handleLogout() {
        setError('')
        try{
            await logout()
            history.push('/quizio/')
        } catch {
            setError('Failed to logout')
            alert(error)
        } 
    }

    return (
        <div style={{height: '100vh'}} className="d-flex">
            <Card className="sidenav">
                <Card className="d-flex align-items-center justify-content-center p-4" style={{background: 'transparent'}}>
                    <div>
                        <div className="d-flex justify-content-center">
                            <h4 className="avatar-dash">{user.firstname[0] + user.lastname[0]}</h4>
                        </div>
                    </div>
                    <div>
                        { user && <p id="name">@{user.username}</p> }
                    </div>
                </Card>
                <Card style={{minHeight: '70vh', background: 'transparent'}}>
                    <Link className="side-links p-3" to="/quizio/dashboard" onClick={() => setPage('Home')}><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                    <Link className="side-links p-3" to="/quizio/dashboard" onClick={() => setPage('Create Poll')}><i className="fa fa-plus" aria-hidden="true"></i> Create Poll</Link>
                    <Link className="side-links p-3" to="/quizio/dashboard" onClick={() => setPage('Polls')}><i className="fa fa-circle"></i> Polls</Link>
                    <Link className="side-links p-3" to="/quizio/dashboard" onClick={() => setPage('Performance')}><i className="fa fa-angle-double-right" aria-hidden="true"></i> Performance</Link>
                    <Link className="side-links p-3" to="/quizio/dashboard" onClick={() => setPage('Profile')}><i className="fa fa-user" aria-hidden="true"></i> Profile</Link>
                    <Link className="side-links p-3" to="/quizio/dashboard" onClick={() => setPage('Settings')}><i className="fa fa-cog" aria-hidden="true"></i> Settings</Link>
                    <Link className="side-links p-3" to="#" onClick={handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</Link>
                </Card>
            </Card>
            
            <div style={{height: '100%'}}>
                <div className="dashContainer scrollbar-hidden">
                    {error && <Alert variant="danger">{error}</Alert>}
                    {page === "Home" && <Home setPage={setPage} setCardId={setCardId} />}
                    {page === "Performance" && <Performance cardId={cardId} />}
                    {page === "Profile" && <Profile user={user} />}
                    {page === "Settings" && <Settings setPage={setPage} />}
                    {page === "Update Email" && <UpdateEmail setPage={setPage} />}
                    {page === "Update Password" && <UpdatePassword setPage={setPage} />}
                    {page === "Update Username" && <UpdateUsername setPage={setPage} />}
                    {page === "Live Room" && <LiveRoom setPage={setPage} score={score} setScore={setScore} user={user} cardId={cardId} />}
                    {page === "Leaderboard" && <Leaderboard score={score} user={user} cardId={cardId} />}
                    {page === "Create Poll" && <CreatePoll />}
                    {page === "Polls" && <Polls setPage={setPage} pollCards={pollCards} setPollCards={setPollCards} pollId={pollId} setPollId={setPollId} setPollCard={setPollCard}/>}
                    {page === "Poll Page" && <PollPage pollId={pollId} pollCard={pollCard}  setPollCard={setPollCard}/>}
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard
