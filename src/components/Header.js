import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div class="ui pointing menu">
            <Link className="active item" href="/">
                Accordion
            </Link>
            <Link className="item" href="/dropdown">
                Dropdown
            </Link>
            <Link className="item" href="/search">
                Search
            </Link>
            <Link className="item" href="/translate">
                Translate
            </Link>
        </div>
    )
}

export default Header;