const fs = require('fs');
const path = require('path');

const customCSS = `
    <style>
        h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        
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
    </style>
`;

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace old style block with the new one
    content = content.replace(/<style>[\s\S]*?<\/style>/, customCSS);
    
    // Convert basic hovers to smooth-lift on cards
    content = content.replace(/hover:-translate-y-[1-2]\s+transition(\s+duration-\d+)?/g, 'smooth-lift');
    
    // Convert button hovers to smooth-btn
    content = content.replace(/transition transform hover:-translate-y-1/g, 'smooth-btn');
    content = content.replace(/hover:-translate-y-1 transition/g, 'smooth-btn');
    content = content.replace(/transition-colors/g, 'smooth-btn');
    
    // Add btn-shine and radar to main WhatsApp CTA buttons
    content = content.replace(/class="([^"]*bg-green-600[^"]*)"/g, 'class="$1 btn-shine animate-radar"');
    content = content.replace(/class="([^"]*bg-green-500 hover:bg-green-600[^"]*fixed[^"]*)"/g, 'class="$1 btn-shine animate-radar"');
    
    // Add animate-float to some big emojis/icons
    content = content.replace(/text-5xl mb-4/g, 'text-5xl mb-4 animate-float');
    content = content.replace(/w-24 h-24([^>]+)text-5xl/g, 'w-24 h-24 $1 text-5xl group-hover:scale-110 transition-transform duration-500');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Processed', filePath);
}

const files = [
    path.join(__dirname, 'demos', 'kuliner.html'),
    path.join(__dirname, 'demos', 'jasa.html'),
    path.join(__dirname, 'demos', 'retail.html')
];

files.forEach(processFile);
