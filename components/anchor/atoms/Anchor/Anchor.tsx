import React, { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState();
  const [a, setA] = useState({ width: 0, x: 0 });

  useEffect(() => {
    const queries = items.map((item) =>
      document.querySelector(`#${item.title}`)
    );
    const lis = document.querySelectorAll(`li`);

    window.addEventListener("scroll", () => {
      let current = "";
      queries.forEach((section) => {
        const sectionTop = window.scrollY + section.getBoundingClientRect().top;

        if (
          window.scrollY + section.getBoundingClientRect().height / 1.5 >=
          sectionTop
        ) {
          current = section.getAttribute("id");
          setIsVisible(current);
        }

        lis.forEach((li) => {
          const href = li.title;
          if (href === current) {
            setA({
              width: li.getBoundingClientRect().width,
              x: li.getBoundingClientRect().x,
            });
          }
        });
      });
    });
  }, []);
  console.log(a);
  return (
    <Ul direction={direction}>
      {items.map((item) => (
        <Li title={item.title} key={item.key} isVisible={isVisible}>
          <a href={item.href}>{item.title}</a>
        </Li>
      ))}
      <Marker isVisible={isVisible} width={a.width} x={a.x} />
    </Ul>
  );
};

export default Anchor;
