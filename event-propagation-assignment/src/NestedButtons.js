import React from 'react';

function NestedButtons() {
    function handleOuterClick() {
        alert('Outer button clicked');
    }

    function handleInnerClick(event) {
        event.stopPropagation();
        alert('Inner button clicked');
    }

    return (
        <div>
            <button className='outerButton' onClick={handleOuterClick}>
                Outer Button
                <button className='innerButton' onClick={handleInnerClick}>Inner Button</button>
            </button>
        </div>
    )
}

export default NestedButtons;