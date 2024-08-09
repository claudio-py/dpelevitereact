import './Home.css'
import Button from '../components/Button'
export default function Home() {
  return (
    <main>
      <section id="service">
        <div className="service-title">
          <h2> Descubra a leveza de se cuidar</h2>
          <h3>CONHEÇA OS TRATAMENTOS</h3>
        </div>
        <div className="service-buttons">
      
          <Button text='serviço um' url='serviceum' />
          <Button text='serviço dois' url='localhost:3000/servicedois' />
          <Button text='serviço tres' url='localhost:3000/servicetres' />
          <Button text='serviço quatro' url='localhost:3000/servicequatro' />
          <Button text='serviço cinco' url='localhost:3000/servicecinco' />
          <Button text="função onClick" onClick={() => { window.alert("you clicked a button") }} />
          <Button text="urltest" url="#" />
        </div>
      </section>
      <section id="about">
        <div className="about-entry"> <img className="about-logo" src="./logo192.png" alt="" />
          <p>Um propósito simples e admirável: aprimorar a qualidade de vida daqueles que enfrentam desafios capilares.
          </p> <svg xmlns="http://www.w3.org/2000/svg" width="6" height="67" viewBox="0 0 6 67" fill="none">
            <path
              d="M3 66.8867L5.88675 64L3 61.1132L0.113246 64L3 66.8867ZM2.5 -2.18557e-08L2.5 64L3.5 64L3.5 2.18557e-08L2.5 -2.18557e-08Z"
              fill="#D3C09F"></path>
          </svg>
        </div> <img className="about-main-img" src="./assets/img3x4demo2.jpeg" alt="" />
        <div className="infobox">
          <h2>Olhar atencioso e individualizado</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi
            sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!
          </p> <button>CONHEÇA AGORA <i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
      </section>
      <section id="local">
        <div className="infobox">
          <h2>Um espa<span style={{ fontFamily: 'museo', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Ç</span>o projetado
            para o seu bem-estar</h2>
          <p>Com um time de profissionais qualificados, nossa clínica oferece uma abordagem integral para promover sua
            saúde e vitalidade. Da endocrinologia à tricologia, do transplante capilar à cirurgia plástica e estética, e,
            passando pela ginecologia, cada núcleo contribui para uma experiência única e personalizada.</p>
          <button>CONHEÇA AGORA <i className="fa-solid fa-arrow-right-long"></i></button>
        </div> <img className="local-main-img" src="./assets/img3x4demo2.jpeg" alt="" />
      </section>
    </main>
  )
}