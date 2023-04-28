import axios from "axios";
import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Result from './components/Result/Result';

function App() {

  interface Result {
    word: string;
    meanings: [{
      partOfSpeech : string,
      definitions : [{
        definition : string,
        example : string
      }];
    }];
  }
  
  const [word, setWord] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasResult, setHasResult] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  }

  const clearSearch = () => {
    setWord("");
  }

  const fetchMeaning = () => {
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(function (response) {
        //console.log(response.data);
        setResults(response.data);
        setIsLoading(false);
        setHasResult(true)
      })
      .catch(function (error) {
        console.log(error);
        setResults([]);
        setIsLoading(false);
        setHasResult(false)
      });
  }

  return (
    
    <div className='dark:bg-slate-400 bg-slate-900 max-w-xl'>
      
      <Header word = {word} handleChange = {handleChange} fetchMeaning = {fetchMeaning} clearSearch={clearSearch} />

      { !isLoading && <Result Results={results} hasResult = {hasResult}/> }
      
    </div>
    
  )
}

export default App