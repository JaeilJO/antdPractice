import Anchor from "../components/anchor/atoms/Anchor/Anchor";
import styled from "styled-components";

const items = [
    { key: 0, title: "home", color: `#C5CAE9` },
    { key: 1, title: "middle", color: `#BDBDBD` },
    { key: 2, title: "foot", color: `#303F9F` },
];

const Section = styled.section`
  background-color: ${(props) => props.color};
  height: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`;
const Main = styled.main`
  position: absolute;
  margin-top: 50px;
  width: 100%;
`;

const Anchorpage = () => {
  return (
      <>
          <Anchor items={items} />
          <Main>
              {items.map((item) => (
                  <Section id={item.title} key={item.title} color={item.color}>
                      {item.title}
                  </Section>
              ))}
          </Main>
      </>
  );
};

export default Anchorpage;
