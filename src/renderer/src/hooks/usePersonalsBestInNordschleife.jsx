//  DEPENDENCIAS
import { useEffect, useState } from "react";

//  SERVICES
import getPersonalsBestInNordschleife from "../services/getPersonalsBestInNordschleife.js";

//  HELPERS
import { converterLapTime } from "./../helpers/converterLapTime.js";

const UsePersonalsBestInNordschleife = () => {

    const [personalsBestInNordschleife, setPersonalsBestInNordschleife] = useState([]);
    const [haRecibidoPersonalBestInNordschleife, setHaRecibidoPersonalBestInNordschleife] = useState(false);

    useEffect(()=>{
        fetchPersonalsBestInNordschleife();
    },[])

    function fetchPersonalsBestInNordschleife(){
        const personalBestInNordschleife = getPersonalsBestInNordschleife();
        for(const personalBest in personalBestInNordschleife){
            let car, laptime;
            car = (personalBest.split("@"))[0];
            laptime = converterLapTime(personalBestInNordschleife[personalBest].TIME);
            setPersonalsBestInNordschleife(personalsBestInNordschleife => [
                ...personalsBestInNordschleife, 
                {
                    "nick": personalBest,
                    "car": car,
                    "lapTime": laptime,
                }
            ]);
        }

        setHaRecibidoPersonalBestInNordschleife(true);
    }

    return { personalsBestInNordschleife, haRecibidoPersonalBestInNordschleife }

}

export default UsePersonalsBestInNordschleife;