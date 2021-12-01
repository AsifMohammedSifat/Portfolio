import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './ParticleConfig/ParticleConfig';

export default function ParticleBackground(){
    return(
        <Particles params={particlesConfig}></Particles>
    );
}

