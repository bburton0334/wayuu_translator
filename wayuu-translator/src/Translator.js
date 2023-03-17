import React, { useState } from 'react';
import Papa from 'papaparse';
import './App.css';

const Translator = () => {
  const [englishWord, setEnglishWord] = useState('');
  const [wayuuWord, setWayuuWord] = useState('');
  const [partOfSpeechWords, setPartOfSpeechWords] = useState('');
  const [englishSentence, setEnglishSentence] = useState('');
  const [wayuuSentence, setWayuuSentence] = useState('');
  const [detailsSentence, setDetailsSentence] = useState('');

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
          setPartOfSpeechWords(match.partofspeech);
          setEnglishSentence(match.englishsentence);
          setWayuuSentence(match.wayuusentence);
          setDetailsSentence(match.details);
        } else {
          setEnglishWord('');
          setWayuuWord('');
          setPartOfSpeechWords('');
          setEnglishSentence('');
          setWayuuSentence('');
          setDetailsSentence('');
        }
      });
  };

  const handleSearch = () => {
    search(englishWord);
  };

  return (
    <div>
      <label htmlFor="english-word-input" className='prompt-title'>English Word:</label>
      <input
        id="english-word-input"
        type="text"
        value={englishWord}
        onChange={(event) => setEnglishWord(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {wayuuWord && (
        <div className='info-area'>
          <p className='translated-word'>{wayuuWord}</p>
          <p><i>English word:</i> {englishWord}</p>
          <p><i>Wayuunaiki word:</i> {wayuuWord}</p>
          <br/>
          <p>Part of Speech: {partOfSpeechWords}</p>
          <p>English Sentence: {englishSentence}</p>
          <p>Wayuunaiki Sentence: {wayuuSentence}</p>
          <p>Extra Details: {detailsSentence}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
