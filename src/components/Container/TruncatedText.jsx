import React from 'react'

const TruncatedText = ({ text, limit }) => {
    const words = text.split(' ');
    const truncatedText = words.length > limit ? `${words.slice(0, limit).join(' ')}...` : text;
  
    return <p className='response-p'>Primary Responsibility:{truncatedText}</p>;
}

export default TruncatedText
