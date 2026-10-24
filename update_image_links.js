const fs = require('fs');

const heroFile = 'src/components/hero.html';
let heroContent = fs.readFileSync(heroFile, 'utf8');

// Replace Unsplash with local assets
heroContent = heroContent.replace('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100', '/assets/client1.jpg');
heroContent = heroContent.replace('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100', '/assets/client2.jpg');
heroContent = heroContent.replace('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', '/assets/client3.jpg');
heroContent = heroContent.replace('https://images.unsplash.com/photo-1495474472205-51f7d4c09fb0?auto=format&fit=crop&q=80&w=800', '/assets/coffee_hero.jpg');
heroContent = heroContent.replace('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=100', '/assets/kopi_susu.jpg');
heroContent = heroContent.replace('https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&q=80&w=100', '/assets/croissant.jpg');

fs.writeFileSync(heroFile, heroContent, 'utf8');

const portoFile = 'src/components/portofolio.html';
let portoContent = fs.readFileSync(portoFile, 'utf8');

portoContent = portoContent.replace('https://images.unsplash.com/photo-1495474472205-51f7d4c09fb0?auto=format&fit=crop&q=80&w=600', '/assets/coffee_hero.jpg');
portoContent = portoContent.replace('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600', '/assets/demo_jasa.jpg');
portoContent = portoContent.replace('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600', '/assets/demo_retail.jpg');

fs.writeFileSync(portoFile, portoContent, 'utf8');

console.log('Images updated to local assets.');
