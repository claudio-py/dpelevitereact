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
    </section>
  );
}