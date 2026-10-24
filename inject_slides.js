const fs = require('fs');

const menus = [
    {
        title: 'Es Kopi Susu Aren',
        cat: 'Signature',
        desc: 'Paduan sempurna espresso 100% Arabika pilihan, susu segar matang, dan manisnya legit gula aren murni dari petani lokal.',
        price: 'Rp 35.000',
        img: '/assets/kopi_susu.jpg',
        badge: '⭐ Best Seller'
    },
    {
        title: 'Classic Butter Croissant',
        cat: 'Pastry',
        desc: 'Dipanggang segar setiap pagi. Kaya akan lapisan mentega Prancis murni yang memberikan tekstur sangat renyah di luar namun lembut berongga di dalam.',
        price: 'Rp 28.000',
        img: '/assets/croissant.jpg',
        badge: ''
    },
    {
        title: 'Kyoto Matcha Latte',
        cat: 'Non-Coffee',
        desc: 'Menggunakan bubuk matcha seremonial asli dari Uji, Kyoto. Memberikan rasa *earthy* yang autentik, seimbang dengan tekstur susu.',
        price: 'Rp 40.000',
        img: '/assets/matcha.jpg',
        badge: ''
    },
    {
        title: 'Manual Brew (V60)',
        cat: 'Single Origin',
        desc: 'Biji kopi spesialti yang diseduh secara presisi menggunakan metode V60. Menghasilkan secangkir kopi hitam yang jernih dengan notes buah.',
        price: 'Rp 45.000',
        img: '/assets/coffee_hero.jpg',
        badge: ''
    },
    {
        title: 'Artisan Earl Grey Tea',
        cat: 'Tea',
        desc: 'Teh hitam klasik dengan sentuhan minyak bergamot yang harum dan menenangkan, disajikan dengan irisan lemon segar.',
        price: 'Rp 30.000',
        img: '/assets/tea.jpg',
        badge: ''
    },
    {
        title: 'Red Velvet Cake',
        cat: 'Cake',
        desc: 'Kue lembut berwarna merah pekat berpadu dengan frosting cream cheese premium yang lumer di mulut.',
        price: 'Rp 45.000',
        img: '/assets/cake.jpg',
        badge: '✨ New'
    },
    {
        title: 'Classic Affogato',
        cat: 'Dessert',
        desc: 'Dua scoop es krim vanilla Italia otentik yang disiram dengan segelas espresso panas yang kental dan kuat.',
        price: 'Rp 38.000',
        img: '/assets/affogato.jpg',
        badge: ''
    },
    {
        title: 'Signature Hot Choco',
        cat: 'Non-Coffee',
        desc: 'Cokelat hitam murni Belgia yang dilelehkan dengan susu *steamed*, memberikan sensasi hangat dan nyaman di setiap tegukan.',
        price: 'Rp 35.000',
        img: '/assets/choco.jpg',
        badge: ''
    },
    {
        title: 'Beef Bacon Quiche',
        cat: 'Savory',
        desc: 'Pai gurih ala Prancis berisi paduan telur, krim, keju gruyere leleh, dan irisan daging sapi asap yang melimpah.',
        price: 'Rp 42.000',
        img: '/assets/quiche.jpg',
        badge: ''
    },
    {
        title: 'Caramel Macchiato',
        cat: 'Signature',
        desc: 'Susu vanilla hangat berselimut espresso pekat, dengan siraman saus karamel manis di bagian atasnya.',
        price: 'Rp 40.000',
        img: '/assets/macchiato.jpg',
        badge: ''
    },
    {
        title: 'Almond Pain au Chocolat',
        cat: 'Pastry',
        desc: 'Kue pastri cokelat klasik yang diperkaya dengan taburan kacang almond panggang renyah di atasnya.',
        price: 'Rp 32.000',
        img: '/assets/pain.jpg',
        badge: ''
    }
];

let slidesHTML = '';

for (let i = 0; i < 2; i++) { // Loop 2 times for duplication (total 22 slides)
    menus.forEach((menu, index) => {
        slidesHTML += `
                <div class="swiper-slide w-[300px] sm:w-[340px] md:w-[400px] bg-white rounded-3xl overflow-hidden group">
                    <div class="h-64 sm:h-72 w-full overflow-hidden relative bg-gray-100">
                        <img src="${menu.img}" alt="${menu.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out">
                        ${menu.badge ? `<div class="absolute top-4 right-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">${menu.badge}</div>` : ''}
                    </div>
                    <div class="card-content p-6 sm:p-8 flex flex-col h-[320px]">
                        <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">${menu.cat}</p>
                        <h3 class="text-2xl font-serif font-bold mb-3">${menu.title}</h3>
                        <p class="card-desc text-sm font-light leading-relaxed mb-auto">${menu.desc}</p>
                        <div class="mt-6 flex items-center justify-between">
                            <p class="card-price text-xl font-bold">${menu.price}</p>
                            <a href="https://wa.me/6281234567890" class="card-btn inline-block border px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest">Pesan</a>
                        </div>
                    </div>
                </div>`;
    });
}

let html = fs.readFileSync('demos/kuliner.html', 'utf8');

// Replace everything inside <div class="swiper-wrapper"> ... </div>
const regex = /(<div class="swiper-wrapper">)[\s\S]*?(<\/div>\s*<div class="swiper-pagination)/;
if (regex.test(html)) {
    html = html.replace(regex, `$1\n${slidesHTML}\n            $2`);
    fs.writeFileSync('demos/kuliner.html', html, 'utf8');
    console.log('Successfully injected 22 slides.');
} else {
    console.log('Regex failed.');
}
