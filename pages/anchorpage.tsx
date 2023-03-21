import Anchor from "../components/anchor/atoms/Anchor/Anchor";
import styled from "styled-components";

const items = [
  { key: 1, title: "home", href: "#home" },
  { title: "main", key: 2, href: "#main" },
  { title: "footer", key: 3, href: "#footer" },
];

const Section = styled.section`
  height: 1000px;
  width: 100%;
`;

const Anchorpage = () => {
  return (
    <>
      <nav style={{ position: "fixed", width: "100%", zIndex: "3" }}>
        <Anchor items={items} />
      </nav>
      <main style={{ position: "absolute", marginTop: `50px`, width: "100%" }}>
        <Section id={"home"} style={{ backgroundColor: "cadetblue" }}>
          home
        </Section>
        <Section id={"main"} style={{ backgroundColor: "sienna" }}>
          main
        </Section>
        <Section id={"footer"} style={{ backgroundColor: "snow" }}>
          footer
        </Section>
      </main>
    </>
  );
};

export default Anchorpage;
