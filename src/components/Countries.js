import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "./Card";
const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData , setSortedData] = useState([]);
    const [rangeValue, setRangeValue] = useState(100);
    const [selectedRadio,setSelectRadio] = useState('');
    const radios = ['Africa','America' , "Asia" , 'Europe','Oceania'];


    useEffect(() =>{
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
            .then((response) => {
                setData(response.data);
            });
        const sortedContry = () => {
            const countryObj = Object.keys(data).map((i)=>data[i]);
            const sortedArray = countryObj.sort((a,b)=> {
                return b.population - a.population;
            });
            sortedArray.length = rangeValue;
            setSortedData(sortedArray)
        }
        sortedContry();
    },[data,rangeValue]);



    return (
        <div className="countries">
            <div className="sort-container">
                <input id='inputRange' type="range" min='5' step='1' max="200" onChange={((event => {
                    setRangeValue(event.target.value)
                }))}/>

                <ul className=''>
                    {radios.map((radio)=>{

                        return (
                            <li key={radio}>
<input className='' type='radio' value={radio} id={radio} checked={radio === selectedRadio} onChange={(e)=>{
setSelectRadio(e.target.value);

}
}/>
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        )
                    })}
                </ul>

            </div>
            <div className='cancel'>
                {selectedRadio && <h5 onClick={()=> setSelectRadio('')}>Annuler recherche</h5>}
            </div>

            <ul className='countries-list'>
                <li>

                {sortedData
                    .filter((country)=> country.region.includes(selectedRadio))
                    .map((country) =>

                    (
                        <Card key={country.name} countrie = {country}/>
                    )
                )}
                </li>

            </ul>
        </div>
    );
};

export default Countries;


/* useEffect(()=> {
     if(playOnce){
         axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
             .then((response) => {
                 setData(response.data);
                 setPlayOnce(false);
             });
         const sortedContry = () => {
             const countryObj = Object.keys(data).map((i)=>data[i]);
             const sortedArray = countryObj.sort((a,b)=> {
                 return b.population - a.population;
             });
             sortedArray.length = rangeValue;
             setSortedData(sortedArray)
         }
         sortedContry();
     }

 },[data,playOnce]
 )*/
