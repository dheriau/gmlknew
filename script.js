// Menüden tıklanan bölümü göster, diğerlerini gizle
function showSection(sectionId) {
    const home = document.getElementById('home');
    const hakkimizda = document.getElementById('hakkimizda');
    const iletisim = document.getElementById('iletisim');

    home.style.display = 'none';
    hakkimizda.style.display = 'none';
    iletisim.style.display = 'none';

    if (sectionId === 'home') {
        home.style.display = '';
    } else if (sectionId === 'hakkimizda') {
        hakkimizda.style.display = '';
    } else if (sectionId === 'iletisim') {
        iletisim.style.display = '';
    }
}

// Sayfa ilk açıldığında ana sayfa görünsün
window.onload = function() {
    showSection('home');
};

// WhatsApp panel aç/kapat
document.addEventListener("DOMContentLoaded", function() {
    const wpBtn = document.getElementById('wp-support-btn');
    const wpPanel = document.getElementById('wp-support-panel');
    const wpClose = document.getElementById('wp-close-btn');

    if (wpBtn && wpPanel && wpClose) {
        wpBtn.addEventListener('click', function() {
            wpPanel.style.display = 'block';
        });
        wpClose.addEventListener('click', function() {
            wpPanel.style.display = 'none';
        });
    }
});