import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language,text}) => {
    const [translated, setTranslated] = useState('');
    const [debounceText, setDebounceText] = useState(text);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setDebounceText(text);
        },500);

        return () => {
            clearTimeout(debounce);
        }
    }, [text])

    useEffect(() => {
        const translateText = async () => {
            const [data] = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params: {
                    q: text,
                    source: "en",
                    target: "es",
                    key: ''
                }
            })

            setTranslated(data.data.translations[0].translatedText);
        }

        translateText();

    },[language,debounceText]);

    return <div>
        <h1 className="ui ui-header">{translated}</h1>
    </div>
}

export default Convert;