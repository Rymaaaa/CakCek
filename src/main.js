import './style.css';
import Alpine from 'alpinejs';
import AOS from 'aos';
import 'aos/dist/aos.css';

window.Alpine = Alpine;
Alpine.start();

// Inisialisasi AOS dengan kurva easing yang jauh lebih mulus (premium feel)
AOS.init({
    once: true,
    offset: 50,
    duration: 1000,          // Diperlama dari 700 ke 1000ms
    easing: 'ease-out-cubic', // Kurva transisi melambat sangat mulus di akhir
});
