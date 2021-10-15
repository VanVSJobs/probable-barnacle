import './App.css';

import { useState, useEffect } from 'react';

import Clarifai from 'clarifai';

import BackgroundParticles from './components/BackgroundParticles/BackgroundParticles';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  const app = new Clarifai.App({
    apiKey: '1a3704995a5340c782be0fe4f2b7b0b9',
  });

  const [input, setInput] = useState('');

  const onButtonSubmit = () => {
    console.log('clicked');
    app.models
      .predict(
        '45fb9a671625463fa646c3523a3087d5',
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iYeRlJv1Fc9s/v1/1000x-1.jpg'
      )
      .then(
        function (res) {
          console.log(res);
        },
        function (err) {
          //
        }
      );
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div className='App'>
      <BackgroundParticles />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={(event) => {
          setInput(event.target.value);
        }}
        onButtonSubmit={onButtonSubmit}
      />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
