import { useState } from 'react';
import Card from '../components/Card';
import './App.css';
import image from './assets/barcade-1.jpeg';
import image2 from './assets/barcade-2.jpg';
import image3 from './assets/arcade-3.jpg';
import image4 from './assets/arcade-4.jpg';
import image5 from './assets/arcade-5.jpg';
import image6 from './assets/arcade-6.jpg';
import image7 from './assets/arcade-7.jpg';
import image8 from './assets/arcade-8.jpg';
import image9 from './assets/arcade-9.jpg';
import image10 from './assets/arcade-10.jpg';



const App  = () => {

  return (
    <div className="App">
      <h1 className='appText'> Arcades & Entertainment!</h1>
        <div className='cardContainer'>
          <Card img = {image}  title='Free Play Barcade' city='Providence, RI'link ='https://freeplaybar.com/'/>
          <Card img = {image2}  title='The Bubbler VR' city='Providence, RI' link ='https://thebubblervr.com/'/>
          <Card img = {image3}  title='Dave & Busters' city='Providence, RI' link ='https://www.daveandbusters.com/us/en/about/locations/providence'/>
          <Card img = {image4}  title='Monster Mini Golf' city='Seekonk, MA' link ='https://monsterminigolf.com/seekonk/'/>
          <Card img = {image5}  title='Base Station VR Lounge' city='Johnston, RI' link ='https://www.basestationvr.com'/>
          <Card img = {image6}  title='BattlegroundZ' city='Lincoln, RI' link ='https://battlegroundz.net/'/> 
          <Card img = {image7}  title='CW Lanes & Games' city='Lincoln, RI'link ='http://www.cwtheaters.com'/>  
          <Card img = {image8}  title='Dream Machine' city='East Walpole, MA' link ='http://www.dreammachine.com/'/>  
          <Card img = {image9}  title='Platinum City Gaming' city='Taunton, MA' link ='https://platinumcitygaming.com/'/>  
          <Card img = {image10}  title='Forrests Family Fun Center' city='Taunton, MA' link ='https://www.forrestsfamilyfuncenter.com/'/>  

      </div>
    </div>
  )
}

export default App
