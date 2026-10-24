const fs = require('fs');
const file = 'src/components/harga.html';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/âš¡/g, '');
content = content.replace(/ðŸ’Ž/g, '');
content = content.replace(/âœ“/g, '✓');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed harga.html');
