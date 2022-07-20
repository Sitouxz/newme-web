import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavCard from './NavCard';

function Navigation(props) {
  const { toggle, setToggle } = props;
  const transition = {
    delay: 0.3,
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className={`z-20 transition-all duration-500 fixed top-0 right-0 h-screen w-screen bg-teal-900 ${
        toggle ? 'right-0 ' : 'right-full '
      }`}>
      <div
        className={`transition-all container mx-auto px-4 flex justify-between my-10 ${
          toggle ? 'opacity-100 duration-500 delay-500' : 'opacity-0'
        }`}>
        <div>
          <Link to="/" className="font-bold text-xl text-white font-serif">
            Newme
          </Link>
        </div>
        <button onClick={() => setToggle(false)}>
          <i className="fa-solid fa-xmark text-3xl text-white"></i>
        </button>
      </div>
      <div
        className={`h-screen transition-all container mx-auto px-4 pb-56 flex-col md:flex-row flex gap-5 justify-start md:justify-center my-10 ${
          toggle ? 'opacity-100 duration-500 delay-700' : 'opacity-0'
        }`}>
        <NavCard
          to="/"
          active={window.location.pathname === '/' ? true : false}
          title="Home"
        />
        <NavCard to="/news" />
        <NavCard
          to="/news"
          active={window.location.pathname === '/news' ? true : false}
          title="News"
        />
      </div>
    </motion.div>
  );
}

export default Navigation;
