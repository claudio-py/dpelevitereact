


import { Link } from 'react-router-dom';

export default function Button ({ text, onClick, url, noArrow }){
  return (
    url ?
      noArrow ?
        (
          <Link className="button" to={url} id='noArrowButton'>
            <p>{text}</p> 
          </Link>
        )
        : (
          <Link className="button" to={url}>
            {text} <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        )
      : (
        <a className="button" onClick={onClick}>
          {text} <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      )
  );
};

