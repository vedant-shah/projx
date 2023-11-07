import React from "react";

function HomeQuote() {
  return (
    <>
      <figure className="d-flex align-items-center flex-column my-auto">
        <blockquote className="blockquote">
          <p
            className="display-3"
            style={{
              fontFamily: "Montserrat",
              fontStyle: "italic",
              color: "black",
            }}>
            A goal without a plan is just a wish.
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          <cite title="Source Title">Antoine de Saint-Exupéry</cite>
        </figcaption>
      </figure>
    </>
  );
}

export default HomeQuote;
