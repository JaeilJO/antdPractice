import Anchor from "../components/anchor/atoms/Anchor/Anchor";
import styled from "styled-components";

const items = [
  { key: 1, title: "home", href: "#home" },
  { title: "main", key: 2, href: "#main" },
  { title: "footer", key: 3, href: "#footer" },
];

const Div = styled.section`
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
        <Div id={"home"} style={{ backgroundColor: "cadetblue" }}>
          home
        </Div>
        <Div id={"main"} style={{ backgroundColor: "sienna" }}>
          main
        </Div>
        <Div id={"footer"} style={{ backgroundColor: "snow" }}>
          footer
        </Div>
      </main>
    </>
  );
};

export default Anchorpage;
