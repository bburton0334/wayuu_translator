import React, { useState } from 'react';
import Papa from 'papaparse';

const Translator = () => {
  const [englishWord, setEnglishWord] = useState('');
  const [wayuuWord, setWayuuWord] = useState('');
  const [description, setDescription] = useState('');

  const search = (query) => {
    fetch('wayuu-english.csv')
      .then((response) => response.text())
      .then((csv) => {
        const results = Papa.parse(csv, { header: true }).data;
        const match = results.find(
          (result) => result.english.toLowerCase() === query.toLowerCase()
        );
        if (match) {
          setEnglishWord(match.english);
          setWayuuWord(match.wayuu);
          setDescription(match.description);
        } else {
          setEnglishWord('');
          setWayuuWord('');
          setDescription('');
        }
      });
  };

  const handleSearch = () => {
    search(englishWord);
  };

  return (
    <div>
      <label htmlFor="english-word-input">English Word:</label>
      <input
        id="english-word-input"
        type="text"
        value={englishWord}
        onChange={(event) => setEnglishWord(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {wayuuWord && (
        <div>
          <p>Wayuunaiki Word: {wayuuWord}</p>
          <p>Description: {description}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
