import React, {Component} from 'react';

import SplineAreaChart from "../Charts/SplineAreaChart"
import "./MainPage.css";

class MainPage extends Component {
    state = {
        active:0,
        data:[
            {
                labels: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                datasets: [
                    {
                        label: 'Series 1', // Name the series
                        data: [
                            2.5,
                            2.3,
                            1.7,
                            1.9,
                            2.1,
                            1.9,
                            1.7,
                            2.1,
                            1.8,
                            2.3,
                            2.5,
                            2.3,
                            1.7,
                            2,
                            1.7,
                            2,
                            1.7,
                            3,
                            1.7,
                            3
                        ] ,
                        fill: true,
                        borderColor: '#E74C3C', // Add custom color border (Line)
                        backgroundColor: '#E74C3C', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                        pointRadius: 0
                    },
                    {
                        label: 'Series 2', // Name the series
                        data:[
                            4.3,
                            4,
                            4,
                            3,
                            2.8,
                            2.9,
                            3.2,
                            2.9,
                            2.5,
                            2.7,
                            2,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1
                        ] ,
                        fill: true,
                        borderColor: '#3094D6', // Add custom color border (Line)
                        backgroundColor: '#3094D6', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                        pointRadius: 0
                    }
                ]

            },
            {
                labels: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                datasets: [
                    {
                        label: 'Series 1', // Name the series
                        data: [
                            2.5,
                            2.3,
                            1.7,
                            1.9,
                            2.1,
                            1.9,
                            1.7,
                            2.1,
                            1.8,
                            2.3,
                            2.5,
                            2.3,
                            1.7,
                            2,
                            1.7,
                            2,
                            1.7,
                            3,
                            1.7,
                            3
                        ] ,
                        fill: true,
                        borderColor: '#E74C3C', // Add custom color border (Line)
                        backgroundColor: '#E74C3C', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                        pointRadius: 0
                    },
                    {
                        label: 'Series 2', // Name the series
                        data:[
                            4.3,
                            4,
                            4,
                            3,
                            2.8,
                            2.9,
                            3.2,
                            2.9,
                            2.5,
                            2.7,
                            2,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1
                        ] ,
                        fill: true,
                        borderColor: '#3094D6', // Add custom color border (Line)
                        backgroundColor: '#3094D6', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                        pointRadius: 0
                    }
                ]

            },
            {

                labels: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    6,
                    7,
                    8,
                    9,
                    10,
                ],
                datasets: [
                    {
                        label: 'Series 1', // Name the series
                        data: [
                            10,
                            20,
                            22,
                            13,
                            28,
                            29,
                            10,
                            20,
                            25,
                            27,
                            20,
                            15,
                            17,
                            29,
                            10,
                            21,
                            29,
                            25,
                            20,
                            10
                        ],
                        fill: true,
                        borderColor: '#E74C3C', // Add custom color border (Line)
                        backgroundColor: '#E74C3C', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                        pointRadius: 0
                    },
                    {
                        label: 'Series 2', // Name the series
                        data: [
                            15,
                            15,
                            20,
                            26,
                            28,
                            29,
                            32,
                            29,
                            25,
                            27,
                            20,
                            15,
                            17,
                            13,
                            25,
                            21,
                            22,
                            25,
                            20,
                            10
                        ],
                        fill: true,
                        borderColor: '#3094D6', // Add custom color border (Line)
                        backgroundColor: '#3094D6', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                        pointRadius: 0
                    }
                ]
            },
            {
                labels: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    6,
                    7,
                    8,
                    9,
                    10,
                ],
                datasets: [
                    {
                        label: 'Series 1', // Name the series
                        data: [
                            10,
                            12,
                            17,
                            13,
                            8,
                            9,
                            10,
                            13,
                            15,
                            15,
                            15,
                            20,
                            18,
                            17,
                            17,
                            20,
                            17,
                            21,
                            23,
                            23
                        ] ,
                        fill: true,
                        borderColor: '#E74C3C', // Add custom color border (Line)
                        backgroundColor: '#E74C3C', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                        pointRadius: 0
                    }, {
                        label: 'Series 2', // Name the series
                        data:[
                            10,
                            12,
                            17,
                            13,
                            20,
                            17,
                            21,
                            23,
                            23,
                            17,
                            13,
                            8,
                            18,
                            17,
                            17,
                            20,
                            17,
                            21,
                            23,
                            23
                        ] ,
                        fill: true,
                        borderColor: '#3094D6', // Add custom color border (Line)
                        backgroundColor: '#3094D6', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                        pointRadius: 0
                    }
                ]

            }

        ]
    };

    render() {
        return (
            <div className="main-page">
                
                <div className="main-chart-container">
                    <div className="main-chart-head">
                        <h2>Learning Overview</h2>
                        <div className="main-chart-filter">

                            <button onClick={()=>{this.setState({active: 1})}} className="filter-button">Last 30 Days</button>
                            <button onClick={()=>{this.setState({active: 2})}} className="filter-button">Last 90 Days</button>
                            <button onClick={()=>{this.setState({active: 3})}} className="filter-button">All time</button>
                        </div>
                    </div>
                    <SplineAreaChart data={this.state.data[this.state.active]}/>
                </div>

            </div>
        );
    }
}

export default MainPage;
