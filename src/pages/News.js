import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import { useEffect, useState } from 'react';
import uniqueId from 'lodash/uniqueId';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news from https://dekontaminasi.com/api/id/covid19/news and set it to state
  useEffect(() => {
    fetch(
      'https://api.allorigins.win/get?url=https://dekontaminasi.com/api/id/covid19/news'
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(JSON.parse(data.contents));
        setLoading(false);
      });
  }, []);

  news.forEach((news) => {
    news.uniqueKey = uniqueId();
  });

  return (
    <div className="container mx-auto px-4 bg-[#BCFFCE]">
      <Header />
      <div>
        <h1 className="font-bold text-5xl">News</h1>
        <p className="text-lg mb-3">
          Latest Info About COVID-19 from trusted Source
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 mb-3">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
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
    </div>
  );
}
