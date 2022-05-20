import { useState } from 'react';
import logo from '../Assets/Images/social-media-influencer.png';
import Bottom from './Bottom';
import Header from './Header';
import { BsFillSunFill } from 'react-icons/bs';
import useDarkMode from '../../Hooks/useDarkMode';

function Login(): JSX.Element {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <section className=" pt-4 h-full overflow-hidden text-dark">
      <section className="font-Poppins pb-12 mx-4 md:mx-8 xl:mx-44 lg:flex lg:h-screen ">
        <div className="flex justify-between gap-4">
          <div className="font-semibold text-lg">Your Logo</div>
          <div>
            <BsFillSunFill
              className="text-2xl cursor-pointer"
              onClick={toggleDarkMode}
              color="#e9c46a"
            />
          </div>
        </div>

        <section className="lg:flex lg:flex-row lg:items-center mt-10 gap-10 flex-1 ">
          <Header type="Login" path="/Register" />
          <div className="flex-1">
            <div className="mb-11">
              <div className="text-3xl font-medium mb-7">Sign In</div>
              <div className="flex flex-col gap-9 mb-4">
                <input type="text" placeholder="Enter email or user name" className="input-form" />
                <input type="password" placeholder="password" className="input-form" />
              </div>
              <div className="text-sm text-gray-500 text-right">Forgor password ?</div>
            </div>
            <div className="flex align-middle justify-center bg-purple-300 shadow-lg shadow-purple-300/50 py-4 rounded-lg">
              <button className="text-white">Login</button>
            </div>
            <Bottom />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Login;
