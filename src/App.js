import React from 'react';
import './App.css';
import LeftMenu from "../src/components/LeftMenu/LeftMenu"
import Header from '../src/components/Header/Header'
import DoughnutChart from './components/Charts/DoughnutChart'
// import SplineAreaChart from './components/Charts/SplineAreaChart'
import MainPage from './components/MainPage/MainPage'
import LineChart from './components/Charts/LineChart'
import CircleBarContainer from './components/CircleBarContainer/CircleBarContainer'

function App() {
    return (
        <div className="App">

            <div className="menu">
                
                <div className="main">
                    <Header/>
                    <div className="container">
                        <div className="spline-chart">
                            <MainPage/>
                        </div>
                        <CircleBarContainer/>

                        <div className="bottom-chart">
                            <LineChart/>
                            <DoughnutChart/>
                        </div>

                    </div>

                </div>
                <LeftMenu/>
            </div>

        </div>
    );
}

export default App;
