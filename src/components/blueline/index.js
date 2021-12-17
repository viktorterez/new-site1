import React, {Component} from 'react'
import {render} from 'react-dom'
import './blueline1.css'



class Blueline extends Component {
    render() {
        return(
            <div> 
                <div className = "container_blueline"  >
                {/* style= {{ backgroundColor: this.props.color }} */}
                   <div className = "container_blueline-text">Become A Part Of TheFox Business Community Today</div>
                   <div className = "container_bluelinebutton"><button className="blueline_button" >{this.props.color}purchase now</button></div>
                </div>
            </div>
            
            )
    
        }
    }
    
    export default Blueline;