import axios from 'axios';

const API_KEY = '9f478422b2mshbd7655f1fd9c359p1668f6jsn4efa86668875';
const API_HOST = 'omgvamp-hearthstone-v1.p.rapidapi.com'

//Получение всех карт HeartStone. Аргументы не передаются и не нужны
function getCardsAll(_){

    const options = {
      method: 'GET',
      url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      }
    };
    
    return axios.request(options);
}

//Получение карт по классу
function getCardByClass(cardClass){
  const options = {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/%7B${cardClass}%7D`,
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };
  return axios.request(options);
}



export {getCardsAll, getCardByClass};