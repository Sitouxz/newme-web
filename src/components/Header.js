import { useState } from 'react';
import ProgressBar from './ProgressBar';
import Navigation from './Navigation';

function Header(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-between my-10 ">
      <div>
        <h1 className="font-bold text-xl text-[#061109] font-serif">Newme</h1>
      </div>
      <div
        className={`flex justify-center items-center w-60 md:w-96 font-bold ${
          props.progress ? '' : 'hidden'
        }`}>
        <span>2019</span>
        <ProgressBar bgcolor="#57BB72" progress="50" height={6} />
        <span>2022</span>
      </div>
      <button onClick={() => setToggle(true)}>
        <i className="fa-solid fa-bars text-xl"></i>
      </button>
      <Navigation toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default Header;
