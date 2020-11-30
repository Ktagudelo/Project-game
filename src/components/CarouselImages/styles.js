import styled from "styled-components";

export const Carousel = styled.div`
  width: 100%;
`;
export const H2 = styled.h3`
  padding-left: 20px;
`;
export const Carousel__container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px;
  padding-bottom: 10px;
`;
export const Carousel__container__item = styled.div`
  text-align: center;
  width: 240px;
  height: 150px;
  padding: 10px;
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 20px;
`;

export const Carousel_item = styled.div`
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;
`;

export const Carousel_item__img = styled.img`
  width: 230px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Carousel_details = styled.div`
  text-align: left;
  padding-left: 10px;
`;
