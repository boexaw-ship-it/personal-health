document.addEventListener("DOMContentLoaded", () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => console.log(err));
    }

    // ဆီးစစ်သည့်ရက်စွဲ တင်ခြင်း
    const dateDisplay = document.getElementById('urine-date-display');
    if (dateDisplay && typeof URINE_TEST_DATE !== 'undefined') {
        dateDisplay.innerText = URINE_TEST_DATE;
    }

    // ဆေးစာရင်းများအား UI ပေါ်တင်ခြင်း
    if (typeof MEDICINE_DATA !== 'undefined' && Array.isArray(MEDICINE_DATA)) {
        renderPremiumMedicines(MEDICINE_DATA);
    }
});

function renderPremiumMedicines(medicines) {
    const gridElement = document.getElementById('medicine-grid');
    if (!gridElement) return;
    
    gridElement.innerHTML = ''; 
    
    medicines.forEach(med => {
        const imgSrc = med.image ? med.image : 'assets/images/placeholder.png';
        
        const cardHtml = `
            <div class="med-glass-card">
                <div class="med-image-slot">
                    <img src="${imgSrc}" alt="${med.name || 'Medicine'}" onerror="this.style.display='none'; this.parentNode.innerText='💊';">
                </div>
                <div class="med-details">
                    <h3>${med.name || 'အမည်မသိဆေး'}</h3>
                    <p class="brand">${med.brand || 'General'}</p>
                    <div class="stock-badge-pill">
                        လက်ကျန်: ${med.quantity || 0} ${med.unit_type || 'မျိုး'}
                    </div>
                </div>
            </div>
        `;
        gridElement.insertAdjacentHTML('beforeend', cardHtml);
    });
}
