import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function NewsApp() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(""); // For the typing
  const [query, setQuery] = useState("latest"); // For the actual API call

  const API_KEY = "6621fe6ab83a4c15a37fc51b8735189a";

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        // Change to 'everything' endpoint when searching specific keywords
        const url =
          query === "latest"
            ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
            : `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

        const response = await axios.get(url);

        const filteredData = response.data.articles.filter(
          (item) => item.urlToImage && item.title !== "[Removed]"
        );

        setArticles(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };
    getNews();
  }, [query]); // Re-run whenever 'query' changes

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setQuery(searchInput);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>🗞️ Daily News</h1>
        {/* Search Bar added here */}
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search for news (e.g., Tech, Sports)..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {loading ? (
        <div className="loader">Loading news about "{query}"...</div>
      ) : (
        <div className="grid">
          {articles.length > 0 ? (
            articles.map((news, index) => (
              <div key={index} className="card">
                <img src={news.urlToImage} alt="news" />
                <div className="card-body">
                  <h3>{news.title}</h3>
                  <p>{news.description?.slice(0, 100)}...</p>
                  <a href={news.url} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="loader">No results found for "{query}".</p>
          )}
        </div>
      )}
    </div>
  );
}

export default NewsApp;
