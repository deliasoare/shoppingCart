import { Link } from 'react-router-dom';

import Lights from '../assets/lights.png';
import Camera from '../assets/camera.png';
import Action from '../assets/action.png';

import ImageSlider from './ImageSlider';
function Home() {
  return (
    <>
      <div className='imageSlider'>
        <ImageSlider />
      </div>
      <div className='writing'>
        <p className='leftAlignedText para'>The best deals.</p>
        <p className='rightAlignedText para'>The best experience.</p>
      </div>
      <div className='threePartSection'>
        <div className='section section1'>
              <img className='sectionImg' src={Lights}></img>
              <p className='sectionHeader'>LIGHTS</p>
              <p className='sectionText'>We bring the lights on to you by searching the very best quality products and bringing this website so easy within your reach!</p>
        </div>
        <div className='section section2'>
              <img className='sectionImg' src={Camera}></img>
              <p className='sectionHeader'>CAMERA</p>
              <p className='sectionText'>Bring out your camera and go ahead and catch some of the best products before they flash out of your sight!</p>
        </div>
        <div className='section section1'>
              <img className='sectionImg' src={Action}></img>
              <p className='sectionHeader'>ACTION</p>
              <p className='sectionText'>It is your time to shine and take action into your own hands by picking what you feel suits you best. Keep in mind that having it delivered is just one click away!</p>
        </div>
      </div>
    </>
  )
}

export default Home;
