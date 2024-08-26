


import "./Clinica.css";



export default function Clinica() {

  return (
    <section id='galeria'>
      <div style={{ backgroundImage: 'url(./galeria/img5.jpg)' }} className='intro-galeria-wrapper'>
        <div className="intro-galeria">
          <h2>Um espa<span style={{ fontFamily: 'museo', fontSize: '3rem', color: 'var(--bg-light)' }}>Ç</span>o projetado para o seu bem-estar</h2>
          <div>
            <p>CONHEÇA A CLÍNICA</p>
          </div>
        </div>
        <hr className="hr-galeria" />
      </div>

      <div className='gallery-itself'>
       
      
      </div>
    </section>
  );
}