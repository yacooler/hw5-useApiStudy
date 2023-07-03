import { useState } from "react";
import { getCardByClass } from "../api/Cards";
import useApi from "../hooks/useApi";


export default function CardDescription({cardClass}){

    const [isRunning, apiData, errorText] = useApi(getCardByClass, cardClass);
    const descrTable = [];

    console.log(isRunning + ';')
    
    if (!isRunning && apiData){
        apiData.forEach(cardD => descrTable.push(
            <tr key={cardD.cardId}>
                <td>{cardD.cardId}</td>
                <td>{cardD.cardSet}</td>
                <td>{cardD.dbfId}</td>
                <td>{cardD.locale}</td>
                <td>{cardD.name}</td>
                <td>{cardD.playerClass}</td>
                <td>{cardD.text}</td>
            </tr>
            ))
    } else if (errorText){
      console.log(errorText);
    }

    


    const tableHeader= `Cards of class ${cardClass} ${isRunning?'LOADING':''}`;
  
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="7">{tableHeader}</th>
                </tr>
            </thead>

            <tbody>
                {descrTable}
            </tbody>
            
        </table>
    )
    

} 