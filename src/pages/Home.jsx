import './Home.css'
import Button from '../components/Button'
import Modal from "../components/Modal"
import 'animate.css';


export default function Home() {
  const removeHideModalClass = (event) => {
    const elementBelow = event.currentTarget.nextElementSibling;
    if (elementBelow && elementBelow.classList.contains('hide-modal')) {
      elementBelow.classList.remove('hide-modal');
    }
  };


  
  return (
    <main>
      <section id="service">
        <div className="service-title animate__animated animate__fadeInRight">
          <div className="text">
          <h2> Descubra a leveza de se cuidar</h2>
          <h3>CONHEÇA OS TRATAMENTOS</h3>
          </div>
          
          <img className="service-title-logo" src="./assets/dpelegreylogo.png " alt="Logo" />
          </div>
        <div className="service-buttons animate__animated animate__fadeInLeft" >
      
          <Button text='Estetica facial' url='esteticafacial' />
          <Button text='Rejuvenescimento facial' url='rejuvenescimentofacial' />
          {/* <Button text='Estética corporal' url='esteticaporporal' /> */}
          <Button text='Estética corporal'  onClick={removeHideModalClass} />
        <Modal
          content={ <ul>
            <li><h2>
              Est<span style={{ fontFamily: 'museo', fontSize: '2.3rem', color: 'var(--primary-color)' }}>É</span>tica corporal
              </h2></li>
            <li>
              <h3>- Massagem relaxante</h3>
               </li>
            <li>
              <h3>- Método drenodetox</h3>
             </li>
            <li>
              <h3>- Hidrolipoclasia não aspirativa</h3>
             </li>
             <li>
              <h3>- Drenagem linfática corporal</h3>
               </li>
            <li>
              <h3>- Protocolo para flacidez</h3>
             </li>
            <li>
              <h3>- Protocolo para celulite </h3>
             </li>
             <li>
              <h3>- Protocolo para redução de medidas</h3>
               </li>
            <li>
              <h3>- Protocolo para gordura localizada </h3>
             </li>
            <li>
              <h3>- Harmonização corporal</h3>
             </li>
             <li>
              <h3>- Harmonização de glúteos</h3>
             </li>
          </ul>
          }
        />
        
          
        <Button text='Epilação à laser' 
          onClick={removeHideModalClass}
        />
        <Modal
          content={<>
            <h2>Epila<span style={{ fontFamily: 'museo', fontSize: '2.3rem', color: 'var(--primary-color)' }}>ÇÃ</span>o <span style={{ fontFamily: 'museo', fontSize: '2.3rem', color: 'var(--primary-color)' }}>Á</span> laser</h2>
          <p>A mais completa tecnologia de epilação a laser do mercado. Remoção definitiva dos pelos de todos os fototipos cutâneos, com exclusiva ponteira de resfriamento para uma técnica mais segura e confortável.</p>
          </>
        }
        />
        </div>
      </section>
        
      <section id="about">
        <div className="about-entry animate__animated animate__fadeInUp"> 
          <img className="about-logo animate__animated animate__flip" src="./assets/dpelelogo.png " alt="" />
          <p>Nossa Pele fala sobre nós, ela conta nossa história. Escolha contar o trecho mais bonito!
          </p> <svg xmlns="http://www.w3.org/2000/svg" width="6" height="67" viewBox="0 0 6 67" fill="none">
            <path
              d="M3 66.8867L5.88675 64L3 61.1132L0.113246 64L3 66.8867ZM2.5 -2.18557e-08L2.5 64L3.5 64L3.5 2.18557e-08L2.5 -2.18557e-08Z"
              fill="#D3C09F"></path>
          </svg>
        </div> 
        <div className='infobox-and-img' >
        <img className="about-main-img animate__animated animate__fadeInLeft" src="./galeria/imgsobre.jpg" alt="" />
        <div className="infobox animate__animated animate__fadeInRight">
          <h2>Olhar atencioso e personalizado</h2>
          <p> Na D’P acreditamos que a beleza é um reflexo da saúde e do auto cuidado. Queremos proporcionar tratamentos com excelência; que lhe inspirem sobretudo, segurança e bem estar.

          </p> 
          {/* <button>CONHEÇA AGORA <i className="fa-solid fa-arrow-right-long"></i></button> */}
        </div>
        </div>
       
      </section>
      <section id="local">
        <div className="infobox animate__animated animate__fadeInLeft">
          <h2>Lugar para se cuidar e relaxar</h2>
          <p>Mais que um espaço para cuidar da beleza a D’Pele visa sua satisfação e bem estar desde os mínimos detalhes e se propõe a lhe oferecer uma experiência única e acolhedora, para um doce encontro com sua melhor versão. 
          Com uma abordagem global, focada primeiramente na saúde, nosso time de especialistas está pronto para cuidar de você com protocolos exclusivos e personalizados.</p>
          {/* <button>CONHEÇA A CLÍNICA <i className="fa-solid fa-arrow-right-long"></i></button> */}
          <Button url={"clinica"} className="local-button" text={"CONHEÇA A CLÍNICA"}></Button>
        </div> 
        <img className="local-main-img animate__animated animate__fadeInRight" src="./galeria/localcut.jpg" alt="" />
      </section>
    </main>
  )
}