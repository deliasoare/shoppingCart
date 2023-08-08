import { Link } from 'react-router-dom';

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
    </>
  )
}

export default Home;
