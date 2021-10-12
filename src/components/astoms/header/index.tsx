import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HOME_URL } from 'exports/HOME_URL';
const Header: React.FC = () => {
  const history = useHistory();
  const [pathName, setPathName] = useState(history.location.pathname);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="top-0 left-0 fixed z-50 w-full bg-blue-0 lg:backdrop-filter lg:backdrop-blur-md">
      <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto flex justify-between items-center lg:py-4">
        <p className="block lg:hidden max-w-100 xl:max-w-194"><Link to="/"><img src={`${HOME_URL}/assets/logo.png`} alt="logo" /></Link></p>
          <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Home</Link></li>
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/airdrop/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Airdrop</Link></li>
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/cor-farmer/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Cor Farmer</Link></li>
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/nft-market/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">NFT Market</Link></li>
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/whitepaper/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Whitepaper</Link></li>
          </ul>
          <div className="items-center gap-8 xl:gap-12 hidden lg:flex">
            <ul className="flex items-center gap-8 xl:gap-12">
              <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/faqs/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">FAQS</Link></li>
              <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/community/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Community</Link></li>
              <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/cor-team/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Cor Team</Link></li>
            </ul>
            <p className="bg-yellow-0 font-bold px-5 py-3 rounded-lg cursor-pointer">Connect Wallet</p>
            <ul className="block">
              <li><img src={`${HOME_URL}/assets/lang_us.svg`} alt="lang_us" /></li>
            </ul>
          </div>
          <p className='bg-yellow-0 lg:hidden flex flex-col px-2 py-3 rounded cursor-pointer' onClick={() => setToggleMenu(!toggleMenu)}>
            <span className={`bg-white h-px w-8 block transition-all ${toggleMenu ? 'transform origin-center rotate-45 relative top-8px' : ''}`}></span>
            <span className={`bg-white h-px w-8 block transition-all my-2 ${toggleMenu ? 'transform translate-x-8 opacity-0' : ''}`}></span>
            <span className={`bg-white h-px w-8 block transition-all ${toggleMenu ? 'transform origin-center -rotate-45 relative bottom-8px' : ''}`}></span>
          </p>
          <div className={`block lg:hidden menu-toggle bg-blue-0 p-3/100 pt-8 overflow-y-auto ${toggleMenu ? 'active' : ''}`}>
            <ul>
              <li className={`font-bold leading-4 uppercase text-center text-16 mb-10 ${pathName === '/' ? 'text-yellow-0' : ''}`}><Link to="/" className='block'>Home</Link></li>
              <li className={`font-bold leading-4 uppercase text-center text-16 mb-10 ${pathName === '/airdrop/' ? 'text-yellow-0' : ''}`}><Link to="/" className='block'>Airdrop</Link></li>
              <li className={`font-bold leading-4 uppercase text-center text-16 mb-10 ${pathName === '/cor-farmer/' ? 'text-yellow-0' : ''}`}><Link to="/" className='block'>Cor Farmer</Link></li>
              <li className={`font-bold leading-4 uppercase text-center text-16 mb-10 ${pathName === '/nft-market/' ? 'text-yellow-0' : ''}`}><Link to="/" className='block'>NFT Market</Link></li>
              <li className={`font-bold leading-4 uppercase text-center text-16 mb-10 ${pathName === '/whitepaper/' ? 'text-yellow-0' : ''}`}><Link to="/" className='block'>Whitepaper</Link></li>
              <li className={`font-bold leading-4 uppercase text-center text-16 mb-10 ${pathName === '/faqs/' ? 'text-yellow-0' : ''}`}><Link to="/" className='block'>FAQS</Link></li>
              <li className={`font-bold leading-4 uppercase text-center text-16 mb-10 ${pathName === '/community/' ? 'text-yellow-0' : ''}`}><Link to="/" className='block'>Community</Link></li>
              <li className={`font-bold leading-4 uppercase text-center text-16 mb-10 ${pathName === '/cor-team/' ? 'text-yellow-0' : ''}`}><Link to="/" className='block'>Cor Team</Link></li>
            </ul>
            <p className="bg-yellow-0 font-bold px-4 py-1.5 rounded-lg cursor-pointer w-max mx-auto">Connect Wallet</p>
          </div>
      </div>
      <p className="hidden lg:block absolute top-8 xl:top-0 left-1/2 transform -translate-x-1/2 max-w-120 xl:max-w-194"><Link to="/"><img src={`${HOME_URL}/assets/logo.png`} alt="logo" /></Link></p>
    </header>
  )
}

export default Header