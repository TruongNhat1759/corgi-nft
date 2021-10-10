import React, { useState } from 'react';
import { HOME_URL } from 'exports/HOME_URL';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import AnimationBanner from 'components/astoms/animations/AnimationBanner';
import AnimationEGG from 'components/astoms/animations/AnimationEGG';
import AnimationCharacter from 'components/astoms/animations/AnimationCharacter';
import AnimationCharacterSmall from 'components/astoms/animations/AnimationCharacterSmall';
import AnimationCharacterLarge from 'components/astoms/animations/AnimationCharacterLarge';
import AnimationDomDom from 'components/astoms/animations/AnimationDomDom';

const Home: React.FC = () => {
  const [character, setCharacter] = useState('corgi');
  const calc = (x: number, y:number) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x: number, y:number) => `translate(${x / 12}px,${y / 12}px)`;
  const trans2 = (x: number, y:number) => `translate(${x / 10}px,${y / 10}px)`;
  const trans3 = (x: number, y:number) => `translate(${x / 15}px,${y / 15}px)`;
  const trans4 = (x: number, y:number) => `translate(${x / 7}px,${y / 7}px)`;
  const trans5 = (x: number, y:number) => `translate(${x / 6}px,${y / 6}px)`;
  const trans6 = (x: number, y:number) => `translate(${x / 5.5}px,${y / 5.5}px)`;
  const trans7 = (x: number, y:number) => `translate(${x / 4.5}px,${y / 4.5}px)`;
  const trans8 = (x: number, y:number) => `translate(${x / 6}px,${y / 4}px)`;
  const trans9 = (x: number, y:number) => `translate(${x / 10}px,${y / 10}px)`;
  const [position, setPosition] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  // lg:h-100vw
  return (
    <>
      <section className="banner pt-30vw lg:pt-35vw relative lg:mb-36">
        {/* <div className="absolute w-full h-full bg-yellow-0 top-0 left-0"></div> */}
        <AnimationBanner link={`${HOME_URL}/assets/animations/banner/banner.json`} name="banner"></AnimationBanner>
        <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto pt-10 pb-12 lg:pb-32 w-full">
          <div className="relative mb-4">
            <p className="max-w-600 mx-auto lg:max-w-none"><img src={`${HOME_URL}/assets/main_logo.png`} alt="main_logo" className="mx-auto" /></p>
            <p className="absolute max-w-50 lg:max-w-none bottom-0 lg:bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"><img src={`${HOME_URL}/assets/icon_play.svg`} alt="icon_play" /></p>
          </div>
          <div className="play-app max-w-304 lg:max-w-894 w-full mx-auto mt-12 lg:mt-0 mb-8 lg:mb-10 bg-gray-100 backdrop-filter backdrop-blur-xl rounded-xl py-6 px-8 flex flex-col lg:flex-row justify-between items-center">
            <h5 className="mb-4 lg:mb-0 lg:pl-12 text-center lg:text-left"><span className="text-yellow-0 font-bold">AVAiLABLE</span><span className="text-20 lg:text-24 font-bold block leading-5 lg:leading-6">COMING SOON...</span></h5>
            <ul className="flex justify-between flex-col lg:flex-row items-center gap-6">
              <li className="shadow_icon_playgame"><a href="/"><img src={`${HOME_URL}/assets/airdrop/icon_playgame.svg`} alt="icon_playgame" /></a></li>
              <li><a href="/"><img src={`${HOME_URL}/assets/airdrop/icon_chplay.svg`} alt="icon_chplay" /></a></li>
              <li><a href="/"><img src={`${HOME_URL}/assets/airdrop/icon_appstore.svg`} alt="icon_appstore" /></a></li>
            </ul>
          </div>
          {/* <h2 className="font-bold text-30 lg:text-52 text-center text-shadow mb-4">Join airdrop now</h2>
          <p className="text-center text-gray-0 text-16 lg:text-20">Attend our Airdrop event to get valuable rewards. Invite your friends for more<br /> chances to be in Whitelisted private sale and get more reward in airdrop</p>
          <div className="max-w-304 mx-auto">
            <ul className="grid grid-cols-4 gap-4 my-4 lg:my-7">
              <li className="col-span-1 py-4 text-center bg-gray-50 rounded-lg leading-8"><h4 className="font-bold text-26 lg:text-34">2</h4><span className="block text-gray-0 text-12 lg:text-14 leading-4">Days</span></li>
              <li className="col-span-1 py-4 text-center bg-gray-50 rounded-lg leading-8"><h4 className="font-bold text-26 lg:text-34">20</h4><span className="block text-gray-0 text-12 lg:text-14 leading-4">Hours</span></li>
              <li className="col-span-1 py-4 text-center bg-gray-50 rounded-lg leading-8"><h4 className="font-bold text-26 lg:text-34">14</h4><span className="block text-gray-0 text-12 lg:text-14 leading-4">Minutes</span></li>
              <li className="col-span-1 py-4 text-center bg-gray-50 rounded-lg leading-8"><h4 className="font-bold text-26 lg:text-34">25</h4><span className="block text-gray-0 text-12 lg:text-14 leading-4">Seconds</span></li>
            </ul>
            <h6 className="bg-yellow-0 text-16 lg:text-20 font-bold rounded-lg py-2 text-center cursor-pointer">Join Now</h6>
          </div> */}
        </div>
      </section>
      <section className="character">
        <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto pt-8 lg:pt-10 pb-12 lg:pb-20 relative">
          <h2 className="font-bold text-30 lg:text-52 text-center mb-4 lg:mb-14 text-shadow">Character</h2>
          <div className="block lg:grid grid-cols-12 justify-between">
            <div className="col-span-6">
              <ul className="max-w-375 lg:max-w-none mx-auto">
                <li className={`${character === 'corgi' ? 'block' : 'hidden'}`}>
                  <div className="relative max-w-full mx-auto">
                    <img src={`${HOME_URL}/assets/character/character_big.png`} alt="CORGI" className="mx-auto" />
                    <AnimationDomDom link={`${HOME_URL}/assets/animations/domdom/domdom.json`} name="Domdom"></AnimationDomDom> 
                    <AnimationCharacter link={`${HOME_URL}/assets/animations/Corgi/corgi_anim.json`} name="Corgi"></AnimationCharacter> 
                  </div>
                </li>
                <li className={`${character === 'akita' ? 'block' : 'hidden'}`}>
                  <div className="relative max-w-full mx-auto">
                    <img src={`${HOME_URL}/assets/character/character_big.png`} alt="AKITA" className="mx-auto" />
                    <AnimationDomDom link={`${HOME_URL}/assets/animations/domdom/domdom.json`} name="Domdom"></AnimationDomDom> 
                    <AnimationCharacterSmall link={`${HOME_URL}/assets/animations/Cat/Cat.json`} name="AKITA"></AnimationCharacterSmall>  
                  </div>
                </li>
                <li className={`${character === 'dodo' ? 'block' : 'hidden'}`}>
                  <div className="relative max-w-full mx-auto">
                    <img src={`${HOME_URL}/assets/character/character_big.png`} alt="DODO" className="mx-auto" />
                    <AnimationDomDom link={`${HOME_URL}/assets/animations/domdom/domdom.json`} name="Domdom"></AnimationDomDom> 
                    <AnimationCharacterLarge link={`${HOME_URL}/assets/animations/Shark/Shark.json`} name="Shark"></AnimationCharacterLarge>  
                  </div>
                </li>
                <li className={`${character === 'eaglato' ? 'block' : 'hidden'}`}>
                  <div className="relative max-w-full mx-auto">
                    <img src={`${HOME_URL}/assets/character/character_big.png`} alt="EAGLATO" className="mx-auto" />
                    <AnimationDomDom link={`${HOME_URL}/assets/animations/domdom/domdom.json`} name="Domdom"></AnimationDomDom> 
                    <AnimationCharacterLarge link={`${HOME_URL}/assets/animations/Bird/Bird.json`} name="Shark"></AnimationCharacterLarge>  
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-6 max-w-375 lg:max-w-583 mx-auto lg:mx-0">
              <ul className="grid grid-cols-4 gap-4 lg:gap-9">
                <li className="max-w-100 lg:max-w-116 text-center col-span-1 text-16 cursor-pointer lg:text-20 font-bold" onClick={(event) => setCharacter('corgi')} >
                  <p className={`rounded-full ${character === 'corgi' ? 'bg-blue-100' : ''}`}><img src={`${HOME_URL}/assets/character/character_small_01.png`} alt="CORGI" /></p>
                  <h6 className={`mt-2 ${character === 'corgi' ? 'text-yellow-0' : ''}`}>CORGI</h6>
                </li>
                <li className="max-w-100 lg:max-w-116 text-center col-span-1 text-16 cursor-pointer lg:text-20 font-bold" onClick={(event) => setCharacter('akita')} >
                  <p className={`rounded-full ${character === 'akita' ? 'bg-blue-100' : ''}`}><img src={`${HOME_URL}/assets/character/character_small_02.png`} alt="AKITA" /></p>
                  <h6 className={`mt-2 ${character === 'akita' ? 'text-yellow-0' : ''}`}>AKITA</h6>
                </li>
                <li className="max-w-100 lg:max-w-116 text-center col-span-1 text-16 cursor-pointer lg:text-20 font-bold lg:pt-8" onClick={(event) => setCharacter('dodo')} >
                  <p className={`rounded-full ${character === 'dodo' ? 'bg-blue-100' : ''}`}><img src={`${HOME_URL}/assets/character/character_small_03.png`} alt="DODO" /></p>
                  <h6 className={`mt-2 ${character === 'dodo' ? 'text-yellow-0' : ''}`}>DODO</h6>
                </li>
                <li className="max-w-100 lg:max-w-116 text-center col-span-1 text-16 cursor-pointer lg:text-20 font-bold lg:pt-24" onClick={(event) => setCharacter('eaglato')} >
                  <p className={`rounded-full ${character === 'eaglato' ? 'bg-blue-100' : ''}`}><img src={`${HOME_URL}/assets/character/character_small_04.png`} alt="EAGLATO" /></p>
                  <h6 className={`mt-2 ${character === 'eaglato' ? 'text-yellow-0' : ''}`}>EAGLATO</h6>
                </li>
              </ul>
              <div className={`${character === 'corgi' ? 'block' : 'hidden'}`}>
                <h3 className="text-26 lg:text-48 font-bold mt-4 mb-4 lg:-mt-14 lg:mb-10">Corgi</h3>
                <div className="flex items-center mb-4 lg:mb-10">
                  <div className="pr-4 lg:pr-8">
                    <img src={`${HOME_URL}/assets/character/earth.png`} alt="Earth" className="max-w-35 lg:max-w-none mx-auto" />
                    <h6 className="text-16 lg:text-20 font-bold mt-2 text-center">Earth</h6>
                  </div>
                  <p className="h-14 lg:h-16 bg-white w-px"></p>
                  <ul className="pl-4 lg:pl-8">
                    <li className="flex items-center">
                      <img src={`${HOME_URL}/assets/character/character_corgi_icon01.svg`} alt="Power of earth" className="max-w-25 lg:max-w-32" />
                      <h6 className="text-16 lg:text-20 font-bold ml-2 lg:ml-4">Power of earth</h6>
                    </li>
                    <li className="flex items-center mt-2 lg:mt-3">
                      <img src={`${HOME_URL}/assets/character/character_corgi_icon02.svg`} alt="Fury attack" className="max-w-25 lg:max-w-32" />
                      <h6 className="text-16 lg:text-20 font-bold ml-2 lg:ml-4">Fury attack</h6>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-0">Corgi is humans best life companions. One day, he accidentally picked up a sparkling stone on the farm which caused him an unusual transformation. He was suddenly conscious and able to talk. The power of the Earth Stone also helped him master Earth-type skill sets</p>
              </div>

              <div className={`${character === 'akita' ? 'block' : 'hidden'}`}>
                <h3 className="text-26 lg:text-48 font-bold mt-4 mb-4 lg:-mt-14 lg:mb-10">Akita</h3>
                <div className="flex items-center mb-4 lg:mb-10">
                  <div className="pr-4 lg:pr-8">
                    <img src={`${HOME_URL}/assets/character/fire.png`} alt="Fire" className="max-w-35 lg:max-w-none mx-auto" />
                    <h6 className="text-16 lg:text-20 font-bold mt-2 text-center">Fire</h6>
                  </div>
                  <p className="h-14 lg:h-16 bg-white w-px"></p>
                  <ul className="pl-4 lg:pl-8">
                    <li className="flex items-center">
                      <img src={`${HOME_URL}/assets/character/character_akita_icon01.svg`} alt="ATTACH UP" className="max-w-25 lg:max-w-32" />
                      <h6 className="text-16 lg:text-20 font-bold ml-2 lg:ml-4">ATTACH UP</h6>
                    </li>
                    <li className="flex items-center mt-2 lg:mt-3">
                      <img src={`${HOME_URL}/assets/character/character_akita_icon02.svg`} alt="STUN ARROW" className="max-w-25 lg:max-w-32" />
                      <h6 className="text-16 lg:text-20 font-bold ml-2 lg:ml-4">STUN ARROW</h6>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-0">Akita Cat - Akita loves shiny things. He found a red stone on a tree branch which inadvertently granted his fire elemental powers and proficiency in Fire-type skill sets</p>
              </div>

              <div className={`${character === 'dodo' ? 'block' : 'hidden'}`}>
                <h3 className="text-26 lg:text-48 font-bold mt-4 mb-4 lg:-mt-14 lg:mb-10">Dodo</h3>
                <div className="flex items-center mb-4 lg:mb-10">
                  <div className="pr-4 lg:pr-8">
                    <img src={`${HOME_URL}/assets/character/water.png`} alt="Dodo" className="max-w-35 lg:max-w-none mx-auto" />
                    <h6 className="text-16 lg:text-20 font-bold mt-2 text-center">Water</h6>
                  </div>
                  <p className="h-14 lg:h-16 bg-white w-px"></p>
                  <ul className="pl-4 lg:pl-8">
                    <li className="flex items-center">
                      <img src={`${HOME_URL}/assets/character/character_shark_icon01.svg`} alt="Defend up" className="max-w-25 lg:max-w-32" />
                      <h6 className="text-16 lg:text-20 font-bold ml-2 lg:ml-4">Defend up</h6>
                    </li>
                    <li className="flex items-center mt-2 lg:mt-3">
                      <img src={`${HOME_URL}/assets/character/character_shark_icon02.svg`} alt="Freeze ice" className="max-w-25 lg:max-w-32" />
                      <h6 className="text-16 lg:text-20 font-bold ml-2 lg:ml-4">Freeze ice</h6>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-0">Dodo Shark - The water stone falling into the deep ocean had frightened all the sea creatures. DoDo, on the other hand, was very curious about the stone. With little suspicions, he ate it, then an unusual change occurred. The lower fins turned into legs allowing him to move. Also, Dodo acquired for himself Water-type skill sets</p>
              </div>

              <div className={`${character === 'eaglato' ? 'block' : 'hidden'}`}>
                <h3 className="text-26 lg:text-48 font-bold mt-4 mb-4 lg:-mt-14 lg:mb-10">Eaglato</h3>
                <div className="flex items-center mb-4 lg:mb-10">
                  <div className="pr-4 lg:pr-8">
                    <img src={`${HOME_URL}/assets/character/wind.png`} alt="Eaglato" className="max-w-35 lg:max-w-none mx-auto" />
                    <h6 className="text-16 lg:text-20 font-bold mt-2 text-center">Air</h6>
                  </div>
                  <p className="h-14 lg:h-16 bg-white w-px"></p>
                  <ul className="pl-4 lg:pl-8">
                    <li className="flex items-center">
                      <img src={`${HOME_URL}/assets/character/character_bird_icon01.svg`} alt="Bless of wind" className="max-w-25 lg:max-w-32" />
                      <h6 className="text-16 lg:text-20 font-bold ml-2 lg:ml-4">Bless of wind</h6>
                    </li>
                    <li className="flex items-center mt-2 lg:mt-3">
                      <img src={`${HOME_URL}/assets/character/character_bird_icon02.svg`} alt="Lighting chain" className="max-w-25 lg:max-w-32" />
                      <h6 className="text-16 lg:text-20 font-bold ml-2 lg:ml-4">Lighting chain</h6>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-0">Eaglato Eagle - Once flying over the highest mountain in LaBian, Eaglato took a white-light stone which caught his eyes, then swallowed it without hesitation. Suddenly, he became conscious and was equipped with Wind-type skill sets. The Eaglato even dreamt of the destruction of humanity by the Evil lord Lothor.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      <section className="feature">
        <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto pt-8 lg:pt-10">
          <h2 className="font-bold text-30 lg:text-52 text-center mb-4 lg:mb-14 text-shadow">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pb-12 lg:pb-20">
            <div className="feature-item col-span-1">
              <p><img src={`${HOME_URL}/assets/feature/feature_img01.png`} alt="ADVENTURE AND PVP MODE" className="w-full" /></p>
              <div className="px-6 lg:px-8 pt-0 pb-6 lg:pb-8">
                <h5 className="text-20 lg:text-24 mb-2 lg:mb-4 font-bold">ADVENTURE AND PVP MODE</h5>
                <p className="text-gray-0">Players can choose the adventure mode according to the available story, fight against the machine or randomly fight with other players and earn bonus token SPET</p>
              </div>
            </div>
            <div className="feature-item col-span-1">
              <p><img src={`${HOME_URL}/assets/feature/feature_img02.png`} alt="ADVENTURE AND PVP MODE" className="w-full" /></p>
              <div className="px-6 lg:px-8 pt-0 pb-6 lg:pb-8">
                <h5 className="text-20 lg:text-24 mb-2 lg:mb-4 font-bold">ADVENTURE AND PVP MODE</h5>
                <p className="text-gray-0">Players can choose the adventure mode according to the available story, fight against the machine or randomly fight with other players and earn bonus token SPET</p>
              </div>
            </div>
            <div className="feature-item col-span-1">
              <p><img src={`${HOME_URL}/assets/feature/feature_img03.png`} alt="ADVENTURE AND PVP MODE" className="w-full" /></p>
              <div className="px-6 lg:px-8 pt-0 pb-6 lg:pb-8">
                <h5 className="text-20 lg:text-24 mb-2 lg:mb-4 font-bold">ADVENTURE AND PVP MODE</h5>
                <p className="text-gray-0">Players can choose the adventure mode according to the available story, fight against the machine or randomly fight with other players and earn bonus token SPET</p>
              </div>
            </div>
            <div className="feature-item col-span-1">
              <p><img src={`${HOME_URL}/assets/feature/feature_img04.png`} alt="ADVENTURE AND PVP MODE" className="w-full" /></p>
              <div className="px-6 lg:px-8 pt-0 pb-6 lg:pb-8">
                <h5 className="text-20 lg:text-24 mb-2 lg:mb-4 font-bold">ADVENTURE AND PVP MODE</h5>
                <p className="text-gray-0">Players can choose the adventure mode according to the available story, fight against the machine or randomly fight with other players and earn bonus token SPET</p>
              </div>
            </div>
            <div className="feature-item col-span-1">
              <p><img src={`${HOME_URL}/assets/feature/feature_img05.png`} alt="ADVENTURE AND PVP MODE" className="w-full" /></p>
              <div className="px-6 lg:px-8 pt-0 pb-6 lg:pb-8">
                <h5 className="text-20 lg:text-24 mb-2 lg:mb-4 font-bold">ADVENTURE AND PVP MODE</h5>
                <p className="text-gray-0">Players can choose the adventure mode according to the available story, fight against the machine or randomly fight with other players and earn bonus token SPET</p>
              </div>
            </div>
            <div className="feature-item col-span-1">
              <p><img src={`${HOME_URL}/assets/feature/feature_img06.png`} alt="ADVENTURE AND PVP MODE" className="w-full" /></p>
              <div className="px-6 lg:px-8 pt-0 pb-6 lg:pb-8">
                <h5 className="text-20 lg:text-24 mb-2 lg:mb-4 font-bold">ADVENTURE AND PVP MODE</h5>
                <p className="text-gray-0">Players can choose the adventure mode according to the available story, fight against the machine or randomly fight with other players and earn bonus token SPET</p>
              </div>
            </div>
          </div>
          <p className="h-px lg:h-0.5 bg-linear-gradient"></p>
        </div>
      </section>

      <section className="tokennomics">
        <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto pt-8 lg:pt-10">
          <h2 className="font-bold text-30 lg:text-52 text-center mb-4 lg:mb-14 text-shadow">Tokennomics</h2>
          <div className="max-w-375 mx-auto lg:max-w-none grid grid-cols-2 lg:grid-cols-4 gap-10 pb-12 lg:pb-16 items-center">
            <ul className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-6 lg:gap-x-8 lg:gap-y-10 tokennomics-des order-2 lg:order-1">
              <li className="col-span-1 leading-4 relative pl-5"><span className="circle absolute top-1.5 left-0 w-3 h-3 inline-block rounded-full"></span><span className="font-bold text-20 block leading-6 opacity-70">Ecosystem</span><span className="text-14 block opacity-70">24%</span><span className="text-12 block opacity-40">(25,000,000 token)</span></li>
              <li className="col-span-1 leading-4 relative pl-5"><span className="circle absolute top-1.5 left-0 w-3 h-3 inline-block rounded-full"></span><span className="font-bold text-20 block leading-6 opacity-70">Farming</span><span className="text-14 block opacity-70">22%</span><span className="text-12 block opacity-40">(25,000,000 token)</span></li>
              <li className="col-span-1 leading-4 relative pl-5"><span className="circle absolute top-1.5 left-0 w-3 h-3 inline-block rounded-full"></span><span className="font-bold text-20 block leading-6 opacity-70">Team</span><span className="text-14 block opacity-70">16%</span><span className="text-12 block opacity-40">(25,000,000 token)</span></li>
              <li className="col-span-1 leading-4 relative pl-5"><span className="circle absolute top-1.5 left-0 w-3 h-3 inline-block rounded-full"></span><span className="font-bold text-20 block leading-6 opacity-70">Presale</span><span className="text-14 block opacity-70">10%</span><span className="text-12 block opacity-40">(25,000,000 token)</span></li>
              <li className="col-span-1 leading-4 relative pl-5"><span className="circle absolute top-1.5 left-0 w-3 h-3 inline-block rounded-full"></span><span className="font-bold text-20 block leading-6 opacity-70">Partners</span><span className="text-14 block opacity-70">10%</span><span className="text-12 block opacity-40">(25,000,000 token)</span></li>
              <li className="col-span-1 leading-4 relative pl-5"><span className="circle absolute top-1.5 left-0 w-3 h-3 inline-block rounded-full"></span><span className="font-bold text-20 block leading-6 opacity-70">Liquidity</span><span className="text-14 block opacity-70">8%</span><span className="text-12 block opacity-40">(25,000,000 token)</span></li>
              <li className="col-span-1 leading-4 relative pl-5"><span className="circle absolute top-1.5 left-0 w-3 h-3 inline-block rounded-full"></span><span className="font-bold text-20 block leading-6 opacity-70">Prevate Sale</span><span className="text-14 opacity-70 block">5%</span><span className="text-12 block opacity-40">(25,000,000 token)</span></li>
              <li className="col-span-1 leading-4 relative pl-5"><span className="circle absolute top-1.5 left-0 w-3 h-3 inline-block rounded-full"></span><span className="font-bold text-20 block leading-6 opacity-70">Seed Sale</span><span className="text-14 opacity-70 block">4%</span><span className="text-12 block opacity-40">(25,000,000 token)</span></li>
              <li className="col-span-1 leading-4 relative pl-5"><span className="circle absolute top-1.5 left-0 w-3 h-3 inline-block rounded-full"></span><span className="font-bold text-20 block leading-6 opacity-70">Airdrop</span><span className="text-14 block opacity-70">1%</span><span className="text-12 block opacity-40">(25,000,000 token)</span></li>
            </ul>
            <ul className="tokennomics-bounce col-span-2 relative h-330 lg:h-582 order-1 lg:order-2 z-10" onMouseMove={({ clientX: x, clientY: y }) => setPosition({ xy: calc(x, y) })}>
              <animated.li style={{ transform: position.xy.interpolate(trans1) }} className="absolute"><img src={`${HOME_URL}/assets/tokennomics/airdrop.png`} alt="airdrop" /></animated.li>
              <animated.li style={{ transform: position.xy.interpolate(trans2) }} className="absolute"><img src={`${HOME_URL}/assets/tokennomics/team.png`} alt="team" /></animated.li>
              <animated.li style={{ transform: position.xy.interpolate(trans3) }} className="absolute"><img src={`${HOME_URL}/assets/tokennomics/seed_sale.png`} alt="seed_sale" /></animated.li>
              <animated.li style={{ transform: position.xy.interpolate(trans4) }} className="absolute"><img src={`${HOME_URL}/assets/tokennomics/presale.png`} alt="presale" /></animated.li>
              <animated.li style={{ transform: position.xy.interpolate(trans5) }} className="absolute"><img src={`${HOME_URL}/assets/tokennomics/liquidity.png`} alt="liquidity" /></animated.li>
              <animated.li style={{ transform: position.xy.interpolate(trans6) }} className="absolute"><img src={`${HOME_URL}/assets/tokennomics/prevate_sale.png`} alt="prevate_sale" /></animated.li>
              <animated.li style={{ transform: position.xy.interpolate(trans7) }} className="absolute"><img src={`${HOME_URL}/assets/tokennomics/partners.png`} alt="partners" /></animated.li>
              <animated.li style={{ transform: position.xy.interpolate(trans8) }} className="absolute"><img src={`${HOME_URL}/assets/tokennomics/farming.png`} alt="farming" /></animated.li>
              <animated.li style={{ transform: position.xy.interpolate(trans9) }} className="absolute"><img src={`${HOME_URL}/assets/tokennomics/fund.png`} alt="fund" /></animated.li>
            </ul>
            <ul className="col-span-2 lg:col-span-1 order-3">
              <li className="font-bold px-6 lg:px-8 rounded-xl pt-4 pb-3 lg:text-20 text-16 mb-5 bg-gray-50 backdrop-filter backdrop-blur-3xl"><span className="text-12 block text-gray-150 font-normal">TOKEN NAME</span>COR</li>
              <li className="font-bold px-6 lg:px-8 rounded-xl pt-4 pb-3 lg:text-20 text-16 mb-5 bg-gray-50 backdrop-filter backdrop-blur-3xl"><span className="text-12 block text-gray-150 font-normal">PLATFORM</span>Binance Smart Chain</li>
              <li className="font-bold px-6 lg:px-8 rounded-xl pt-5 pb-3 lg:text-34 text-30 bg-yellow-0"><span className="text-12 block font-normal leading-4">TOTAL SUPPLY</span>100,000,000</li>
            </ul>
          </div>
          <p className="h-px lg:h-0.5 bg-linear-gradient"></p>
        </div>
      </section>
      <section className="roadmap">
        <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto pt-8 lg:py-10 pb-12">
          <h2 className="font-bold text-30 lg:text-52 text-center mb-4 lg:mb-4vw xl:mb-9.5vw text-shadow">Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="col-span-1">
              <div className="relative max-w-full mx-auto">
                <p><img src={`${HOME_URL}/assets/roadmap/roadmap_egg.png`} alt="egg" className="max-w-200 lg:max-w-none mx-auto" /></p>
                <AnimationEGG link={`${HOME_URL}/assets/animations/Fire/Fire.json`} name="Egg"></AnimationEGG>
              </div>
              <h5 className="text-20 lg:text-24 font-bold text-center">PHASE 1: Q3/2021</h5>
              <p className="h-px lg:h-0.5 bg-linear-gradient mt-4 mb-6"/>
              <ul className="mb-5 px-4">
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">Website and social release (20/9)</span></li>
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">Airdrop (20/9-29/9)</span></li>
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">Private Sale (30/9-3/10)</span></li>
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">Presale (5/10-9/10)</span></li>
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">Open liquidity pool on pancake (From 10/10)</span></li>
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">Farming by LP (COR/BNB; COR/BUSD) (From 15/10)</span></li>
              </ul>
            </div>
            <div className="col-span-1">
              <div className="relative max-w-full mx-auto">
                <p><img src={`${HOME_URL}/assets/roadmap/roadmap_egg.png`} alt="egg" className="max-w-200 lg:max-w-none mx-auto" /></p>
                <AnimationEGG link={`${HOME_URL}/assets/animations/water/water.json`} name="Egg"></AnimationEGG>
              </div>
              <h5 className="text-20 lg:text-24 font-bold text-center">PHASE 2: Q4/2021</h5>
              <p className="h-px lg:h-0.5 bg-linear-gradient mt-4 mb-6"/>
              <ul className="mb-5 px-4">
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">Audited by Certik</span></li>
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">Listing Events</span></li>
              </ul>
              <ul className="px-4">
                <li className="leading-6 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Listing on cex: MXC, GATE, HOUBI, HOTBIT</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">List on Coingecko</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">List on Coinmarketcap</span></li>
              </ul>
              <ul className="mb-5 px-4">
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">NFT Market</span></li>
              </ul>
              <ul className="px-4">
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Buy &amp; Sell normal</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Auction system</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">List on Coinmarketcap</span></li>
              </ul>
              <ul className="mb-5 px-4">
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">NFT boosted farming</span></li>
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">CorgiNFTGame Stage 1</span></li>
              </ul>
              <ul className="px-4">
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Testnet Launching &amp; Bug Bount</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Mainnet Launching</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">PVP Mode</span></li>
              </ul>
            </div>
            <div className="col-span-1">
              <div className="relative max-w-full mx-auto">
                <p><img src={`${HOME_URL}/assets/roadmap/roadmap_egg.png`} alt="egg" className="max-w-200 lg:max-w-none mx-auto" /></p>
                <AnimationEGG link={`${HOME_URL}/assets/animations/Rock/Rock.json`} name="Egg"></AnimationEGG>
              </div>
              <h5 className="text-20 lg:text-24 font-bold text-center">PHASE 3: Q1/2022</h5>
              <p className="h-px lg:h-0.5 bg-linear-gradient mt-4 mb-6"/>
              <ul className="mb-5 px-4">
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">CorgiNFTGame Stage 2</span></li>
              </ul>
              <ul className="px-4">
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Season and Event</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Adventure Mode</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">New NFT assets system</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Building system</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Land system</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Pet skill system</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">New pets and Characters</span></li>
              </ul>
            </div>
            <div className="col-span-1">
              <div className="relative max-w-full mx-auto">
                <p><img src={`${HOME_URL}/assets/roadmap/roadmap_egg.png`} alt="egg" className="max-w-200 lg:max-w-none mx-auto" /></p>
                <AnimationEGG link={`${HOME_URL}/assets/animations/Air/Air.json`} name="Egg"></AnimationEGG>
              </div>
              <h5 className="text-20 lg:text-24 font-bold text-center">PHASE 4: Q2/2022</h5>
              <p className="h-px lg:h-0.5 bg-linear-gradient mt-4 mb-6"/>
              <ul className="mb-5 px-4">
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">Listing Event</span></li>
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">CorgiNFTGame Stage 3</span></li>
              </ul>
              <ul className="px-4">
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">New maps, bosses</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Clan mode</span></li>
                <li className="leading-4 pl-8 lg:pl-10 triangle mb-4"><span className="opacity-40">Tournament mode</span></li>
              </ul>
              <ul className="mb-5 px-4">
                <li className="leading-6 pl-8 lg:pl-10 circle mb-4"><span className="opacity-80">CorGame ecosystem</span></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="h-px lg:h-0.5 bg-linear-gradient"></p>
      </section>
      <section className="partners">
        <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto pt-8 lg:pt-10">
          <h2 className="font-bold text-30 lg:text-52 text-center mb-4 lg:mb-14 text-shadow">Partners</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-10 pb-12 lg:pb-20">
            <li className="col-span-1"><Link to="/" target="_blank"><img src={`${HOME_URL}/assets/partners/banner_01.png`} alt="banner 01" className="w-full" /></Link></li>
            <li className="col-span-1"><Link to="/" target="_blank"><img src={`${HOME_URL}/assets/partners/banner_02.png`} alt="banner 02" className="w-full" /></Link></li>
            <li className="col-span-1"><Link to="/" target="_blank"><img src={`${HOME_URL}/assets/partners/banner_03.png`} alt="banner 03" className="w-full" /></Link></li>
            <li className="col-span-1"><Link to="/" target="_blank"><img src={`${HOME_URL}/assets/partners/banner_04.png`} alt="banner 04" className="w-full" /></Link></li>
          </ul>
          <p className="h-px lg:h-0.5 bg-linear-gradient"></p>
        </div>
      </section>
    </>
  )
}

export default Home