// Gelecekte sayfa kaydırma, form validasyonu gibi dinamik işlemler eklenebilir.
// Şu anlık temel ihtiyaç olmadığı için boş yapı bırakıldı.

document.addEventListener("DOMContentLoaded", function() {
  // Başlık ve ikon eşleştirmesi
  const iconMap = {
    "Sağlık Sigortası": "fa-notes-medical",
    "Araç Sigortası / Kasko": "fa-car",
    "Konut & DASK": "fa-house",
    "Hayat Sigortası": "fa-heart",
    "Seyahat Sigortası": "fa-plane-departure",
    "İşyeri Sigortası": "fa-briefcase"
  };

  document.querySelectorAll("#hizmetler .service").forEach(serviceDiv => {
    const h3 = serviceDiv.querySelector("h3");
    if (h3 && iconMap[h3.textContent.trim()]) {
      const icon = document.createElement("i");
      icon.className = `fa-solid ${iconMap[h3.textContent.trim()]}`;
      icon.style.fontSize = "2.5rem";
      icon.style.color = "#0073e6";
      icon.style.display = "block";
      icon.style.marginBottom = "1rem";
      h3.parentNode.insertBefore(icon, h3);
    }
  });
});

function showSection(sectionId) {
  // Tüm bölümleri gizle
  document.getElementById("hizmetler").style.display = "none";
  document.getElementById("nedenbiz").style.display = "none";
  document.getElementById("iletisim").style.display = "none";
  document.getElementById("hero").style.display = "none";

  // İlgili bölümü göster
  const showEl = document.getElementById(sectionId);
  if (showEl) showEl.style.display = "";

  // Eğer ana sayfa gibi hero'yu göstermek isterseniz:
  if (sectionId === "hizmetler") {
    document.getElementById("hero").style.display = "";
  }
}

console.log("Script yüklendi.");
