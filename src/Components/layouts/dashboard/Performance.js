import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { db, auth } from '../../../firebase'

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Performance = ({ cardId }) => {
    const [highscores, setHighScores] = useState([])
    const [dataSet, setDataSet] = useState([])
    const [removeButton, setRemoveButton] = useState(false)

    useEffect(() => {
      db.collection('leaderboard').doc('gk').collection('playerScoreInfo').get().then(querySnapshot => {
            const lb = querySnapshot.docs.map(doc => doc.data())
            setHighScores(highscores => [ ...highscores, lb.filter(doc => {
              return doc.id === auth.currentUser.uid 
            })])
        }).catch(err => console.log(err.message))
      db.collection('leaderboard').doc('science').collection('playerScoreInfo').get().then(querySnapshot => {
            const lb = querySnapshot.docs.map(doc => doc.data())
            setHighScores(highscores => [ ...highscores, lb.filter(doc => {
              return doc.id === auth.currentUser.uid 
            })])
        }).catch(err => console.log(err.message))
      db.collection('leaderboard').doc('history').collection('playerScoreInfo').get().then(querySnapshot => {
            const lb = querySnapshot.docs.map(doc => doc.data())
            setHighScores(highscores => [ ...highscores, lb.filter(doc => {
              return doc.id === auth.currentUser.uid 
            })])
        }).catch(err => console.log(err.message))
    }, [])

    const chartConfigs = {
      type: "column2d", // The chart type
      width: "700", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "High Scores Distribution",
          captionFontColor: '#fff',
          subcaption: "Out of 500",
          subcaptionFontColor: '#fff',
          xAxisName: "Quiz",           
          yAxisName: "High Scores",
          labelFontColor: '#fff',
          valueFontColor: '#fff',
          theme: "fusion",
          bgcolor: '#343a40'
        },
        // Chart Data - from step 2
        data: dataSet[0]
      }
    };
    const show = () => {
      setDataSet(dataSet => [...dataSet, highscores.filter(e => e.length).map(item => {
                return ({
                  label: item[0]["quizname"].toUpperCase(),
                  value: item[0]["playerHighscore"]
                })
              })])
      setRemoveButton(true)
    }
    return (
        <div>
            <Container>
                <Row className="p-2">
                    <Col className="p-2">
                      <ReactFC {...chartConfigs} />
                    </Col>
                </Row>
            </Container>
            {!removeButton ? <Button onClick={show}>Show Highscores</Button>: null}
        </div>
    )
}

export default Performance
