import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { db } from '../../../firebase'

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const PollPage = ({ pollId, pollCard, setPollCard }) => {
    const [message, setMessage] = useState('')
    const [backcolor, setBackcolor] = useState('')
    const [disable, setDisable] = useState(false)
    const [visibilityGraph,setVisibilityGraph] = useState(false)
    
    const chartConfigs = {
        type: "column2d", // The chart type
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            caption: "Poll Results",
            captionFontColor: '#fff',
            subcaption: `${"Out of " + (pollCard.options[0].count + pollCard.options[1].count + pollCard.options[2].count + pollCard.options[3].count)}`,
            subcaptionFontColor: '#fff',
            xAxisName: "Options",           
            yAxisName: "No of Votes",
            labelFontColor: '#fff',
            valueFontColor: '#fff',
            theme: "fusion",
            bgcolor: '#343a40',
            scale: "1"
          },
          // Chart Data - from step 2
          data: [
              {
                  label: pollCard.options[0].option,
                  value: pollCard.options[0].count
              },
              {
                  label: pollCard.options[1].option,
                  value: pollCard.options[1].count
              },
              {
                  label: pollCard.options[2].option,
                  value: pollCard.options[2].count
              },
              {
                  label: pollCard.options[3].option,
                  value: pollCard.options[3].count
              },
          ]
        }
      };

    const updateCount = (index) => {
        const pRef = db.collection('polls').doc(pollId)
        pollCard.options[index].count = pollCard.options[index].count + 1 
        
        pRef.set(pollCard, {merge: true})
        .then(() => {
            setDisable(true)
            setBackcolor('success')
            setMessage('Thanks for Voting!!!')
            setVisibilityGraph(true)
            // setPollCard({uid:'', pollQuestion: '', options: []})
        })
        .catch(err => {
            setBackcolor('danger')
            setMessage('Some Error Occurred!!!')
            console.log(err.message)
        })
    }
    
    return (
        <div>
            <Card
                bg="dark"
                style={{ width: '18rem' }}
                className="mb-2 w-100"
            >
                <Card.Body style={{paddingTop: '0'}}>
                <Card.Title style={{color: 'grey', textAlign: 'center', margin: '35px 0'}}>{pollCard.pollQuestion}</Card.Title>
                <Card.Text className="text-left d-flex flex-column align-items-center justify-content-between">
                    <div className="w-100">
                        <Button disabled={disable} className="w-100 mb-2" variant="primary" onClick={() => updateCount(0)}>{pollCard.options[0].option}</Button>
                        <Button disabled={disable} className="w-100 mb-2" variant="primary" onClick={() => updateCount(1)}>{pollCard.options[1].option}</Button>
                        <Button disabled={disable} className="w-100 mb-2" variant="primary" onClick={() => updateCount(2)}>{pollCard.options[2].option}</Button>
                        <Button disabled={disable} className="w-100 mb-2" variant="primary" onClick={() => updateCount(3)}>{pollCard.options[3].option}</Button>
                    </div>
                    { message && <Alert variant={backcolor} className="w-100 text-center">{message}</Alert> }
                    { 
                        visibilityGraph ? (
                            <div><ReactFC {...chartConfigs} /></div>
                        ): null
                    }
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PollPage
