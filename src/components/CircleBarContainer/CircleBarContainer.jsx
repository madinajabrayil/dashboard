import React, { Component } from 'react';
import CircleBar from '../CircleBar/CircleBar'
import './CircleBarContainer.css'
export default class CircleBarContainer extends Component {
    render() {
        return (
            <div className="progressBarContainer">
            <div className="progressBar_box">
                <CircleBar value="90" color="#3498DB"/>
                <p className="progressBar_title">Overall Progress</p>
            </div>
            <div className="progressBar_box">
                <CircleBar value="63" color="#DC677D"/>
                <p className="progressBar_title">New Admissions</p>
            </div>
            <div className="progressBar_box">
                <CircleBar value="32" color="#AE6EC3"/>
                <p className="progressBar_title">All Graduates</p>
            </div>
            <div className="progressBar_box">
                <CircleBar value="52" color="#E74C3C"/>
                <p className="progressBar_title">Shcolarships</p>  
            </div>
        </div>
        )
    }
}