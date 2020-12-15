import React from 'react';

const Scroll = (props) => {
    return (
        <dl style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </dl>
    );
};

export default Scroll;