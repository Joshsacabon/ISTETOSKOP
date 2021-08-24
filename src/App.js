import './App.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function App() {
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
              <button class="createbutton">LOG IN</button>
            </div>
          </article>

        <footer>
          <p>Footer</p>
        </footer>
    </body>
  );
}

export default App;
