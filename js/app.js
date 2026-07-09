document.addEventListener("DOMContentLoaded", () => {
    // ၁။ ဆီးစစ်သည့်ရက်စွဲကို UI ပေါ်တင်ခြင်း (ဒေတာရှိမရှိ အရင်စစ်ဆေးပါသည်)
    const dateDisplay = document.getElementById('urine-date-display');
    if (dateDisplay) {
        if (typeof URINE_TEST_DATE !== 'undefined') {
            dateDisplay.innerText = URINE_TEST_DATE;
        } else {
            dateDisplay.innerText = "သတ်မှတ်ချက်မရှိပါ။";
        }
    }

    // ၂။ ဆေးစာရင်းများအား ပရီမီယံ UI ပေါ်တင်ခြင်း
    if (typeof MEDICINE_DATA !== 'undefined' && Array.isArray(MEDICINE_DATA)) {
        renderPremiumMedicines(MEDICINE_DATA);
    } else {
        const gridElement = document.getElementById('medicine-grid');
        if (gridElement) {
            gridElement.innerHTML = `<p style="text-align:center; color:#94A3B8; font-size:0.9rem; padding:20px;">data.js ဖိုင်ကို ဖတ်၍မရပါသဖြင့် config ကို ပြန်စစ်ပါ။</p>`;
        }
    }
});

function renderPremiumMedicines(medicines) {
    const gridElement = document.getElementById('medicine-grid');
    if (!gridElement) return;
    
    gridElement.innerHTML = ''; 
    
    medicines.forEach(med => {
        // 💡 FIX: ဓာတ်ပုံမရှိပါက ရိုးရိုး Static Icon ပြသရန် လမ်းကြောင်းလွှဲပေးခြင်း
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
                        📦 လက်ကျန်: ${med.quantity || 0} ${med.unit_type || 'မျိုး'}
                    </div>
                </div>
            </div>
        `;
        gridElement.insertAdjacentHTML('beforeend', cardHtml);
    });
}
