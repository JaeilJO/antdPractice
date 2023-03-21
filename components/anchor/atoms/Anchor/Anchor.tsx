import React, { useCallback, useEffect, useRef, useState } from "react";
import { Li, Marker, Ul } from "./Anchor.styled";

interface Item {
  key: number;
  title: string;
  href: string;
}

interface AnchorProps {
  items: Item[];
  direction?: "column" | "row";
}

const Anchor = ({ items, direction }: AnchorProps) => {
  const [isVisible, setIsVisible] = useState<string>();
  const [markers, setMarker] = useState({ width: 0, x: 0 });
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    let current = "";
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;

      if (
        window.scrollY + section.getBoundingClientRect().height / 1.5 >=
        sectionTop
      ) {
        current = section.getAttribute("id") || "";
        setIsVisible(current);
      }

      if (liRefs.current[index]) {
        const href = liRefs.current[index]?.title;
        if (href === current) {
          setMarker({
            width: liRefs.current[index]?.getBoundingClientRect().width || 0,
            x: liRefs.current[index]?.getBoundingClientRect().x || 0,
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    sectionRefs.current = items.map(
      (item) => document.querySelector(`#${item.title}`) as HTMLDivElement
    );
    liRefs.current = items.map(() => null);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Ul direction={direction}>
      {items.map((item, index) => (
        <Li
          title={item.title}
          key={item.key}
          isVisible={isVisible}
          ref={(element) => (liRefs.current[index] = element)}
        >
          <a href={item.href}>{item.title}</a>
        </Li>
      ))}
      <Marker isVisible={isVisible} width={markers.width} x={markers.x} />
    </Ul>
  );
};

export default Anchor;
