import'./Header.css'
import Button from './Button'
import { Link } from 'react-router-dom';

import Modal from "../components/Modal"
export default function Header(){
  const removeHideModalClass = (event) => {
    const elementBelow = event.currentTarget.nextElementSibling;
    if (elementBelow && elementBelow.classList.contains('hide-modal')) {
      elementBelow.classList.remove('hide-modal');
    }
  };
  function openMenu() {
	document.body.classList.add('menu-expanded')
}
function closeMenu() {
	document.body.classList.remove('menu-expanded')
}

/* console.log('Header render') */
return(
  <nav id="navigation">
      <div className="wrapper animate__animated animate__fadeIn">
        <div className="menu">
          <div className="nav-menu-section service-menu">
            <h3>Menu</h3>
            <ul>
            <li onClick={closeMenu} ><Link to="/">Home</Link></li>
              <li onClick={closeMenu} ><Link to="esteticafacial">Estetica facial</Link></li>
              <li onClick={closeMenu}><Link to="rejuvenescimentofacial">Rejuvenescimento facial</Link></li>
           
              <li> <Button text='Estética corporal'  onClick={removeHideModalClass} />
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
        /></li>
              <li><Button text='Epilação à laser' 
          onClick={removeHideModalClass}
        />
        <Modal
          content={<>
            <h2>Epila<span style={{ fontFamily: 'museo', fontSize: '2.3rem', color: 'var(--primary-color)' }}>ÇÃ</span>o <span style={{ fontFamily: 'museo', fontSize: '2.3rem', color: 'var(--primary-color)' }}>Á</span> laser</h2>
          <p>A mais completa tecnologia de epilação a laser do mercado. Remoção definitiva dos pelos de todos os fototipos cutâneos, com exclusiva ponteira de resfriamento para uma técnica mais segura e confortável.</p>
          </>
        }/></li>
                       
        
          
        
              <li onClick={closeMenu}><Link to="clinica">A clínica</Link></li>
            </ul>
          </div>
          <div className="nav-menu-section adress">
            <h3>Endereço</h3>
            <p>Rua Antônio Barreto, 456,<br/> Umarizal - Belém PA</p>
          </div>
          <div className="nav-menu-section contact">
            <h3>Contato</h3>
           <a href="https://api.whatsapp.com/send?phone=559121215010"> <p>(91) 2121-5010</p></a>
          </div>
          <div className="nav-menu-section follow">
            <h3>Acompanhe</h3>
          <ul className="social-links">
              <li> <a href="https://www.instagram.com/centrodepele?igsh=MTB4djE5aW96NXZ3cg=="> 
              <img className='svg' src="./assets/insta.svg" />
                  </a> </li>
        
            </ul>
          </div>
        </div> 
        <button onClick={openMenu} className="open-menu"> 
          <svg width="40" height="40" viewBox="0 0 40 40"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20H30" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 12H30" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 28L30 28" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg> 
          </button>
        <div className="logo">
          <h1 >D'PELE</h1>
          <h2 >Centro Especializado de Beleza</h2>
        </div>
        <div className="div-wpp-icon"> 
          <a href="https://api.whatsapp.com/send?phone=559121215010">  
          <svg className="wpp-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
              fill="#FFFAF1" </path>
          </svg> 
          </a>
        
    
              <Button url={"https://api.whatsapp.com/send?phone=559121215010"} text={"AGENDE UMA CONSULTA"}/>
          </div> <button onClick={closeMenu} className="close-menu"> <svg width="40" height="40"
            viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10L10 30M10 10L30 30" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg> </button>
      </div>
    </nav>
)
}