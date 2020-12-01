import React from 'react';

const Card = (props) => {
    return (
        // className for styling the cards using tachyons
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        {/* img is sourcing robots photo from robohash */}
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
            {/* name and email referenced from index.js as properties will be displayed on cards */}
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;