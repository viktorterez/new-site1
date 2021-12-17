import React, {Component} from 'react'
import {render} from 'react-dom'
import './whiteline1.css'
import line from '../../assets/blueline.png'


class Whiteline1 extends Component {
    render() {
        return(
            <div> 
                <div className = "container_whiteline1">
                    <div className = "content_whiteline1">
                        <div className = "content_whiteline1-h2">Selected Case Studies</div>
                        <div className = "content_divline"><img src= {line}></img></div>
                        <div className = "content_text-whiteline1">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Nulla vehicula nibh vel ante commodo feugiat.</div>
                    </div>
                </div>
            </div>
            
            )
    
        }
    }
    
    export default Whiteline1;