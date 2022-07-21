import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function NavCard(props) {
  return (
    <Link to={props.to}>
      <motion.div
        whileHover={props.active ? { scale: 1 } : { scale: 1.1 }}
        whileTap={props.active ? { scale: 1 } : { scale: 0.9 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`rounded-xl shadow-2xl w-full md:w-80 h-40 md:h-full bg-[#BCFFCE] bg-navcard bg-center bg-cover text-white font-bold text-5xl text-center flex justify-center items-center ${
          props.active ? ' ' : 'grayscale hover:grayscale-0'
        }`}>
        <h1>{props.title}</h1>
      </motion.div>
    </Link>
  );
}

export default NavCard;
