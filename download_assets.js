const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100', name: 'client1.jpg' },
    { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100', name: 'client2.jpg' },
    { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', name: 'client3.jpg' },
    { url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600', name: 'demo_jasa.jpg' },
    { url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600', name: 'demo_retail.jpg' }
];

const destFolder = path.join(__dirname, 'public', 'assets');

images.forEach(img => {
    const dest = path.join(destFolder, img.name);
    const file = fs.createWriteStream(dest);
    https.get(img.url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close(() => console.log(`Downloaded ${img.name}`));
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => {});
        console.error(`Error downloading ${img.name}: ${err.message}`);
    });
});
