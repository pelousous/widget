import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('jazz');
    const [results, setResults] = useState([]);
    const onInputChange = (e) => {
        setTerm(e.target.value);
    }
    const resultsList = results.map((result) => {
                return   <div className="item" key={result.pageid}>
                            <a href={`http://en.wikipedia.org/?curid=${result.pageid}`} className="ui button right floated">GO</a>
                            <div className="header">{result.title}</div>
                            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                        </div>
            })
    useEffect( () => {
     const search = async () => {
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php', 
            {params : {
                'action': 'query',
                'format': 'json',
                'list': 'search',
                'srsearch': term
            }
        });

        setResults(data.query.search);
     }  
     if(term) {
         var delay = setTimeout(function() {
            search();
         },500);
        
     }

     return function cleanUp() {
         clearTimeout(delay);
     }
    }, [term])
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input type="text" value={term} name="search" placeholder="Search" onChange={onInputChange} />
                </div>
            </form>
            <div className="ui relaxed divided list">{resultsList}</div>
        </div>
    )
}

export default Search;