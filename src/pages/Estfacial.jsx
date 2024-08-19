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
<section >
      <div className="infobox">
        <h2>Estética facial</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam fugiat, amet ab debitis commodi
          sequi officiis labore nemo, nisi maxime alias! Molestiae consequuntur voluptatum eveniet suscipit in ea odio!
        </p> 
        <Button text='Descubra o tratamento ideal para você' url='#' noArrow={true} />
      </div>
      <div className="service-buttons">
        <Button text='Spa facial' 
          onClick={removeHideModalClass}
        />
        <Modal
          content=" Todo o cuidado que você merece numa associação completa de técnicas que combinam a higienização facial, ativação da circulação local e relaxamento com drenagem linfática, fototerapia e hidratação."
        />
        <Button text='Limpeza de pele' onClick={removeHideModalClass} />
        <Modal
          content="Higienização da camada mais superficial da pele para remoção de células mortas e acúmulo de impurezas que entopem poros, aumentando a oleosidade, o surgimento de cravos e espinhas, além da não absorção de ativos tópicos de tratamento"
        />
        <Button text='Hidralips' onClick={removeHideModalClass} />
        <Modal
          content="Para manter o aspecto jovial e saudável da pele dos labios uma super hidratação com permeação de ativos regeneradores. "
        />
        <Button text='Drenagem linfática facial' onClick={removeHideModalClass} />
        <Modal
          content="Técnica de manobras manuais para ativar e melhorar a circulação local, diminuindo inchado e contribuindo para eliminação de toxinas."
        />
         <Button text="Protocolo D’Pele lisinha"  onClick={removeHideModalClass} />
        <Modal
          content="Protocolo de rotina de Skincare totalmente personalizado para prevenção e manutenção da saúde e beleza da pele, podendo tratar também disfunções como melasma, oleosidade, ressecamento, poros, manchas, cravos e espinhas. Os segredos, nem tão secretos, para uma pele radiante!"
        />
      </div>
      
</section>
  )
}