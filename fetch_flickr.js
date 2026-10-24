const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

const images = [
    { url: 'https://loremflickr.com/600/800/croissant,bakery/all', name: 'croissant.jpg' },
    { url: 'https://loremflickr.com/600/800/coffee,pour,over/all', name: 'coffee_hero.jpg' },
    { url: 'https://loremflickr.com/600/800/cheesecake,cake/all', name: 'cake.jpg' }
];

const destFolder = path.join(__dirname, 'public', 'assets');

async function downloadImages() {
    for (const img of images) {
        try {
            const res = await fetch(img.url);
            if (!res.ok) throw new Error(`Status ${res.status}`);
            const dest = path.join(destFolder, img.name);
            const fileStream = fs.createWriteStream(dest, { flags: 'w' });
            await finished(Readable.fromWeb(res.body).pipe(fileStream));
            console.log(`Downloaded ${img.name}`);
        } catch (err) {
            console.error(`Error downloading ${img.name}: ${err.message}`);
        }
    }
}

downloadImages();
