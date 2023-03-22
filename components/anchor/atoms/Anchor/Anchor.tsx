import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnchorLi, AnchorNav, AnchorUl, Marker } from "./Anchor.styled";

interface Item {
  key: number;
  title: string;
}
interface AnchorProps {
  items: Item[];
}

const Anchor = ({ items }: AnchorProps) => {
  const [markerCoordinate, setMarkerCoordinate] = useState<{
    width: number;
    x: number;
  }>({
    width: 0,
    x: 0,
  });

  const handleClick = (id: string) => {
    const section = document.querySelector(`#${id}`);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const anchorLiRefs = useRef([]);
  const scrollHandle = useCallback(() => {
    let current: string | undefined = "";

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      const sectionTop = section?.getBoundingClientRect().top + window.scrollY;

      if (window.scrollY >= sectionTop && current != section?.id) {
        current = section?.id;
      }

      if (anchorLiRefs.current[index]) {
        const currentLi = anchorLiRefs.current[index]?.title;
        if (currentLi === current) {
          setMarkerCoordinate({
            width: anchorLiRefs.current[index]?.getBoundingClientRect().width,
            x: anchorLiRefs.current[index]?.getBoundingClientRect().x,
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    sectionRefs.current = items.map((item) =>
        document.querySelector(`#${item.title}`)
    );

    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
      <AnchorNav>
        <AnchorUl>
          {items.map((item, index) => (
              <AnchorLi
                  key={item.title}
                  ref={(element) => {
                    anchorLiRefs.current[index] = element;
                  }}
                  title={item.title}
                  onClick={() => handleClick(item.title)}
              >
                <a style={{ cursor: "pointer" }}>{item.title}</a>
              </AnchorLi>
          ))}
        </AnchorUl>
        <Marker markerCoordinate={markerCoordinate} />
      </AnchorNav>
  );
};

export default Anchor;
