const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    { url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600', name: 'burger.jpg' },
    { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600', name: 'pizza.jpg' },
    { url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600', name: 'chicken.jpg' },
    { url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=1000', name: 'noodles.jpg' },
    { url: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600', name: 'chef.jpg' }
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
