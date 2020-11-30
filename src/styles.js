import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 77%;
`;

const RightContainer = styled.div`
  width: 27%;
  border-left: 1px solid #c5c5c5;
`;

export { MainContainer, LeftContainer, RightContainer };
