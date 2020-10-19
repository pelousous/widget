import React, {useState, useEffect, useRef} from 'react';


const Dropdown  = ({label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);

    const renderedOptions = options.map((opt) => {
        if(opt.value !== selected.value) {
            return <div className="item" data-value={opt.value} onClick={(() => onSelectedChange(opt))}>{opt.label}</div>
        }
    })

    const ref = useRef();
    const onBodyClick = (e) => {
            if(ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        }

    useEffect(() => {
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    })

    return <div className="ui form" ref={ref}>
                <div className="field">
                    <label>{label}</label>
                    <div className={`ui selection dropdown ${open ? 'visible active' : '' }`} onClick={() => setOpen(!open)}>
                        <i className="dropdown icon"></i>
                        <div className="default text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : '' }`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>   
}

export default Dropdown;