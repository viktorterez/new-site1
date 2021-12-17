import React, {Component} from 'react'
import {render} from 'react-dom'
import './style1.css'
import line from '../../assets/blueline.png'


class Three extends Component {
    render() {
        return(
            <div> 
                <div className = "container_three">
                    <div className = "content_three">
                        <div className = "content_three-h2">Great Theme For Your Busines</div>
                        <div className = "content_divline"><img src= {line}></img></div>
                        <div className = "content_text-lite">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Nulla vehicula nibh vel ante commodo feugiat.</div>
                        <div className = "content_text-dark">Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.</div>
                        <div><button className="three_button">Take a tour</button></div>

                    </div>
                </div>
            </div>
            
            )
    
        }
    }
    
    export default Three;