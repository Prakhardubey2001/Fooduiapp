import React, { useCallback, useEffect, useState } from 'react'
import SuggestionList from './SuggestionList'
import { debounce } from 'lodash'
const Autocomplete = ({
    staticData,
    fetchSuggestions,
    placeholder="",
    customloading="Loading...",
    onSelect= ()=>{},
    onBlur = () => {},
    onFocus = () => {},
    onChange = () => {},
    dataKey="",
    

}) => {
    const [inputValue, setInputValue]=useState("");
    const[suggestions,setSuggestions]=useState([])
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(null)
    const handleinputchange= (event)=>{
        setInputValue(event.target.value);
        onChange(event.target.value);
    }
    

    console.log(suggestions);
    const getSuggestions = async(query)=>{
        setError(null);
        setLoading(true);
        try{
            let result;
            if(staticData)
                {
                    result=staticData.filter((item)=>{
                        return item.toLowerCase().includes(query.toLowerCase());
                    });
                }
            else if(fetchSuggestions)
                {
                    result=await fetchSuggestions(query);
                }
                setSuggestions(result);


        }
        catch(error)
        {
            setError("Failed to fetch it");
            setSuggestions([]);

        }
        finally{
            setLoading(false);
        }
    }
    const getsuggestionsdebounce=useCallback(debounce(getSuggestions,500),[]);
    useEffect(()=>{
        if(inputValue.length>1)
            {
                getsuggestionsdebounce(inputValue);
            }
            else
            {
                setSuggestions([]);
            }
    },[inputValue])

    const handlesuggestionclick=(suggestion)=>{
        setInputValue(dataKey?suggestion[dataKey]:dataKey);
        onSelect(suggestion);
        setSuggestions([]);
    }

  return (
    <div className="container">
        <input type='text' value={inputValue} placeholder={placeholder}  onBlur={onBlur} onFocus={onFocus} onChange={handleinputchange}/>
        {(SuggestionList.length>0 || loading || error  ) && (<ul className='suggestions-list'>
        {error && <div className='error'>{error}</div>}
        {loading && <div classname="loading">{customloading}</div>}

            <SuggestionList
            dataKey={dataKey}
            highlight={inputValue}
            suggestions={suggestions}

            onSuggestionClick={handlesuggestionclick}/></ul>)}
    </div>
  )
}


export default Autocomplete





// import React, { useCallback, useEffect, useState } from 'react';
// import SuggestionList from './SuggestionList';
// import { debounce } from 'lodash';

// const Autocomplete = ({
//     staticData,
//     fetchSuggestions,
//     placeholder = "",
//     customloading = "Loading...",
//     onSelect = () => {},
//     onBlur = () => {},
//     onFocus = () => {},
//     onChange = () => {},
//     dataKey = "",
// }) => {
//     const [inputValue, setInputValue] = useState("");
//     const [suggestions, setSuggestions] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const handleinputchange = (event) => {
//         setInputValue(event.target.value);
//         onChange(event.target.value);
//     };

//     const handlesuggestionclick = (suggestion) => {
//         setInputValue(dataKey ? suggestion[dataKey] : dataKey);
//         onSelect(suggestion);
//         setSuggestions([]);
//     };

//     console.log(suggestions);

//     const getSuggestions = async (query) => {
//         setError(null);
//         setLoading(true);
//         try {
//             let result;
//             if (staticData) {
//                 result = staticData.filter((item) => {
//                     return item.toLowerCase().includes(query.toLowerCase());
//                 });
//             } else if (fetchSuggestions) {
//                 result = await fetchSuggestions(query);
//             }
//             setSuggestions(result);
//         } catch (error) {
//             setError("Failed to fetch it");
//             setSuggestions([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const getsuggestionsdebounce = useCallback(debounce(getSuggestions, 500), []);

//     useEffect(() => {
//         if (inputValue && inputValue.length > 1) {
//             getsuggestionsdebounce(inputValue);
//         } else {
//             getsuggestionsdebounce(inputValue);
//             setSuggestions([]);
//         }
//     }, [inputValue, getsuggestionsdebounce]);

//     return (
//         <div className="container">
//             <input
//                 value={inputValue}
//                 placeholder={placeholder}
//                 onBlur={onBlur}
//                 onFocus={onFocus}
//                 onChange={handleinputchange}
//             />
//             {(suggestions.length > 0 || loading || error) && (
//                 <ul className='suggestions-list'>
//                     {error && <div className='error'>{error}</div>}
//                     {loading && <div className="loading">{customloading}</div>}
//                     <SuggestionList
//                         dataKey={dataKey}
//                         highlight={inputValue}
//                         suggestions={suggestions}
//                         onSuggestionClick={handlesuggestionclick}
//                     />
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Autocomplete;
