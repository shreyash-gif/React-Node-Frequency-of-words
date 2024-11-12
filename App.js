import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [wordFrequencies, setWordFrequencies] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'frequency', direction: 'desc' });

  const fetchFrequencies = async () => {
    try {
      const response = await axios.post('http://localhost:5000/analyze', { url });
      setWordFrequencies(response.data.topWords);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSort = (key) => {
    const direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });

    const sortedData = [...wordFrequencies].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setWordFrequencies(sortedData);
  };

  return (
    <div>
      <h1>Word Frequency Analyzer</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={fetchFrequencies}>Analyze</button>

      {wordFrequencies.length > 0 && (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('word')}>Word</th>
              <th onClick={() => handleSort('frequency')}>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {wordFrequencies.map(({ word, frequency }) => (
              <tr key={word}>
                <td>{word}</td>
                <td>{frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
