import React from 'react';
import image from '../assets/solder.jpg';
import {Container, ContainerBanner, ContainerAside, Image, Parrafo } from './styles';


function Banner() {
    return (
      <Container>
        <ContainerBanner>
        <Parrafo>Pre-order <br></br> 
           Cyberpunk 2077 <br></br> 
           Right now
        </Parrafo>
        <Image src= {image} />
        </ContainerBanner>
        <ContainerAside>
          Este es el Aside
        </ContainerAside>
      </Container>
    );
  }
export default Banner;