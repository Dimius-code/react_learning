import { useState } from 'react';

function Dropdown({ options }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        console.log(option);
    }

    const renderedOptions = options.map((option) => {
        return(
            <div 
                key={option.value}
                onClick={() => handleOptionClick(option)}
            >
                {option.label}
            </div>
        )
    })
    
    return (
        <div>
            <div onClick={handleClick}>Select...</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;