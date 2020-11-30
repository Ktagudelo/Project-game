import React from "react";
import image from "../assets/games.jpg";
import {
  Container,
  Container_title,
  Container_icon,
  Carousel,
  Carousel__container,
  Carousel_item,
  Carousel_item__img,
  Carousel__container__item,
  Carousel_details,
  Container_Head,
  Container_list,
  Container_list_li,
  Li,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function Aside() {
  return (
    <Container>
      <Container_Head>
        <Container_title>Recent News</Container_title>
        <Container_icon>
          <FontAwesomeIcon icon={faEllipsisH} />
        </Container_icon>
      </Container_Head>
      <Carousel>
        <Carousel__container>
          <Carousel__container__item>
            <Carousel_details>
              Cyberpunk 2077 <br></br> cosplay event in <br></br> november 25.{" "}
              <br></br> 12/11/2020
            </Carousel_details>
            <Carousel_item>
              <Carousel_item__img src={image} />
            </Carousel_item>
          </Carousel__container__item>

          <Carousel__container__item>
            <Carousel_details>
              Cyberpunk 2077 <br></br> cosplay event in <br></br> november 25.{" "}
              <br></br> 12/11/2020
            </Carousel_details>
            <Carousel_item>
              <Carousel_item__img src={image} />
            </Carousel_item>
          </Carousel__container__item>

          <Carousel__container__item>
            <Carousel_details>
              Cyberpunk 2077 <br></br> cosplay event in <br></br> november 25.{" "}
              <br></br> 12/11/2020
            </Carousel_details>
            <Carousel_item>
              <Carousel_item__img src={image} />
            </Carousel_item>
          </Carousel__container__item>
        </Carousel__container>
      </Carousel>

      <Container_list>
        <Container_Head>
          <Container_title>Top Games</Container_title>
          <Container_icon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </Container_icon>
        </Container_Head>

        <Container_list_li>
          <Li>Assassin's Creed Valhalla</Li>
          <Li>Spider-Man Miles Morales</Li>
          <Li>Yakuza: Like a Dragon</Li>
          <Li>Ghostrunner</Li>
          <Li>FIFA 21: Ultimate Team</Li>
          <Li>The Falconeer</Li>
          <Li>Watch Dogs Legion</Li>
          <Li>DiRT 5</Li>
        </Container_list_li>
      </Container_list>
    </Container>
  );
}
export default Aside;
