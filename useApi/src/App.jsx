import { useState } from "react";
import { getCardByClass, getCardsAll } from "./api/Cards"
import useApi from "./hooks/useApi"
import CardDescription from "./components/CardDescription";

function App() {
  const [isRunning, apiData, errorText] = useApi(getCardsAll);
  const [currentCardClass, setCurrentCadrClass] = useState(null);
  const cardElem = [];

  if (!isRunning && apiData){ 
    apiData?.classes?.forEach(cardClass => 
      cardElem.push(
        <p onClick = {()=>{setCurrentCadrClass(cardClass)}} key = {cardClass}>{cardClass}</p>
        ));
  } else if (!isRunning){
    console.log(errorText);
  }

  return (
    <>
      {cardElem}
      <hr />
      {currentCardClass && <CardDescription cardClass = {currentCardClass}/>}
    </>
  )
}

export default App
