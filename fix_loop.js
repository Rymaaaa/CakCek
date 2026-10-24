const fs = require('fs');
let html = fs.readFileSync('demos/kuliner.html', 'utf8');

// Regex to capture Slide 1 to the end of Slide 4
const slidesRegex = /(<!-- Slide 1 -->[\s\S]*?<!-- Slide 4 -->[\s\S]*?<\/div>\s*<\/div>\s*)(<\/div>\s*<div class="swiper-pagination)/;

const match = html.match(slidesRegex);
if(match) {
    // Duplicate the captured slides
    html = html.replace(slidesRegex, match[1] + '\n                <!-- Duplicate for Loop Fix -->\n' + match[1] + match[2]);
    fs.writeFileSync('demos/kuliner.html', html, 'utf8');
    console.log('Duplicated slides successfully.');
} else {
    console.log('Could not find slides block.');
}
