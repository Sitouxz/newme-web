import { motion } from 'framer-motion';

function NavCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="rounded-xl grayscale hover:grayscale-0 shadow-2xl w-full md:w-60 h-60 md:h-[700px] bg-[#BCFFCE] bg-navcard bg-center bg-cover"></motion.div>
  );
}

export default NavCard;
