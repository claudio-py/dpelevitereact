// src/pages/Clinica.tsx
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import "./Clinica.css";
import { images, CustomImage } from "../components/Gallery";

// Fix the global is not defined issue
if (typeof (window as any).global === 'undefined') {
  (window as any).global = window;
}

export default function Clinica() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

 
  const handleClose = () => {
    /* console.log(index,currentImage); */
    setIndex(-1)

  };
  const handleMovePrev = () => {
  /*   console.log(prevIndex,currentImage); */
    setIndex(prevIndex)
  };
  const handleMoveNext = () => {
    /* console.log(nextIndex,currentImage); */
    setIndex(nextIndex)
  };
  const handleClick = (index: number, item: CustomImage) => {
    /* console.log(index, currentImage,item); */
    setIndex(index)
   
  };
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
        <p className="gallery-text" >Na D'PELE não apenas tratamos, mas inspiramos o autocuidado. Investimos na promoção de um estilo de vida saudável, na busca constante pela melhor versão de cada paciente.</p>
        <Gallery
          images={images}
          onClick={handleClick}
      /*     tileViewportStyle={{
            border: '1px solid red',
            marginInline: '5rem',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }} */
          enableImageSelection={false}
        />
        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>


      <div className="maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5492674387438!2d-48.48680228935014!3d-1.4451483985351543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e98a8e0df07%3A0xaac7be51f07ce13b!2sR.%20Ant%C3%B4nio%20Barreto%2C%20456%20-%20F%C3%A1tima%2C%20Bel%C3%A9m%20-%20PA%2C%2066055-050!5e0!3m2!1spt-BR!2sbr!4v1724893758505!5m2!1spt-BR!2sbr"  style={{border:0,
        width: '100%',height:"450px"
      }}  loading="lazy" ></iframe>
      </div>
    </section>
  );
}