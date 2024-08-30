import Button from "../components/Button"
import Modal from "../components/Modal"
import './ServiceGlobal.css'
export default function Estfacial (){
  const removeHideModalClass = (event) => {
    const elementBelow = event.currentTarget.nextElementSibling;
    if (elementBelow && elementBelow.classList.contains('hide-modal')) {
      elementBelow.classList.remove('hide-modal');
    }
  };
  
  return(
<section id="estetica-facial">
      <div className="infobox">
        <h2>Est<span style={{ fontFamily: 'museo', fontSize: '2.3rem', color: 'var(--primary-color)' }}>É</span>tica facial</h2>
       
        <Button text='Descubra o tratamento ideal para você' url='https://api.whatsapp.com/send?phone=559121215010' noArrow={true} />
      </div>
      <div className="service-buttons">
        <Button text='Spa facial' 
          onClick={removeHideModalClass}
        />
        <Modal
          content={<> 
          <h2>Spa facial</h2>
          <p> Todo o cuidado que você merece numa associação completa de técnicas que combinam a higienização facial, ativação da circulação local e relaxamento com drenagem linfática, fototerapia e hidratação.</p></>}
        />
        <Button text='Limpeza de pele' onClick={removeHideModalClass} />
        <Modal
          content={
            <>
            <h2>
              Limpeza de pele
            </h2>
            <p>Higienização da camada mais superficial da pele para remoção de células mortas e acúmulo de impurezas que entopem poros, aumentando a oleosidade, o surgimento de cravos e espinhas, além da não absorção de ativos tópicos de tratamento</p>
            </>
          }
        />
        <Button text='Hidralips' onClick={removeHideModalClass} />
        <Modal
          content={  <>
          <h2>
            Hidralips
          </h2>
          <p>Para manter o aspecto jovial e saudável da pele dos labios uma super hidratação com permeação de ativos regeneradores.</p>
          </>}
        />
        <Button text='Drenagem linfática facial' onClick={removeHideModalClass} />
        <Modal
          content={  <>
            <h2>
              Drenagem linf<span style={{ fontFamily: 'museo', fontSize: '2.3rem', color: 'var(--primary-color)' }}>Á</span>tica facial
            </h2>
            <p>Técnica de manobras manuais para ativar e melhorar a circulação local, diminuindo inchado e contribuindo para eliminação de toxinas.</p>
            </>}
        />
         <Button text="Protocolo D’Pele lisinha"  onClick={removeHideModalClass} />
        <Modal
          content=
          {  <>
            <h2>
              Protocolo D’Pele lisinha
            </h2>
            <p> Protocolo de rotina de Skincare totalmente personalizado para prevenção e manutenção da saúde e beleza da pele, podendo tratar também disfunções como melasma, oleosidade, ressecamento, poros, manchas, cravos e espinhas. Os segredos, nem tão secretos, para uma pele radiante!</p>
            </>}
         
        />
      </div>
      
</section>
  )
}