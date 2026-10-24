const fs = require('fs');
const file = 'demos/kuliner.html';
let content = fs.readFileSync(file, 'utf8');

// Replace potentially broken unsplash IDs with verified ones
content = content.replace(/1497935586351-b67a49e012bf/g, '1495474472205-51f7d4c09fb0');
content = content.replace(/1549996647-190b679b33d7/g, '1550507992-eb63ffee0847');
content = content.replace(/1572442388796-11668a67ef84/g, '1509042239860-f550ce710b93');
content = content.replace(/1515823662972-da6a2e4d3002/g, '1582716401301-b2407dc7563d');
content = content.replace(/1614315585028-1b2c152778c1/g, '1571115177098-24edec86ee50');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed F&B images');
