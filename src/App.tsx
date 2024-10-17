import React, { FC } from 'react';
import Card from './components/card';
import Button from './components/button';

interface AppProps {

}

const App: FC<AppProps> = ({ }) => {
  return (
    <React.Fragment>
      <div className='container'>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas repudiandae fugiat, distinctio, omnis voluptas libero soluta nostrum cumque </h1>
        <div className='cards'>
          <div className='card1'>
            <Card />
          </div>
          <div className='card2'>
          <Card />

          </div>
        </div>
      </div>

      <div className='subscribe'>
        <div className='subscriber-desc'>
          <h2>Subscribe</h2>
          <p>Subscribe to our newsletter to get the latest offers</p>
        </div>

        <div className='subscriber-form'>
          <input type="text" />
          <input type="text" />
          {/* <button>Call to action</button> */}
          <Button label={'Click'} style={{color: 'red', backgroundColor: 'red'}} />
        </div>
      </div>

      <div className='container'>
        <div className='cards'>
          <div className='card1'>Card 1</div>
          <div className='card2'>Card 2</div>
        </div>
      </div>

      <div className='cta'>
        <h2>Heading 2</h2>
        <button>Call to action</button>
      </div>
    </React.Fragment>
  );
};

export default App;
