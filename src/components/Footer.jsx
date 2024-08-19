import './Footer.css'

export default function Footer() {
  return (
    <footer id="footer">
      <section className="pre-footer"
      style={{backgroundImage: 'url(./assets/footer-bg.jpeg)'}}
      >
        <div className="infobox">
          <h2>Descubra a leveza de se cuidar na Cl<span style={{ fontFamily: 'museo', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Í</span>nica D`PELE</h2> <button>AGENDE UMA CONSULTA <i
            className="fa-solid fa-arrow-right-long"></i></button>
        </div>
      </section>
      <section className="last">
        <div className="footer-logo">
          <h2>D`PELE</h2>
          <p>Responsável técnico Médico:</p>
          <p>Responsável técnico Médico:</p>
          <p>Responsável técnico Médico:</p>
        </div>
        <div className="last-footer">
          <div>
            <h3>Endereço</h3>
            <p>Rua Canadá, 215, Jd. América – São Paulo SP</p>
          </div>
          <div>
            <h3>Contato</h3>
            <p>WhatsApp: (11) 99999-9999</p>
          </div>
          <div>
            <h3>Acompanhe</h3>
            <ul className="social-links">
              <li>
                <a href="#">
                  <img className='svg' src="./assets/insta.svg" />
                </a>
              </li>
              <li>
                <a href="# ">
                <img className='svg' src="./assets/face.svg" />
                </a>
              </li>
              <li>
                <a href="# ">
                <img className='svg' src="./assets/you.svg" />
                </a>
              </li>
            </ul>
          </div>
      <p>CNPJ 54.6454.5454./0001-19</p>
        </div>
      </section>
    </footer>
  )

}