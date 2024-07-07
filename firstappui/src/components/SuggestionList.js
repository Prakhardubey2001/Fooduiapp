import React from 'react'
    
const SuggestionList = ({suggestions=[],highlight,dataKey,onSuggestionClick}) => {
  
  
  const getHighlightedText=(text,highlight)=>{
    const parts = text.split(new RegExp(`(${highlight})`,"gi"));
    console.log(parts);
    return <span>
        {
            parts.map((part,index)=>{
                return part.toLowerCase()===highlight.toLowerCase()?
                (<b key={index}>{part}</b>):(part)
            })
        }
    </span>
  }
    return (
    <>{suggestions.map((suggestion,index)=>{
        const currSuggestion= dataKey? suggestion[dataKey] : suggestion;
        return(
            <li key={index}
                onClick = {() => onSuggestionClick(suggestion)} className='suggestion-item'>
                    {getHighlightedText(currSuggestion,highlight)}


            </li>
        )
    })}</>
  )
}

export default SuggestionList