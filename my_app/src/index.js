import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Description />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/51e+ieln0GL._AC_SX184_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h4>The Weeknd</h4>;
};

const Description = () => {
  return <p>this is about abel tesfaye</p>;
};
ReactDom.render(<BookList />, document.getElementById("root"));
