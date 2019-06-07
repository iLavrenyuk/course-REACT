import { employers, employersNames } from './1script';
import { sponsors, money, calcCash } from './2script';

class MakeBusiness {
    constructor(owner, cash, emp, director = 'Victor') {
        let sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
        console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
            emp);
        console.log('And we have a sponsors: ');
        console.log.apply(null, sumSponsors);
        console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
    }
}

let test = new MakeBusiness('Sam', money, employersNames, );

