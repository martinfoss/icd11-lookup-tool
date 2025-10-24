import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Placeholder for WHO ICD-11 API integration
    console.log('Searching for:', query);
    setResults([{ id: 'placeholder', title: 'Search result will appear here' }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4">ICD-11 Lookup Tool</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter ICD-11 code or keyword"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
        <div className="mt-6">
          {results.map((result) => (
            <div key={result.id} className="p-2 border-b">
              {result.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
