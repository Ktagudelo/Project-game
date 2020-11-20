import React from 'react';
import image from '../assets/assassins.jpg';
import { Carousel, Carousel__container, Carousel_item, Carousel_item__img, Carousel__container__item, H2 } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXbox } from '@fortawesome/free-brands-svg-icons';


function CarouselImages() {
    return (
      <div>
          <H2><FontAwesomeIcon icon={faXbox}/> The latest analyzes</H2>
          <Carousel>
            <Carousel__container> 
              <Carousel__container__item>
                <Carousel_item>
                  <Carousel_item__img
                      src= {image}
                  />   
                </Carousel_item>
              </Carousel__container__item>

              <Carousel__container__item>
                <Carousel_item>
                  <Carousel_item__img
                      src= {image}
                  />
                </Carousel_item>
              </Carousel__container__item>

              <Carousel__container__item>
                <Carousel_item>
                  <Carousel_item__img
                      src= {image}
                  />
                </Carousel_item>
              </Carousel__container__item>
            </Carousel__container>
          </Carousel>
      </div>
    );
  }
export default CarouselImages;