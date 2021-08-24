import './App.css';
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Modal from 'react-modal'


function App() {
  const  [modalIsOpen , setmodalIsOpen ] = useState(false)
  return (
    
    <body>
        <header>
            <button class="headerbutton">Contact Us</button>  
            <div class="headerbutton2" > | </div>
            <button class="headerbutton">About</button>  
        </header>
          <article>
            <ImageSlider slides={SliderData} />
            <div class="btn">
              <button class="createbutton2">CREATE ACCOUNT</button>
              <button class="createbutton" onClick={() => setmodalIsOpen(true)}>LOG IN</button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)} >

                <h2>Modal title</h2>

            </Modal>
          </article>

        <footer>
          <p>Footer</p>
        </footer>
    </body>
  );
}

export default App;
