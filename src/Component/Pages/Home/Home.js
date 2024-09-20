import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import SectionOne from '../../SectionOne/SectionOne';
import SectionTwo from '../../SectionTwo/SectionTwo';
import SectionThree from '../../SectionThree/SectionThree';
import SectionFour from '../../SectionFour/SectionFour';
import SectionFive from '../../SectionFive/SectionFive';

const Home = ({page,setPage}) => {
  return (
    <div className='home'>
      <HeroSection/>
      <SectionOne page={page} setPage={setPage}/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </div>
  )
}

export default Home
