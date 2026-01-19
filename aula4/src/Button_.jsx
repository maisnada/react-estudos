import React from "react";

const Button_ = (props) => {
  function handleClick() {
    props.setProduto({});

    props.setLoading(true);

    fetch(props.link)
      .then((response) => response.json())
      .then((json) => {
        props.setLoading(false);
        props.setProduto(json);
      });
  }

  return <button onClick={handleClick}>{props.nome}</button>;
};

export default Button_;
