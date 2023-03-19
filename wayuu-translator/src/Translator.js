import React, { useState } from 'react';
import Papa from 'papaparse';
import './App.css';

const Translator = () => {
  const [englishWord, setEnglishWord] = useState('');
  const [wayuuWord, setWayuuWord] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [englishDefinition, setEnglishDefinition] = useState('');
  const [wayuuDefinition, setWayuuDefinition] = useState('');
  const [searchedEnglishWord, setSearchedEnglishWord] = useState('');
  const [matches, setMatches] = useState([]);

  const search = (query) => {
    fetch('english-wayuu-index.csv')
      .then((response) => response.text())
      .then((csv) => {
        const results = Papa.parse(csv, { header: true }).data;
        const matchingResults = results.filter(
          (result) => result.englishword.toLowerCase() === query.toLowerCase()
        );

        setSearchedEnglishWord(query);

        if (matchingResults.length > 0) {
          setMatches(matchingResults);
        } else {
          setMatches([]);
        }
      });
  };

  const handleSearch = () => {
    search(englishWord);
  };

  return (
    <div>
      <label htmlFor="search-input" className='prompt-title'>English Word:</label>
      <input
        id="search-input"
        type="text"
        value={englishWord}
        onChange={(event) => setEnglishWord(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className='results'>
        {matches.length > 1 && <p className='info-dup'> There are {matches.length} results for {searchedEnglishWord}.</p>}
        {matches.map((match, index) => (
          <div key={index}>
            <h2>{match.englishword}</h2>
            <p><strong>Wayuu word:</strong> {match.wayuuword}</p>
            <p><strong>Part of speech:</strong> {match.partofspeech}</p>
            <p><strong>English definition:</strong> {match.englishdefinition}</p>
            <p><strong>Wayuu definition:</strong> {match.wayuudefinition}</p>
          </div>
        ))}
        {matches.length === 0 && <p> No matches found.</p>}
      </div>
    </div>
  );
};





export default Translator;
