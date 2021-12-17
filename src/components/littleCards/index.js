import React, {Component} from 'react'
import {render} from 'react-dom'
import './littleCards.css'
import icon1 from '../../assets/littleCardsImages/icon1.png'
import icon2 from '../../assets/littleCardsImages/icon2.png'
import icon3 from '../../assets/littleCardsImages/icon3.png'
import icon4 from '../../assets/littleCardsImages/icon4.png'
import icon5 from '../../assets/littleCardsImages/icon5.png'
import icon6 from '../../assets/littleCardsImages/icon6.png'



class LittleCards extends Component {
    render() {
        return(
            <div className = "littleCards_content"> 
               <div className = "littleCards_item">
                   <div className = "littleCards_image"><img src = {icon1}></img></div>
                   <div className = "littleCards_text">
                       <div className = "littleCards_h2">Multiple Layouts</div>
                       <div className = "littleCards_lowtext">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. </div>
                   </div>
               </div>
               <div className = "littleCards_item">
                   <div className = "littleCards_image"><img src = {icon2}></img></div>
                   <div className = "littleCards_text">
                       <div className = "littleCards_h2">Incredible Support</div>
                       <div className = "littleCards_lowtext">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. </div>
                   </div>
               </div>
               <div className = "littleCards_item">
                   <div className = "littleCards_image"><img src = {icon3}></img></div>
                   <div className = "littleCards_text">
                       <div className = "littleCards_h2">Modern Designs</div>
                       <div className = "littleCards_lowtext">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. </div>
                   </div>
               </div>
               <div className = "littleCards_item">
                   <div className = "littleCards_image"><img src = {icon4}></img></div>
                   <div className = "littleCards_text">
                       <div className = "littleCards_h2">Optimized for SEO</div>
                       <div className = "littleCards_lowtext">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. </div>
                   </div>
               </div>
               <div className = "littleCards_item">
                   <div className = "littleCards_image"><img src = {icon5}></img></div>
                   <div className = "littleCards_text">
                       <div className = "littleCards_h2">Powerful Shopping</div>
                       <div className = "littleCards_lowtext">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. </div>
                   </div>
               </div>
               <div className = "littleCards_item">
                   <div className = "littleCards_image"><img src = {icon6}></img></div>
                   <div className = "littleCards_text">
                       <div className = "littleCards_h2">Flexible Admin Options</div>
                       <div className = "littleCards_lowtext">Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. </div>
                   </div>
               </div>
            </div>
            
            )
    
        }
    }
    
    export default LittleCards;