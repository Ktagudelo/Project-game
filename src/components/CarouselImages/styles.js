import styled from "styled-components";

export const Carousel = styled.div`
      width: 100%;
      /* padding: 0px; */
      margin-top: 40px;
      position: relative;
`
export const H2 = styled.h2`
      padding-left: 20px;
`
export const Carousel__container = styled.div`
      display: flex;
      justify-content: space-baseline;
      white-space: nowrap;
      margin: 15px;
      padding-bottom: 10px;
`
export const Carousel__container__item = styled.div`
      text-align: center;
      width: 350px;
      height: 250px;
      padding: 10px;
      /* padding-right: 20px; */
      background-color: rgba(128,128,128,0.2); 
      border-radius: 30px;
`

export const Carousel_item = styled.div`
      width: 327px;
      height: 202px;
      border-radius: 20px;
      overflow: hidden;
      display: inline-block;
      cursor: pointer;
      transition: 450ms all;
      transform-origin: center left;
      position: relative;
      
`

export const Carousel_item__img = styled.img`
      width: 327px;
      height: 202px;
      object-fit: cover;
`