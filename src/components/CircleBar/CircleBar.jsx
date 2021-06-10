import React, {Component} from 'react';
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import {easeQuadInOut} from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import "../../../node_modules/react-circular-progressbar/dist/styles.css";
import './CircleBar.css';
export default class CircleBar extends Component {
    render() {
        return (
            <div className="circleBar">
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.props.value}
                    duration={1}
                    easingFunction={easeQuadInOut}>
                    {
                        value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    styles={buildStyles({pathTransition: "none", strokeLinecap: "butt", textColor: "rgba(168, 172, 185, 255)", pathColor: this.props.color, trailColor: "#142D3A"})}/>
                            );
                        }
                    }
                </AnimatedProgressProvider>
            </div>
        )
    }
}