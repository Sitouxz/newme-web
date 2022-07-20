import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import { useEffect, useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import {
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
} from 'framer-motion';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const transition = {
    delay: 0.3,
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  // Fetch news from https://dekontaminasi.com/api/id/covid19/news and set it to state
  useEffect(() => {
    fetch(
      'https://api.allorigins.win/get?url=https://dekontaminasi.com/api/id/covid19/news'
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(JSON.parse(data.contents));
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, []);

  news.forEach((news) => {
    news.uniqueKey = uniqueId();
  });

  const x = useMotionValue(0);
  const transAnim = useTransform(x, [0, 3000], [0, 1]);

  return (
    <motion.div className="container mx-auto px-4 bg-[#BCFFCE]">
      <AnimatePresence exitBeforeEnter>
        <Header />
      </AnimatePresence>
      <div>
        <h1 className="font-bold text-5xl">News</h1>
        <p className="text-lg mb-3">
          Latest Info About COVID-19 from trusted Source
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 mb-3">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            news.map((news) => (
              <NewsCard
                key={news.uniqueKey}
                title={news.title}
                timestamp={news.timestamp}
                url={news.url}
              />
            ))
          )}
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -3000 }}
          exit={{ x: 0 }}
          transition={transition}
          style={{ transAnim }}
          className="z-30 fixed top-0 right-0 h-screen w-screen bg-teal-900"></motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
