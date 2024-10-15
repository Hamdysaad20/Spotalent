import React from 'react';
import Hero from '../Components/Hero';
import Company from '../Components/Company';
import Jobs from '../Components/Jobs';
import Apply from '../Components/Apply';
import CardsHover from '../Components/CardHover';
import Grid from '../Components/Grid';
import Comments from '../Components/Comments';
import Pricing from '../Components/Pricing';
import Subscribe from '../Components/Subscribe';

const Home: React.FC = () => {
    return (
      <div className="w-full h-full">
        <div className='bg-gradient-to-r from-[#F3F7FE] to-[#ffffff]'>
          <Hero />
        </div>
        <Company />
        <Jobs />
        <Apply />
        <CardsHover />
        <Grid />
        <Comments />
        <Pricing />
        <Subscribe />
      </div>
    );
  };
  
  export default Home;
  