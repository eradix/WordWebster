import { ChangeEvent, FC } from 'react';

interface Props {
  word : string;
  handleChange : (event: ChangeEvent<HTMLInputElement>) => void; 
  fetchMeaning : () => void;
  clearSearch : () => void;
}

const Header :FC<Props> = ({word, handleChange, fetchMeaning, clearSearch}) => {
  return (
    <div className='md:p-10 py-8 px-3'>
      <h1 className='dark:text-slate-800 text-slate-300 text-4xl mb-5 uppercase font-bold'>Word Webster</h1>
      <input type="text" name="word" className='mb-2 p-2 rounded-l bg-white text-slate-900 w-full md:w-auto' value={word} id="word" onChange={handleChange} placeholder="Search for word" />
      <button className="bg-teal-600 text-white p-2" onClick={fetchMeaning}>Search</button>
      <button className="dark:bg-slate-300 bg-slate-400 text-slate-900 p-2 rounded-r" onClick={clearSearch}>Clear</button>
    </div>
  )
}

export default Header