//  DEPENDENCES
import ini from 'ini';

//  CONTANST
const path = require("path");
const os = require("os");
const fs = require("fs");

/**
 * This method search in your file system the
 * personalBest file and select your personals best
 * records with a specific car in Nurburgring Nordschleife.
 * @returns {object}
 */
function getPersonalsBestInNordschleife(){
    let personalsBestInNordscheleife = {};
    const documentsPath = path.join(os.homedir(), 'Documents');
    const assettoCorsaPath = path.join(documentsPath, 'Assetto Corsa');
    if (fs.existsSync(assettoCorsaPath)) {
        const personalBestFilePath = path.join(assettoCorsaPath, 'personalbest.ini');
        const personalsBest = ini.parse(fs.readFileSync(personalBestFilePath, 'utf-8'));
        for(const personalBest in personalsBest){
            if(personalBest.includes("KS_NORDSCHLEIFE-NORDSCHLEIFE")){
                personalsBestInNordscheleife[personalBest] = personalsBest[personalBest];
            }
        }
    }
    return personalsBestInNordscheleife;
}

export default getPersonalsBestInNordschleife;