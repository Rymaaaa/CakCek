const fs = require('fs');
const path = require('path');

const files = [
    path.join(__dirname, 'demos', 'kuliner.html'),
    path.join(__dirname, 'demos', 'jasa.html'),
    path.join(__dirname, 'demos', 'retail.html')
];

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix viewport for better mobile scaling
    content = content.replace(
        /<meta name="viewport" content="width=device-width, initial-scale=1.0">/g, 
        '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">'
    );

    // Make sure body has safe responsive classes
    content = content.replace(
        /body class="([^"]*antialiased[^"]*)"/g, 
        'body class="$1 w-full relative overflow-x-hidden"'
    );
    
    // Ensure any fixed dimension elements are protected with shrink-0
    content = content.replace(/class="([^"]*w-\d+\s+h-\d+[^"]*)"/g, function(match, p1) {
        if (!p1.includes('shrink-0')) {
            return `class="${p1} shrink-0"`;
        }
        return match;
    });

    // Make sure abstract flex/grid layouts have robust widths
    content = content.replace(/max-w-6xl mx-auto/g, 'max-w-6xl mx-auto w-full');
    content = content.replace(/max-w-3xl mx-auto/g, 'max-w-3xl mx-auto w-full');
    
    // Ensure image containers have max-w-full
    content = content.replace(/class="([^"]*aspect-\[3\/4\][^"]*)"/g, function(match, p1) {
        if (!p1.includes('w-full')) {
            return `class="${p1} w-full"`;
        }
        return match;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Responsive updates applied to', filePath);
});
