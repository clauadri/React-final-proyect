import React from 'react'
import Imagen from '../componentes/Imagen'
import "./AboutUs.scss"
const AboutUs = () => {
  return (
    <div className='imageAbout' >
      <Imagen size="600px" altura="50px" imagen={'https://wemotoclothing.com/media/image/4e/f3/c9/Wemoto-Clothing-AboutUs_1280x1280.jpg'}/>
      <div className='about' >
        <p>Wemoto is a creative studio, run by Patrick Lotz and Stefan Golz as a company of friends with same interests, passions and mind sets. Coming from skate, music, art and street culture, our mental topic was and always will be the understanding and interaction between people. We set out to be a brand that captures subcultural influences combined with fashionable designs to create pieces that represent our values.</p>
      </div>
    </div>
  )
}

export default AboutUs