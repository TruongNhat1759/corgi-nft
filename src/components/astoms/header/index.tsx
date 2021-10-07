import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import { HOME_URL } from 'exports/HOME_URL';
const Header: React.FC = () => {
  const [pathName, setPathName] = useState('');
  const history = useHistory();
  const [offset, setOffset] = useState(false);
  useEffect(() => {
    setPathName(history.location.pathname);
    window.onscroll = () => {
      if(window.pageYOffset > 100) {
        setOffset(true);
      } else {
        setOffset(false)
      }
    }
  }, [])
  return (
    <header className="hidden lg:block fixed z-50 w-full bg-blue-50 backdrop-filter backdrop-blur-md">
      <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto flex justify-between items-center py-4">
        <p className="block lg:hidden max-w-100 xl:max-w-194"><Link to="/"><img src={`${HOME_URL}/assets/logo.png`} alt="logo" /></Link></p>
          <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Home</Link></li>
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/airdrop/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Airdrop</Link></li>
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/cor-farmer/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Cor Farmer</Link></li>
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/nft-market/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">NFT Market</Link></li>
            <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/whitepaper/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Whitepaper</Link></li>
          </ul>
          <div className="flex items-center gap-8 xl:gap-12">
            <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
              <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/faqs/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">FAQS</Link></li>
              <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/community/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Community</Link></li>
              <li className={`font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 ${pathName === '/cor-team/' ? 'text-yellow-0 border-yellow-0' : 'border-transparent'}`}><Link to="/">Cor Team</Link></li>
            </ul>
            <p className="bg-yellow-0 font-bold px-5 py-3 rounded-lg cursor-pointer">Connect Wallet</p>
            <ul className="hidden lg:block">
              <li><img src={`${HOME_URL}/assets/lang_us.svg`} alt="lang_us" /></li>
            </ul>
          </div>
      </div>
      <p className="hidden lg:block absolute top-8 xl:top-0 left-1/2 transform -translate-x-1/2 max-w-120 xl:max-w-194"><Link to="/"><img src={`${HOME_URL}/assets/logo.png`} alt="logo" /></Link></p>
    </header>
  )
}

export default Header