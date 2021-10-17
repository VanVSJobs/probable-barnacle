import React from 'react';
import Particles from 'react-particles-js';

import config from './particlesjs-config';

const BackgroundParticles = () => {
  const ParticlesOptions = config;
  return <Particles className='particles' params={ParticlesOptions} />;
};

export default BackgroundParticles;
