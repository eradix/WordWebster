import { FC } from 'react';

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
  
interface Props {
    Results: Result[];
    hasResult: boolean;
}


const Result :FC<Props> = ({Results, hasResult}) => {
  return (
        <>
            {hasResult ? Results.map((result, index : number) => 
                <div className="dark:bg-slate-900 bg-slate-400 text-left p-5" key={index} >
                {index === 0 && <h1 className="dark:text-slate-300 text-slate-900 font-bold text-2xl mb-3">Search results for '<span className="dark:text-teal-400 text-teal-900">{result.word}</span>'</h1>}
                <p>Result #{index+1} for '{result.word}'</p>
                {result.meanings.map((meaning, meaningIndex:number) => 
                    <div key={meaningIndex}>
                    <p className="italic dark:text-teal-300 text-teal-900 ml-3"># {meaning.partOfSpeech}</p>

                    {meaning.definitions.map((definition, definitionIndex:number) => 
                        <div key={definitionIndex}>
                        <p className="dark:text-white ml-5">- {definition.definition}</p>
                        {definition.example && <>
                            <p className="dark:text-red-200 text-red-900 ml-10 italic underline">Example: {definition.example}</p>
                        </>}
                        </div>
                    )}
                </div>
                )}
                </div>
            ):
            <div className="text-red-700 italic pb-3">
                Sorry. No results found on the specified word.
            </div>
            }
        </> 
  )
}

export default Result