import Button from "../components/Button"
import Modal from "../components/Modal"
import './ServiceGlobal.css'
export default function Estfacial (){
  const removeHideModalClass = (event) => {
    const elementBelow = event.currentTarget.nextElementSibling;
    if (elementBelow && elementBelow.classList.contains('hide-modal')) {
      elementBelow.classList.remove('hide-modal');
    }
  };
  
  return(
<section >
      <div className="infobox">
        <h2>Estética facial</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi
          sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!
        </p> 
        <Button text='Descubra o tratamento ideal para você' url='#' noArrow={true} />
      </div>
      <div className="service-buttons">
        <Button text='Spa facial' 
          onClick={removeHideModalClass}
        />
        <Modal
          content=" serviço um Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
        <Button text='Limpeza de pele' onClick={removeHideModalClass} />
        <Modal
          content="serviço 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
        <Button text='Hidralips' onClick={removeHideModalClass} />
        <Modal
          content="serviço 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
        <Button text='Drenagem linfática facial' onClick={removeHideModalClass} />
        <Modal
          content="serviço4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
         <Button text="Protocolo D’Pele lisinha"  onClick={removeHideModalClass} />
        <Modal
          content="serviço4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
      </div>
      
</section>
  )
}