// 💡 နောက်ဆုံး ဆီးစစ်ခဲ့သည့် ရက်စွဲ
const URINE_TEST_DATE = "2026-July-08"; 

// 💡 ဆေး ၁၅ မျိုး၏ စာရင်း (Vertical Format - အမှန်ပြင်ပြီး)
const MEDICINE_DATA = [
    { 
        "id": 1, 
        "name": "Cream of Magnesium", 
        "brand": "MOM 300mg", 
        "image": "assets/images/com.png", 
        "unit_type": "ဗူး", 
        "quantity": 4 
    },
    { 
        "id": 2, 
        "name": "Celiv TABLET", 
        "brand": "BP 100mg",    /* 💡 FIX: ကျန်ခဲ့သော ကော်မာ ( , ) အား ထည့်သွင်းထားပါသည် */
        "image": "assets/images/cv.png", 
        "unit_type": "ဗူး", 
        "quantity": 3 
    },
    { 
        "id": 3, 
        "name": "AiR X", 
        "brand": "‌‌‌‌လေဆေး", 
        "image": "assets/images/ax.png", 
        "unit_type": "ကဒ်", 
        "quantity": 2 
    },
    { 
        "id": 4, 
        "name": "Neurofort", 
        "brand": "အာရုံကြောအားဆေး", 
        "image": "assets/images/neu.png", 
        "unit_type": "ကဒ်", 
        "quantity": 2 
    },
    { 
        "id": 5, 
        "name": "Bioplasmatem", 
        "brand": "အနာထည့်ဆေး", 
        "image": "assets/images/bio.png", 
        "unit_type": "ဗူး", 
        "quantity": 1 
    },
    { 
        "id": 6, 
        "name": "Lidomax Gel", 
        "brand": "ဆီးချူgel", 
        "image": "assets/images/lid.png", 
        "unit_type": "ဗူး", 
        "quantity": 3 
    },
    { 
        "id": 7, 
        "name": "Methylated", 
        "brand": "အရက်ပြန်", 
        "image": "assets/images/met.png", 
        "unit_type": "ဗူး", 
        "quantity": 2 
    },
    { 
        "id": 8, 
        "name": "Sodium of chloride", 
        "brand": "NS 500ml", 
        "image": "assets/images/placeholder.png", 
        "unit_type": "ဗူး", 
        "quantity": 2 
    },
    { 
        "id": 9, 
        "name": "Dura Condom", 
        "brand": "ဆီး တပ် ကွန်ဒုံး", 
        "image": "assets/images/cd.png", 
        "unit_type": "အခု", 
        "quantity": 70 
    },
    { 
        "id": 10, 
        "name": "ဆီးချူပိုက်", 
        "brand": "No 7", 
        "image": "assets/images/chu.png", 
        "unit_type": "ချောင်း",
        "quantity": 6 
    },
    { 
        "id": 11, 
        "name": "3M Marpotape", 
        "brand": "½ 24", 
        "image": "assets/images/placeholder.png", 
        "unit_type": "ဗူး", 
        "quantity": 2 
    },
    { 
        "id": 12, 
        "name": "Surgical Gloves", 
        "brand": "ဆီးဆေး", 
        "image": "assets/images/sg.png", 
        "unit_type": "လုံး", 
        "quantity": 0 
    },
    { 
        "id": 13, 
        "name": "ဆီးဆေးပိုက်", 
        "brand": "2 way 16fr", 
        "image": "assets/images/uri.png", 
        "unit_type": "ချောင်း",
        "quantity": 5 
    },
    { 
        "id": 14, 
        "name": "ဆေးထိုး slin", 
        "brand": "500mg", 
        "image": "assets/images/sl.png", 
        "unit_type": "ချောင်း", 
        "quantity": 0 
    },
    { 
        "id": 15, 
        "name": "Burmeton", 
        "brand": "Anti-Histamine", 
        "image": "assets/images/placeholder.png", 
        "unit_type": "ကဒ်", 
        "quantity": 3 
    }
];
