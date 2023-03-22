import styled from "styled-components";

export const AnchorNav = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: right;
  height: 50px;
  background-color: white;
  z-index: 3;
`;

export const AnchorUl = styled.ul`
  display: flex;
  margin-right: 30px;
`;

export const AnchorLi = styled.li`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 10px;
`;

type Coordinate = {
  x: number;
  width: number;
};

interface MakerProps {
  markerCoordinate: Coordinate;
}

export const Marker = styled.div<MakerProps>`
  background-color: skyblue;
  width: ${(props) => props.markerCoordinate.width}px;
  left: ${(props) => props.markerCoordinate.x}px;
  position: absolute;
  content: "";
  height: 5px;
  bottom: 0;
  transition: 0.2s;
`;
