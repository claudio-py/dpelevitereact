import Button from "../components/Button"
import Modal from "../components/Modal"
import './ServiceGlobal.css'
export default function Rejufacial (){
  const removeHideModalClass = (event) => {
    const elementBelow = event.currentTarget.nextElementSibling;
    if (elementBelow && elementBelow.classList.contains('hide-modal')) {
      elementBelow.classList.remove('hide-modal');
    }
  };
  
  return(
<section >
      <div className="infobox">
        <h2>Rejuvenescimento facial</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi
          sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!
        </p> 
        <Button text='Descubra o tratamento ideal para você' url='#' noArrow={true} />
      </div>
      <div className="service-buttons">
        <Button text='Bioestimuladores de colágeno' 
          onClick={removeHideModalClass}
        />
        <Modal
          content={ 
          <ul>
            <li>
              <h3>Sculptra</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi</p>

            </li>
            <li>
              <h3>Fios de PDO</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi</p>
              </li>
            <li>
              <h3>Ultraformer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi</p>
              </li>
            <li>
              <h3>Microagulhamento</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi</p>
              </li>
          </ul>
          
          
        }
        />
        <Button text='Ácido hialurônico' onClick={removeHideModalClass} />
        <Modal
          content={<p>serviço 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!</p>
            }
        />
        <Button text='Toxina botulínica' onClick={removeHideModalClass} />
        <Modal
          content="serviço 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!"
        />
        <Button text='Manchas e cicatrizes ' onClick={removeHideModalClass} />
        <Modal
          content={ <ul>
            <li>
              <h3>Peeling químico e físico</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi</p>
               </li>
            <li>
              <h3> Microagulhamento com drug delivery</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi</p>
             </li>
            <li>
              <h3> Skinbooster com ativos clareadores</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi</p>
             </li>
          </ul>
          }
        />
  
      </div>
      
</section>
  )
}