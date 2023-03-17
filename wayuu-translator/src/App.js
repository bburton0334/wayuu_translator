import React from 'react';
import Translator from './Translator';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='title-holder'>
        <h1 className='text'>English to Wayuunaiki Translator</h1>
      </div>

      <div className='holder'>
        <Tabs className="tab-body">
          <TabList>
            <Tab>Word Translator</Tab>
            <Tab>Sentence Translator</Tab>
            <Tab>About This Project</Tab>
          </TabList>

          <TabPanel>
            <h2 className='sub-title'>English Word to Wayuunaiki Word Translator</h2>
            <Translator/>
          </TabPanel>
          <TabPanel>
            <h2 className='sub-title'>Comming Soon</h2>
          </TabPanel>
          <TabPanel>
            <h2 className='sub-title'>About the English to Wayuunaiki Project</h2>
            <p>
              This project is intended as a way to translate full sentences into Wayuunaiki. One thing I noticed when I first
              researched about the language was the lack of online translators avaliable. This project was intended to give more
              access to the language and as a way for me to also self-study. 
            </p>
          </TabPanel>
        </Tabs>

      </div>

      <div className='footer'>
          Copyright © <a href="https://www.linkedin.com/in/briana-burton/">Briana R. E. Burton</a> 2023
      </div>

    </div>
  );
};

export default App;

