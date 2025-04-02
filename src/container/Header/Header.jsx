import React from 'react';


import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';



const Header = () => {
  return (
    <div  className="app__header app__flex">
      <div
        className="app__header-div" 
      >
        <div className="gpt3__header-content">
          <h1 className="gradient__text">
            Let’s Build Something amazing Together
          </h1>
          <p>
          At Code Base, we build digital experiences that connect your brand with your audience. Our custom designs and precision-driven development turn ideas into engaging, high-performing websites—so your business not only stands out but grows.
          </p>
          <div className="gpt3__header-content__input">
        
            <a 
              href="#contact"
              aria-label="Navigate to contact section"
              role="button"
            >
              Let’s Build Together
            </a>
          </div>
          <div className="gpt3__header-content__people">
            <img src={images.people} alt="people" />
            <p>
            1,600 brands have elevated their digital presence with our expert solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Header, 'home');
