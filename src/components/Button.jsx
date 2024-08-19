


export default function Button ({ text, onClick, url, noArrow }){
  return (
url ?
noArrow ?
          (
          <button id='noArrowButton' onClick={() => window.location.href = url}>
            <p>{text}</p> 
          </button>
          )
        : (
        <button onClick={()=>window.location.href = url}>
            {text} <i className="fa-solid fa-arrow-right-long"></i>
           </button>
              )
    : (
             <button onClick={onClick}>
               {text} <i className="fa-solid fa-arrow-right-long"></i>
             </button>
    )          

  )

};

