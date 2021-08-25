import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {
  const  [modalIsOpen , setmodalIsOpen ] = useState(false)
  return (
    <div>
    <div className="body1">
        <div className="header1">
            <button class="headerbutton">Contact Us</button>  
            <div class="headerbutton2" > | </div>
            <button class="headerbutton">About</button>  
        </div>
          <div className="article1">
          
            <ImageSlider slides={SliderData} />
            <div class="btn">
              <button class="createbutton2"><Link to="/create">CREATE ACCOUNT</Link></button>
              <button class="createbutton" onClick={() => setmodalIsOpen(true)}>LOG IN</button>
            </div>
            <Modal 
              isOpen={modalIsOpen} 
              onRequestClose={() => setmodalIsOpen(false)} 
              style={
                {
                  overlay:{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255,255,255,0.9)'
                  },
                  content:{
                    color: 'red',
                    height: '40%',
                    width: '72%',
                    top: 300,
                    left: 260,
                    textAlign: 'center',
                    backgroundColor: '#2FBCBC',
                    boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
                  }
                }
              }
              >
                  <div class="container">
                      <input type="email" placeholder="Email" name="uname" required/>
                      <br/>
                      <input type="password" placeholder="Password" name="psw" required/>
                      <br/>  
                      <button type="button" onClick={() => setmodalIsOpen(false)} class="cancelbtn">Cancel</button>
                      <button class="loginbutton" type="submit">Log In</button>
                      <br/>
                  </div>
            </Modal>
            
          </div>

        <div className="footer1">
          <p>Footer</p>
        </div>
    </div>
      </div>
  );
}

export default App;
