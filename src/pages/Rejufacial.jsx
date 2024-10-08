import Button from "../components/Button"
import Modal from "../components/Modal"
import './ServiceGlobal.css'
import 'animate.css';

export default function Rejufacial (){
  const removeHideModalClass = (event) => {
    const elementBelow = event.currentTarget.nextElementSibling;
    if (elementBelow && elementBelow.classList.contains('hide-modal')) {
      elementBelow.classList.remove('hide-modal');
    }
  };
  
  return(
<section id="rejuvenescimento" >
      <div className="infobox">
        <h2>Rejuvenescimento facial</h2>
       
        <Button text='Descubra o tratamento ideal para você' url='https://api.whatsapp.com/send?phone=559121215010' noArrow={true} />
      </div>
      <div className="service-buttons">
        <Button text='Bioestimuladores de colágeno' 
          onClick={removeHideModalClass}
        />
        <Modal
          content={ 
            
          <ul>
            <h2>
              Bioestimuladores de col<span style={{ fontFamily: 'museo', fontSize: '2.3rem', color: 'var(--primary-color)' }}>Á</span>geno
            </h2>
            <li>São os procedimentos perfeitos para estímulo de colágeno, efeito lifting e melhora da qualidade dérmica, confira a seguir:</li>
            <li>
              <h3>Sculptra</h3>
              <p>Conhecido como PLLA, o ácido poli L lático  de ácido poli-L-lático é um bioestimulador líquido injetado na derme profunda da pele, sendo biocompatível e absorvível pelo organismo.</p>

            </li>
            <li>
              <h3>Fios de PDO</h3>
              <p>Os fios de polidioxanona estimulam a produção de colágeno, sendo biocompatíveis com o organismo e totalmente reabsorvíveis.</p>
              </li>
            <li>
              <h3>Ultraformer</h3>
              
              </li>
            <li>
              <h3>Microagulhamento</h3>
              <p>Técnica de perfuração da pele com dispositivo de micro agulhas causando uma  inflamação controlada para bioestimulo de colágeno. </p>
              </li>
          </ul>
          
          
        }
        />
        <Button text='Ácido hialurônico' onClick={removeHideModalClass} />
        <Modal
          content={
            <>
            <h2>
              Ácido hialur<span style={{ fontFamily: 'museo', fontSize: '2.3rem', color: 'var(--primary-color)' }}>Ô</span>nico
            </h2>
          <p>Preenchimento de áreas com ácido hialurônico,
Técnica para  reposição do volume perdido com o envelhecimento, gerar embelezamento e fazer sustentação da face.</p></>
            }
        />
        <Button text='Toxina botulínica' onClick={removeHideModalClass} />
        <Modal
          content={  <>
            <h2>
              Toxina botulínica
            </h2>
            <p>Substância que suaviza as contrações musculares, atenuando rugas dinâmicas e promovendo maior uniformização da pele.</p>
            </>}
        />
        <Button text='Manchas e cicatrizes ' onClick={removeHideModalClass} />
        <Modal
          content={ <ul>
            <h2>
              Manchas e cicatrizes
            </h2>
            <li>
              <h3>Peeling químico e físico</h3>
               <p>Aplicação de ativos sobre a pele para uma descamação controlada, promovendo uma renovação cutânea e favorecendo seu rejuvenescimento </p>
               </li>
            <li>
              <h3> Microagulhamento com drug delivery</h3>
             <p>Técnica de perfuração da pele com dispositivo de micro agulhas que causa uma  inflamação controlada para bioestimulo de colágeno. Para completar ou potencializar o tratamento, com os canais ainda abertos, passa-se na pele ativos clareadores ou regeneradores. </p>
             </li>
            <li>
              <h3> Skinbooster com ativos clareadores</h3>
             <p>Técnica injetável de ativos para regeneração cutânea, hidratação e associação com ativos clareadores. </p>
             </li>
          </ul>
          }
        />
  
      </div>
      
</section>
  )
}