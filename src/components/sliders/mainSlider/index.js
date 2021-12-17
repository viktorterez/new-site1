import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import './style.css';
import first from '../../../assets/imagesSlider/first.jpg';
import second from '../../../assets/imagesSlider/second.jpg';
import third from '../../../assets/imagesSlider/third.jpg';
import Shop from '../../../Pages/Shop';


class Slider extends Component {
  
  onclick () {
    window.location.assign('/Shop');

  
  }

  render() {


    return (
      <div>
        <div className="slideshow-container">
              <div className="mySlides fade">
                <div className = "sliderItem1">
                <div className="text">Dream big. Think different</div>
                <div className="smallText">Creating A Website Has Never Been This Easy</div>

                <div className = "buttons">
                <div><button onClick={(e) => this.onclick(e)}  className="button">get started</button></div>
                <div><button className="button">purchase now</button></div>
                </div>
                <div style={{ textAlign: 'center' }} className = 'dotLine'>
          <span className="dot" onclick="currentSlide(1)" />
          <span className="dot" onclick="currentSlide(2)" />
          <span className="dot" onclick="currentSlide(3)" />
          <span className="dot" onclick="currentSlide(4)" />

        </div>
                </div>   
               
              </div>
             
          <a className="prev" onclick="plusSlides(-1)">&lt;</a>
          <a className="next" onclick="plusSlides(1)">&gt;</a>
        </div>
        <br />
        

      </div>

    )

  }


}



export default Slider;