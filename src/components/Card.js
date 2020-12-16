import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        // className for styling the cards using tachyons
        <dl className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        {/* img is sourcing robots photo from robohash */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <>
            {/* name and email referenced from index.js as properties will be displayed on cards */}
                <h2>{name}</h2>
                <p>{email}</p>
            </>
        </dl>
    );
}

export default Card;