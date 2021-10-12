import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { HOME_URL } from 'exports/HOME_URL';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  your_message: string,
};
const Footer: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const [overScrollToTop, setOverScrollToTop] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 100 ? setOverScrollToTop(true) : setOverScrollToTop(false);
    }
  }, []);

  return (
    <footer>
      <p className={`fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50 cursor-pointer transition-all transform hover:opacity-70 ${overScrollToTop ? '' : 'translate-y-32'}`}
        onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })}
      ><img src={`${HOME_URL}/assets/totop.svg`} alt="totop" /></p>
      <div className="pt-12 pb-6">
        <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto block lg:grid grid-cols-4 gap-10">
          <div className="col-span-1 mb-8 lg:mb-0">
            <p className="max-w-120 lg:max-w-162 mx-auto mb-4 lg:mb-5"><Link to="/"><img src={`${HOME_URL}/assets/footer_logo.png`} alt="logo" /></Link></p>
            <ul className="flex justify-center gap-2 lg:gap-8">
              <li className="max-w-25 lg:max-w-none"><a href="/" target="_blank"><img src={`${HOME_URL}/assets/icon_telegram.svg`} alt="icon_telegram" /></a></li>
              <li className="max-w-25 lg:max-w-none"><a href="/" target="_blank"><img src={`${HOME_URL}/assets/icon_twitter.svg`} alt="icon_twitter" /></a></li>
            </ul>
          </div>
          <div className="col-span-1 mb-4 lg:mb-0">
            <p className="font-bold mb-0 lg:mb-3">CONTENT</p>
            <ul className="flex justify-between lg:block">
              <li className="opacity-50 leading-8 hover:opacity-100"><Link to="/">Support</Link></li>
              <li className="opacity-50 leading-8 hover:opacity-100"><Link to="/">FAQs</Link></li>
              <li className="opacity-50 leading-8 hover:opacity-100"><Link to="/">WhitePaper</Link></li>
              <li className="opacity-50 leading-8 hover:opacity-100"><Link to="/">Corgi NFT Gam</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className="font-bold mb-2 lg:mb-4">CONTACT US</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-3 lg:gap-12 mb-3 lg:mb-5">
                <input {...register("name")} className="bg-gray-50 outline-none rounded lg:rounded-xl px-3 lg:px-6 py-2 lg:py-3 w-full" placeholder="Name" />
                <input {...register("email")} className="bg-gray-50 outline-none rounded lg:rounded-xl px-3 lg:px-6 py-2 lg:py-3 w-full" placeholder="Email..." />
              </div>
              <div className="relative">
                <input {...register("your_message")} className="bg-gray-50 outline-none rounded lg:rounded-xl px-3 lg:px-6 py-4 lg:py-6 w-full" placeholder="Your Messager..." />
                <p className="absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-3">
                  <input type="submit" className="bg-yellow-0 outline-none rounded lg:rounded-xl px-6 lg:px-7 py-2 lg:py-3 font-bold uppercase cursor-pointer" value="Submit" />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-blue-0">
        <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto">
          <p className="opacity-50 text-12 text-center lg:text-left lg:text-14 pt-3 lg:pt-4 pb-2 lg:pb-3">Copyright &copy; 2021 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer