import styled from "styled-components";

interface UlProps {
  direction?: string;
}

interface LiProps {
  isVisible?: string;
  title: string;
}

interface MarkerProps {
  width: number;
  x: number;
  isVisible?: string;
}

export const Ul = styled.ul<UlProps>`
  display: flex;
  flex-direction: ${(props) => (props ? props.direction : `row`)};
  background-color: coral;
  width: 100%;
  height: 50px;
`;

export const Li = styled.li<LiProps>`
  position: relative;
  margin: 5px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${(props) => (props.isVisible === props.title ? `blue` : `black`)};
`;

export const Marker = styled.div<MarkerProps>`
  content: "";
  height: 3px;
  background-color: blue;
  left: ${(props) => props.x}px;
  position: absolute;
  width: ${(props) => props.width}px;
  transition: 0.2s;
  bottom: 0;
`;
