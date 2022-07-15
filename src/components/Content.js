import contentImg from '../assets/img/content.png';
import { motion } from 'framer-motion';

function Content() {
  return (
    <div className="flex justify-center items-center my-20 sm:my-0">
      <motion.img
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        src={contentImg}
        alt="Content"
        className="z-10"
      />
    </div>
  );
}

export default Content;
