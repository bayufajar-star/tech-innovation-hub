const defaultConfig = {
    site_title: "Tech Innovation Hub",
    tagline: "Inovasi Teknologi untuk Masa Depan yang Lebih Cerah",
    footer_text: "©Bayu Fajar Pamungkas. All Rights Reserved.",
    // Konfigurasi lain sesuai kebutuhan...
};

let currentPage = 'home';

// --- NAVIGASI ---
function navigateTo(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(page + 'Page');
    
    // Perbaikan jika page tidak ditemukan (fallback ke home)
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;
        window.scrollTo(0, 0);
        
        if (page === 'home') {
            // Trigger ulang animasi AOS jika kembali ke home
            setTimeout(() => {
                AOS.refresh(); 
                animateCounters();
            }, 100);
        } else {
             // Refresh AOS untuk halaman baru (penting untuk galeri detail)
             setTimeout(() => AOS.refresh(), 100);
        }
    }
}

function scrollToSection(sectionId) {
    if (currentPage !== 'home') {
        navigateTo('home');
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300); // Sedikit delay agar transisi halaman selesai
    } else {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// --- HEADER SCROLL EFFECT ---
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- COUNTER ANIMATION ---
const counters = document.querySelectorAll('.stat-number');
const speed = 200;
let hasAnimated = false;

const animateCounters = () => {
    if (hasAnimated) return;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        let count = 0;

        const updateCounter = () => {
            if (count < target) {
                count += increment;
                if (target < 10) {
                    counter.textContent = count.toFixed(1);
                } else {
                    counter.textContent = Math.ceil(count);
                }
                setTimeout(updateCounter, 10);
            } else {
                if (target < 10) {
                    counter.textContent = target.toFixed(1);
                } else {
                    counter.textContent = target;
                }
            }
        };

        updateCounter();
    });
    hasAnimated = true;
};

// --- INTERSECTION OBSERVER ---
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        }
    });
}, observerOptions);

const dashboard = document.querySelector('.dashboard');
if (dashboard) { observer.observe(dashboard); }

// --- FORM HANDLING (SIMULASI) ---
function handleFormSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerText;
    
    // Ambil data form
    const name = document.getElementById('name').value;
    const service = document.getElementById('interest').value;
    
    // Ubah tombol jadi loading
    submitBtn.innerText = 'Mengirim Data...';
    submitBtn.disabled = true;
    submitBtn.style.background = '#999';
    
    // Simulasi delay pengiriman ke server (2 detik)
    setTimeout(() => {
        // Tampilkan pesan sukses
        alert(`Halo ${name}! Terima kasih telah mendaftar untuk layanan ${service}.\n\nKami telah menerima data Anda dan tim kami akan segera menghubungi via WhatsApp.`);
        
        // Reset form
        document.getElementById('registrationForm').reset();
        
        // Kembalikan tombol ke semula
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = ''; // Kembali ke gradasi CSS
        
        // Opsional: Redirect ke home setelah sukses
        navigateTo('home');
    }, 2000);
}

// --- INIT AOS & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi Animate On Scroll
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, // Durasi animasi dalam ms
            once: true,     // Animasi hanya jalan sekali
            offset: 100,    // Mulai animasi sebelum elemen terlihat penuh
            mirror: false
        });
    }
});