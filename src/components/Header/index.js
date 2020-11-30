import React from "react";
import logo from "../assets/awsGame.PNG";
import { Cabecera, Ul, Li, Div } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faSearch,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Cabecera>
      <img src={logo} />
      <Ul>
        <Li>Home</Li>
        <Li>Store</Li>
        <Li>Blog</Li>
        <Li>Gallery</Li>
        <Li>Reviews</Li>
        <Li>
          <FontAwesomeIcon icon={faEllipsisH} />
        </Li>
      </Ul>
      <Div>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faGripVertical} />
      </Div>
    </Cabecera>
  );
}
export default Header;
