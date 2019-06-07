const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];
for (let i = 0; i < employers.length; i++) {
    if (employers[i].length > 0 && employers[i].length != '') {
        employersNames.push(employers[i]);
    }
}
for (let i = 0; i < employersNames.length; i++) {
    employersNames[i] = employersNames[i].toLowerCase().trim();
}

export {employers, employersNames};