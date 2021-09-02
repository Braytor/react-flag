import React, {useState} from 'react';

const Card = (props) => {
const { countrie } = props;

const numberFormat = (x) =>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}




    return (
        <div className="card">

          <h2 className="name">{countrie.name}</h2>
                <li className="capital">Capitale : {countrie.capital}</li>
                <li className="population">{numberFormat(countrie.population)}  habitants</li>
                <img src={props.countrie.flag}></img>



        </div>
    );
};

export default Card;
