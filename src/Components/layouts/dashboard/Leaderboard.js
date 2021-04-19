import React, { useState, useEffect } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import { auth, db } from '../../../firebase'
import firebase from 'firebase/app'

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Pie3D, FusionTheme);

const Leaderboard = ({ score, user, cardId, setCardId }) => {
    const [highscore, setHighscore] = useState(0)
    const [leaderboard, setLeaderboard] = useState()
    const chartConfigs = {
        type: "pie3d", // The chart type
        width: "600", // Width of the chart
        height: "600", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                numberSuffix: " questions",
                labelFontColor: '#fff',
                theme: "fusion",
                bgcolor: '#343a40',
                startingAngle: '90'
            },
            // Chart Data - from step 2
            data: [
                {
                    label: "Correct",
                    value: `${ score/50 }`
                },
                {
                    label: "Incorrect",
                    value: `${ 10 - score/50 }`
                }
            ]
        }
    };

    useEffect(() => {
        const scoreRef = db.collection('scores').doc(auth.currentUser.uid).collection('playerscores').doc(cardId)

        scoreRef.set({
            scores: firebase.firestore.FieldValue.arrayUnion(score)
        }, {merge: true})

        scoreRef.get().then(doc => setHighscore(Math.max(...doc.data().scores))).catch(err => console.log(err.message))

        const leaderboardRef = db.collection('leaderboard').doc(cardId).collection('playerScoreInfo')
        leaderboardRef.doc(auth.currentUser.uid).set({
            id: auth.currentUser.uid,
            quizname: cardId,
            username: user.username,
            playerHighscore: highscore
        }, {merge: true})

        leaderboardRef.orderBy('playerHighscore', 'desc').get().then(querySnapshot => {
            const lb = querySnapshot.docs.map(doc => doc.data())
            setLeaderboard(lb)
        })
    }, [user.uid, score, highscore, user.username,cardId])

    return (
        <div className="scrollbar-hidden" style={{height: '90vh', overflow: 'scroll'}}>
            <Container>
                <Card bg="dark">
                    <h3>Your Score is {score}/500</h3>
                    <p>{Math.round((score / 500) * 100)}%</p>
                    <ReactFC {...chartConfigs} />
                    <Container>
                        <div className="d-flex flex-column justify-content-between">
                            <h3>Leaderboard</h3>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th className="text-center">Rank</th>
                                        <th className="text-center">Username</th>
                                        <th className="text-center">High Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    leaderboard && leaderboard.map((data, idx) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{idx+1}</td>
                                                <td>@{data.username}</td>
                                                <td>{data.playerHighscore}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                        </div>
                    </Container>
                </Card>
                
            </Container>
        </div>
    )
}

export default Leaderboard
