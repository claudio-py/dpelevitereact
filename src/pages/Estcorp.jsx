import Button from "../components/Button"
import Modal from "../components/Modal"
import './ServiceGlobal.css'
export default function Estcorp (){
  const removeHideModalClass = (event) => {
    const elementBelow = event.currentTarget.nextElementSibling;
    if (elementBelow && elementBelow.classList.contains('hide-modal')) {
      elementBelow.classList.remove('hide-modal');
    }
  };
  
  return(
<section >
      <div className="infobox">
        <h2>Estética corporal</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi
          sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!
        </p> 
        <Button text='Descubra o tratamento ideal para você' url='#' noArrow={true} />
      </div>
      <div className="service-buttons">
        <Button text='Massagem relaxante' 
          onClick={removeHideModalClass}
        />
        <Modal
          content=" serviço um Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
        <Button text='Método drenodetox' onClick={removeHideModalClass} />
        <Modal
          content="serviço 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
        <Button text='Hidrolipoclasia não aspirativa' onClick={removeHideModalClass} />
        <Modal
          content="serviço 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
        <Button text='Drenagem linfática corporal' onClick={removeHideModalClass} />
        <Modal
          content="serviço4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
         <Button text="Protocolo para flacidez"  onClick={removeHideModalClass} />
        <Modal
          content="serviço4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
                 <Button text="Protocolo para celulite "  onClick={removeHideModalClass} />
        <Modal
          content="serviço4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
                 <Button text="Protocolo para redução de medidas "  onClick={removeHideModalClass} />
        <Modal
          content="serviço4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
                 <Button text="Protocolo para gordura localizada "  onClick={removeHideModalClass} />
        <Modal
          content="serviço4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
                 <Button text="Harmonização corporal "  onClick={removeHideModalClass} />
        <Modal
          content="serviço4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
                 <Button text="Harmonização de glúteos "  onClick={removeHideModalClass} />
        <Modal
          content="serviço4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
      </div>
      
</section>
  )
}