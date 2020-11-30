import styled from "styled-components";

export const Container = styled.div``;

export const Container_Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container_title = styled.p`
  font-size: 20px;
  padding-left: 10px;
  font-weight: bold;
`;
export const Container_icon = styled.image``;

export const Carousel = styled.div`
  width: 100%;
`;
export const Carousel__container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Carousel__container__item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  width: 200px;
  height: 90px;
  background-color: rgba(128, 128, 128, 0.2);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Carousel_item = styled.div``;

export const Container_list = styled.div``;

export const Carousel_item__img = styled.img`
  width: 65px;
  height: 90px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Carousel_details = styled.div`
  font-size: 12px;
  padding: 20px;
`;

export const Container_list_li = styled.ol`
  font-size: 13px;
  margin: 0;
`;

export const Li = styled.li`
  font-size: 13px;
  margin: 0;
`;
