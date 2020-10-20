import React from 'react';
import Dropdown from './Dropdown';
import { useState } from 'react';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return <div>
        <form class="ui form">
            <div class="field">
                <label>Insert term to translate</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </form>
        <Dropdown label={'Chose your language'} options={options} selected={selectedLanguage} onSelectedChange={setSelectedLanguage}  />
        <Convert language={selectedLanguage} text={text} />
    </div>
}

export default Translate;