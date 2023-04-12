import React, { useEffect, useState } from 'react';

const Home = () => {
  const [anchors, setAnchors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => {
        setAnchors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching anchor data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">
          Scraped Anchor Data
        </h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {anchors.map(
            (anchor) =>
              anchor.title && (
                <a
                  key={anchor.link}
                  href={anchor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-4 rounded shadow hover:bg-gray-200"
                >
                  <h3 className="text-xl font-semibold mb-2 truncate">
                    {anchor.title}
                  </h3>
                  <p className="text-gray-600 truncate">{anchor.link}</p>
                </a>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
