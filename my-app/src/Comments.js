import React from "react";


const Comments = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avtar">
        <img alt="avtar" src={props.imgs} />
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author}
          </a>

        <div className="metadata">
          <span className="date">{props.dates}</span>
        </div>

        <div className="text">
          {props.texts}
        </div>

      </div>

    </div>
  )
}

export default Comments;