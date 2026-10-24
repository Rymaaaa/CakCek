const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    { url: 'https://images.unsplash.com/photo-1549903072-7e6e0d656094?auto=format&fit=crop&q=80&w=600', name: 'croissant.jpg' },
    { url: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=600', name: 'matcha.jpg' },
    { url: 'https://images.unsplash.com/photo-1572490122747-3968b75bb8fa?auto=format&fit=crop&q=80&w=600', name: 'kopi_susu.jpg' },
    { url: 'https://images.unsplash.com/photo-1495474472205-51f7d4c09fb0?auto=format&fit=crop&q=80&w=600', name: 'coffee_hero.jpg' }
];

const destFolder = path.join(__dirname, 'public', 'assets');

images.forEach(img => {
    const dest = path.join(destFolder, img.name);
    const file = fs.createWriteStream(dest);
    https.get(img.url, (response) => {
        response.pipe(file);
    }).on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
});
