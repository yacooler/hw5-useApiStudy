import { useEffect, useState } from 'react';


export default function useApi(apiFunction, apiArguments){

    const [isRunning, setIsRunning] = useState(true);
    const [responseData, setResponseData] = useState(null);
    const [errorText, setErrorText] = useState(null);

    useEffect(()=>{

        console.log('useAPI', apiFunction, apiArguments)

        const requestPromise = apiFunction(apiArguments);

        setIsRunning(true);
        requestPromise.then(function (response) {
            // обработка успешного запроса
            setResponseData(response.data);
          })
          .catch(function (error) {
            setErrorText(error);
          })
          .finally(function () {
            // выполняется всегда
            setIsRunning(false);
          });
    },[apiFunction, apiArguments])
    
    return [isRunning, responseData, errorText]
}