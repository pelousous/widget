import React from 'react';

const Header = () => {
    return (
        <div class="ui pointing menu">
            <a class="active item" href="/">
                Accordion
            </a>
            <a class="item" href="/dropdown">
                Dropdown
            </a>
            <a class="item" href="/search">
                Search
            </a>
            <a class="item" href="/translate">
                Translate
            </a>
        </div>
    )
}

export default Header;