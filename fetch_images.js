const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

const images = [
    { url: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600', name: 'kopi_susu.jpg' },
    { url: 'https://images.unsplash.com/photo-1549903072-7e6e0d656094?auto=format&fit=crop&q=80&w=600', name: 'croissant.jpg' },
    { url: 'https://images.unsplash.com/photo-1495474472205-51f7d4c09fb0?auto=format&fit=crop&q=80&w=600', name: 'coffee_hero.jpg' },
    { url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600', name: 'tea.jpg' },
    { url: 'https://images.unsplash.com/photo-1571115177098-24edec86ee50?auto=format&fit=crop&q=80&w=600', name: 'cake.jpg' },
    { url: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=600', name: 'affogato.jpg' },
    { url: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=600', name: 'choco.jpg' },
    { url: 'https://images.unsplash.com/photo-1512484457149-266d165a4eca?auto=format&fit=crop&q=80&w=600', name: 'quiche.jpg' },
    { url: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600', name: 'macchiato.jpg' },
    { url: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600', name: 'pain.jpg' }
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
