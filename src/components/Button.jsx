


const Button = ({ text, onClick, url, noArrow }) => {
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
             <p>{text}</p> <i className="fa-solid fa-arrow-right-long"></i>
           </button>
              )
    : (
             <button onClick={onClick}>
               <p>{text}</p> <i className="fa-solid fa-arrow-right-long"></i>
             </button>
    )          

  )









  //   const handleClick = () => {
//     url ? 
//         window.location.href = url 
//       : onClick()
//   };
  
//   return (
//   noArrow ? 
//   (
//     <button onClick={handleClick} id='noArrowButton'>
//       <p>{text}</p>
//     </button>
//   ) 
//   : (
//     <button onClick={handleClick}>
//       <p>{text}</p> <i className="fa-solid fa-arrow-right-long"></i>
//     </button>
//   )
// )
};

export default Button;