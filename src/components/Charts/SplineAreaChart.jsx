import React, {Component} from 'react'
import { Line} from 'react-chartjs-2'

class SplineAreaChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'line',
            data: {
            },
            options: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false
                    },
                responsive: true,
                maintainAspectRatio:false 
            }
        };
    }
    render() {
        return (
            <div id="chart">
                {console.log(this.props.data.datasets[0].data)}
                <Line data={this.props.data} type="area"/>
            </div>
        )
    }
}
export default SplineAreaChart;
