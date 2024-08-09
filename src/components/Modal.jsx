import './Modal.css'
export default function Modal({ content }) {
  const addHideModalClass = (event) => {
    const parentElement = event.currentTarget.parentElement;
    const grandparentElement = parentElement.parentElement;

    if (grandparentElement && !grandparentElement.classList.contains('hide-modal')) {
      grandparentElement.classList.add('hide-modal');
    }
  };
  return (
    <div id='parent-modal'  className='hide-modal'>
      <div id='modal'>
        <p>
          {content}
        </p>
        <div onClick={addHideModalClass} className='close-button'><i className="fa-solid fa-xmark"></i></div>
      </div>
      
    </div>
  )
};