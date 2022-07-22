import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import NavCard from './NavCard';

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
        {/* <NavCard
          to="/"
          imglink="home"
          active={window.location.pathname === '/' ? true : false}
          title="Home"
        />
        <NavCard
          to="/covidcount"
          imglink="covidcount"
          active={window.location.pathname === '/covidcount' ? true : false}
          title="Covid Live Count"
        />
        <NavCard
          to="/news"
          imglink="news"
          active={window.location.pathname === '/news' ? true : false}
          title="News"
        /> */}
        <Link to="/">
          <motion.div
            whileHover={
              window.location.pathname === '/covidcount'
                ? { scale: 1 }
                : { scale: 1.1 }
            }
            whileTap={
              window.location.pathname === '/covidcount'
                ? { scale: 1 }
                : { scale: 0.9 }
            }
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`rounded-xl shadow-2xl w-full md:w-80 h-40 md:h-full bg-center bg-cover bg-home text-white font-bold text-5xl text-center flex justify-center items-center ${
              window.location.pathname === '/'
                ? ' '
                : 'grayscale hover:grayscale-0'
            }`}>
            <h1>Home</h1>
          </motion.div>
        </Link>
        <Link to="/covidcount">
          <motion.div
            whileHover={
              window.location.pathname === '/covidcount'
                ? { scale: 1 }
                : { scale: 1.1 }
            }
            whileTap={
              window.location.pathname === '/covidcount'
                ? { scale: 1 }
                : { scale: 0.9 }
            }
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`rounded-xl shadow-2xl w-full md:w-80 h-40 md:h-full bg-center bg-cover bg-covidcount text-white font-bold text-5xl text-center flex justify-center items-center ${
              window.location.pathname === '/covidcount'
                ? ' '
                : 'grayscale hover:grayscale-0'
            }`}>
            <h1>Covid Count</h1>
          </motion.div>
        </Link>
        <Link to="/news">
          <motion.div
            whileHover={
              window.location.pathname === '/covidcount'
                ? { scale: 1 }
                : { scale: 1.1 }
            }
            whileTap={
              window.location.pathname === '/covidcount'
                ? { scale: 1 }
                : { scale: 0.9 }
            }
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`rounded-xl shadow-2xl w-full md:w-80 h-40 md:h-full bg-center bg-cover bg-news text-white font-bold text-5xl text-center flex justify-center items-center ${
              window.location.pathname === '/news'
                ? ' '
                : 'grayscale hover:grayscale-0'
            }`}>
            <h1>News</h1>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

export default Navigation;
