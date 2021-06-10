import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'
import "./chart.css"
import ellipse from '../../images/ellipse.png'
import shape1 from '../../images/shape1.png'
import shape2 from '../../images/shape2.png'
import shape3 from '../../images/shape3.png'
import shape4 from '../../images/shape4.png'
import shape5 from '../../images/shape5.png'
class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {

                datasets: [
                    {

                        data: [
                            12, 17, 73
                        ],

                        backgroundColor: [
                            'rgb(188,69,58)', 'rgb(45,129,185)', 'rgb(179,90,110)'
                        ],
                        borderColor: ['rgb(188,69,58)', 'rgb(45,129,185)', 'rgb(179,90,110)']
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="doughnut-chart">
                <p className="title">Pie Chart View</p>
                <div className="chart">
                    <div className="responsive-chart">
                        <div className="doughnut">
                            <Doughnut
                                data={this.state.chartData}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}/>
                        </div>
                        <div className="position position1">
                            <img src={ellipse} className="point first" alt=""/>
                            <img src={shape1} className="shape shape1" alt=""/>
                            <img src={shape2} className="shape shape2" alt=""/>
                            <div className="info info1">
                                <p className="info-text">learning</p>
                                <p className="info-num">11 357</p>
                            </div>
                        </div>

                        <div className="position position2">
                            <img src={ellipse} className="point second" alt=""/>
                            <img src={shape3} className="shape shape3" alt=""/>
                            <img src={shape4} className="shape shape4   " alt=""/>
                            <div className="info info2">
                                <p className="info-text">admissions</p>
                                <p className="info-num">8783</p>
                            </div>
                        </div>

                        <div className="position position3">
                            <img src={ellipse} className="point third" alt=""/>
                            <img src={shape5} className="shape shape5" alt=""/>
                            <div className="info info3">
                                <p className="info-text">graduated</p>
                                <p className="info-num">7459</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DoughnutChart;