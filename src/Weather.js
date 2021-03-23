import React from "react";
import axios from "axios";

export default function Weather(){

function handleResponse(response){
    alert(`it is ${response.data.main.temp}`);
}

    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=0ede9060c9da0e5d78059f6085416d96&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return <h2>Hello</h2>;
}