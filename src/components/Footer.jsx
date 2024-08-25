import Button from './Button'
import './Footer.css'

export default function Footer() {
console.log('Footer render')

  return (
    <footer id="footer">
      <section className="pre-footer"
      style={{backgroundImage: 'url(./assets/footer-bg.jpeg)'}}
      >
        <div className="infobox">
          <h2>Descubra a leveza de se cuidar na Cl<span style={{ fontFamily: 'museo', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Í</span>nica D`PELE</h2> <Button text='Agende sua avaliação' url='#' />
        </div>
      </section>
      <section className="last">
        <div className="footer-logo">
          <h2>D`PELE</h2>
       
        </div>
        <div className="last-footer">
          <div>
            <h3>Endereço</h3>
            <p>Rua Antônio Barreto, 456, Umarizal - Belém PA</p>
          </div>
          <div>
            <h3>Contato</h3>
            <p>(91) 2121-5010</p>
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