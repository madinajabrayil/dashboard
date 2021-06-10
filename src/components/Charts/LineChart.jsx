import React, {Component} from 'react'
import { Line} from 'react-chartjs-2'
import './chart.css'
import arrowLeft from '../../images/arrowleft.png'
import arrowRight from '../../images/arrowright.png'
class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'line',
            data: {
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
                    
                        data: [
                            7,
                            5.9,
                            6.2,
                            4.9,
                            5,
                            3.8,
                            2.9,
                            4,
                            2.9,
                            3,
                            1.1,
                            2

                        ],
                        fill: false,
                        borderColor: '#E74C3C',
                        backgroundColor: '#E74C3C',
                        borderWidth: 1,
                        lineTension: 0
                    }, {
                        
                        data: [
                            1,
                            2.8,
                            2.1,
                            3,
                            3.3,
                            5.2,
                            4.8,
                            7.1,
                            6.1,
                            5.9,
                            7.1,
                            5,
                            2

                        ], 
                        fill: false,
                        borderColor: '#3094D6', 
                        backgroundColor: '#3094D6',
                        borderWidth: 1, 
                        lineTension: 0

                    }
                ]
            },
            options: {
                responsive: true, 
                animationEnabled: true
            }
        };
    }
    render() {
        return (
            <div className="line-chart">
                <div className="chart-left">
                    <div id="chart">
                        <Line data={this.state.data} options={this.state.options} type="area"/>
                    </div>
                </div>

                <div className="chart-info">
                    <div className="array">
                        <img src={arrowLeft} alt=""/>
                        <span className="month">Nov 2016</span>
                        <img src={arrowRight} alt=""/></div>
                    <div className="infos">
                        <div className="item">
                            <p className="num">2874</p>
                            <p className="name">new students</p>
                        </div>
                        <div className="line"></div>
                        <div className="item">
                            <p className="num">1437</p>
                            <p className="name">graduated</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default LineChart;