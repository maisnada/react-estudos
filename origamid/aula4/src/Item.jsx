import React, { useEffect } from "react";

const Item = () => {
  useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <p>Meu item</p>
    </div>
  );
};

export default Item;
