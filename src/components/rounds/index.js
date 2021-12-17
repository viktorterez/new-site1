import React, {Component} from 'react'
import {render} from 'react-dom'
import './style.css'
import round1 from '../../assets/roundImages/round1.png'
import r2 from '../../assets/roundImages/r2.png'
import r3 from '../../assets/roundImages/r3.png'
import r4 from '../../assets/roundImages/r4.png'


class Rounds extends Component {
    render() {
        return(
            <div className = "container">
                <div className ="roundItem">
                    <div className="roundItem_image"><img src = {round1}></img></div>
                    <div className="roundItem_h2">100% Responsive</div>
                    <div className="roundItem_text">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. </div>
                </div>

                <div className ="roundItem">
                    <div className="roundItem_image"><img src = {r2}></img></div>
                    <div className="roundItem_h2">Powerful Admin</div>
                    <div className="roundItem_text">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.</div>
                </div>

                <div className ="roundItem">
                    <div className="roundItem_image"><img src = {r3}></img></div>
                    <div className="roundItem_h2">Incredible Design</div>
                    <div className="roundItem_text">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.</div>
                </div>

                <div className ="roundItem">
                    <div className="roundItem_image"><img src = {r4}></img></div>
                    <div className="roundItem_h2">The Best Support</div>
                    <div className="roundItem_text">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.</div>
                </div>
            </div>
        )

    }
}

export default Rounds