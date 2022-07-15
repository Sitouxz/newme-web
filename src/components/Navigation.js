import { motion } from 'framer-motion';
import NavCard from './NavCard';

function Navigation(props) {
  const { toggle, setToggle } = props;

  return (
    <motion.div
      transition={{ ease: 'easeOut', duration: 2 }}
      className={`z-20 transition-all duration-500 fixed top-0 left-0 h-full w-full bg-teal-900 ${
        toggle ? 'w-full' : 'w-0'
      }`}>
      <div
        className={`transition-all container mx-auto px-4 flex justify-between my-10 ${
          toggle ? 'opacity-100 duration-500 delay-500' : 'opacity-0'
        }`}>
        <div>
          <h1 className="font-bold text-xl text-white font-serif">Newme</h1>
        </div>
        <button onClick={() => setToggle(false)}>
          <i className="fa-solid fa-xmark text-3xl text-white"></i>
        </button>
      </div>
      <div
        className={`transition-all container mx-auto px-4 flex-col md:flex-row flex gap-5 justify-center my-10 ${
          toggle ? 'opacity-100 duration-500 delay-700' : 'opacity-0'
        }`}>
        <NavCard />
        <NavCard />
        <NavCard />
      </div>
    </motion.div>
  );
}

export default Navigation;
