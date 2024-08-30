import Button from './Button'
import './Footer.css'

export default function Footer() {
/* console.log('Footer render') */

  return (
    <footer id="footer">
      <section className="pre-footer">
        <div className="infobox">
          <h2>
            Descubra a leveza de se cuidar na Cl<span style={{ fontFamily: 'museo', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Í</span>nica D`PELE
            </h2> 
            <img className="footer-infobox-logo" src="./assets/dpelegreylogo.png " alt="Logo" />
            <Button text='Agende sua avaliação' url='https://api.whatsapp.com/send?phone=559121215010' />
        </div>
      </section>
      <section className="last">
        <div className="footer-logo">
          <h2>D`PELE</h2>
       
        </div>
        <div className="last-footer">
        <div>
            <h3>Contato</h3>
            <p>(91) 2121-5010</p>
          </div>
          <div>
            <h3>Endereço</h3>
            <p>Rua Antônio Barreto, 456, Umarizal - Belém PA</p>
          </div>
        
          <div>
            <h3>Acompanhe</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.instagram.com/centrodepele?igsh=MTB4djE5aW96NXZ3cg==">
                  <img className='svg' src="./assets/insta.svg" />
                </a>
              </li>
              
            </ul>
          </div>
        </div>

      </section>
      <p style={{color:"black"}} className="cnpjoto">CNPJ 00.0000.0000./0001-00</p>

    </footer>
  )

}