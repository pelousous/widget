import React, { useState } from 'react';

const Accordion = ({items}) => {
    const [activeEl, setActiveEl] = useState(null);

    const onTitleClick = (index) => {
        setActiveEl(index);
    }
    const renderedItems = items.map((item, index) => {
        const active = activeEl === index ? 'active' : '';
        return <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })

    return <div className="ui styled accordion">
                {renderedItems}
            </div>
}

export default Accordion;