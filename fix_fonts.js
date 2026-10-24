const fs = require('fs');
const path = require('path');

const customCSSBase = `
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
        
        @keyframes shine {
            0% { left: -100%; opacity: 0; }
            20% { opacity: 0.5; }
            40% { left: 100%; opacity: 0; }
            100% { left: 100%; opacity: 0; }
        }
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::before {
            content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
            transform: skewX(-25deg); animation: shine 3s infinite; z-index: 1;
        }
        
        @keyframes radar-pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-radar { animation: radar-pulse 2s infinite; }

        .smooth-lift {
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .smooth-lift:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1) !important;
        }
        
        .smooth-btn {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease !important;
        }
        .smooth-btn:hover {
            transform: translateY(-4px) !important;
        }
`;

function fixFonts(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Default fallback styles if it was completely overwritten
    if (filePath.includes('retail.html')) {
        content = content.replace(/<style>[\s\S]*?<\/style>/, `<style>\n        body { font-family: 'Space Grotesk', sans-serif; }\n${customCSSBase}\n    </style>`);
    } else if (filePath.includes('jasa.html')) {
        content = content.replace(/<style>[\s\S]*?<\/style>/, `<style>\n        body { font-family: 'Outfit', sans-serif; }\n${customCSSBase}\n    </style>`);
    } else if (filePath.includes('kuliner.html')) {
        content = content.replace(/<style>[\s\S]*?<\/style>/, `<style>\n        h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }\n        body { font-family: 'Plus Jakarta Sans', sans-serif; }\n${customCSSBase}\n    </style>`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed fonts for', filePath);
}

const files = [
    path.join(__dirname, 'demos', 'kuliner.html'),
    path.join(__dirname, 'demos', 'jasa.html'),
    path.join(__dirname, 'demos', 'retail.html')
];

files.forEach(fixFonts);
