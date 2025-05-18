const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  console.log("Database initialization started");
  
  db.serialize(() => {
    // Quick Links Table
    db.run(`CREATE TABLE IF NOT EXISTS quick_links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      url TEXT NOT NULL
    )`);

    // Promotional Cards Table
    db.run(`CREATE TABLE IF NOT EXISTS promotional_cards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      backgroundColor TEXT NOT NULL,
      link TEXT NOT NULL
    )`);

    // Main Slider Table
    db.run(`CREATE TABLE IF NOT EXISTS main_slider (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      url TEXT NOT NULL
    )`);

    // Elektronik Firsatlar Table - Updated schema
    db.run(`CREATE TABLE IF NOT EXISTS elektronik_firsatlar (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      url TEXT NOT NULL
    )`);

    // Sana Ozel Oneriler Table
    db.run(`CREATE TABLE IF NOT EXISTS sana_ozel_oneriler (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price TEXT NOT NULL,
      image TEXT NOT NULL,
      url TEXT NOT NULL,
      rating REAL NOT NULL,
      reviewCount INTEGER NOT NULL
    )`);

    // Check if tables have data, if not seed with sample data
    db.get("SELECT COUNT(*) as count FROM promotional_cards", [], (err, row) => {
      if (err) {
        console.error(err.message);
      } else if (row.count === 0) {
        seedSampleData();
      } else {
        console.log("Database already has data, skipping seeding.");
      }
    });
  });
}

// Reset database (uncomment to use)
function resetDatabase() {
  console.log("Resetting database...");
  
  db.serialize(() => {
    db.run("DROP TABLE IF EXISTS quick_links");
    db.run("DROP TABLE IF EXISTS promotional_cards");
    db.run("DROP TABLE IF EXISTS main_slider");
    db.run("DROP TABLE IF EXISTS elektronik_firsatlar");
    db.run("DROP TABLE IF EXISTS sana_ozel_oneriler");
    
    initializeDatabase();
  });
}

// Uncomment this line to reset the database when needed
resetDatabase();

// Seed database with sample data
function seedSampleData() {
  console.log("Seeding database with sample data...");
  
  db.run("DELETE FROM promotional_cards");
  // Seed Promotional Cards

const promotionalCardsData = [
    {"id": 1, "title": "Alışverişe Başla", "description": "Elektronik", "image": "https://images.hepsiburada.net/banners/s/1/360-360/gra-193088-anneler_gunu-tr133902955124416169.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/dv/anneler-gunu-hediyeleri?tabId=2666&trackingId=12769073"},
    {"id": 2, "title": "Küçük Ev Aletleri", "description": "Elektronik", "image": "https://images.hepsiburada.net/banners/s/1/360-360/gra-194309-kucuk_ev_aletleri-anneler-gunu-tr-2133904666457599165.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/dv/kucuk-ev-aletlerinde-indirim-festivali?trackingId=12820184"},
    {"id": 3, "title": "Hepsipay", "description": "Finans", "image": "https://images.hepsiburada.net/banners/s/1/360-360/madenler_bayrami-tr_(3)133904000248075095.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/cuzdanim/?page=wallet&mobilepage=wallet&tab=finvest&trackingId=12819467"},
    {"id": 4, "title": "Hepsipay", "description": "Finans", "image": "https://images.hepsiburada.net/banners/s/1/360-360/hepsipay-dusuk_faizli_kredi-tr133904000551775610.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/cuzdanim/?page=CashLoanFormPage&mobilepage=cashloanform&trackingId=12819468"},
    {"id": 5, "title": "Alışverişe Başla", "description": "Kampanyalar", "image": "https://images.hepsiburada.net/banners/s/1/360-360/dort_dortluk-jenerik-tr133876220509296171.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/dv/dort-dort-kampanya?trackingId=12484408"},
    {"id": 6, "title": "Sevilen Ürünler", "description": "Popüler", "image": "https://images.hepsiburada.net/banners/s/1/360-360/alisverisin_top_listesi-tr133876221138438471.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/dv/alisverisin-top-listesi?trackingId=12484413"},
    {"id": 7, "title": "Alışverişe Başla", "description": "İndirim", "image": "https://images.hepsiburada.net/banners/s/1/360-360/sepette100-tr_(3)133876204051172337.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/kampanyalar/iyi-fiyatli-urunler?siralama=coksatan&trackingId=12768204"},
    {"id": 8, "title": "Elektronik", "description": "Fırsatlar", "image": "https://images.hepsiburada.net/banners/s/1/360-360/elektronik-jenerik-tr_(8)133876193899301994.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/dv/elektronik-firsatlari?trackingId=12820187"},
    {"id": 9, "title": "Acele Et Kaçırma", "description": "Kozmetik", "image": "https://images.hepsiburada.net/banners/s/1/360-360/gra-194320-anneler_gunu_guzellikte_3_taksit-tr133903258200128731.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/dv/kozmetik-parfum-urunlerinde-taksit-firsati?trackingId=12810908"},
    {"id": 10, "title": "Evinin İhtiyaçları", "description": "Ev Ürünleri", "image": "https://images.hepsiburada.net/banners/s/1/360-360/gra-194701-evinin_ihtiyaclari-24_saat_24_firsat-tr133904884623653562.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/dv/kozmetik-parfum-urunlerinde-taksit-firsati?trackingId=12810908"},
    {"id": 11, "title": "Ev Elektroniği", "description": "Elektronik", "image": "https://images.hepsiburada.net/banners/s/1/360-360/ev_elektronigi-tr_(2)133876234269365063.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/dv/ev-elektroniginde-aradigin-firsatlar?trackingId=12484618"},
    {"id": 12, "title": "Tekno Çarşamba", "description": "Teknoloji", "image": "https://images.hepsiburada.net/banners/s/1/360-360/tekno_carsamba-jenerik-tr_(9)133880489074227150.png/format:webp", "backgroundColor": "#FFA500", "link": "https://www.hepsiburada.com/dv/tekno-carsamba?trackingId=12532444"}
  ];
  
  const promotionalCardsStmt = db.prepare("INSERT INTO promotional_cards (title, description, image, backgroundColor, link) VALUES (?, ?, ?, ?, ?)");
  promotionalCardsData.forEach(item => {
    promotionalCardsStmt.run(item.title, item.description, item.image, item.backgroundColor, item.link);
  });
  promotionalCardsStmt.finalize();
  
  // Seed Quick Links
  const quickLinksData = [
    { id: 1, title: "Telefon", image: "https://i.imgur.com/abcdef1.png", url: "#" },
    { id: 2, title: "Bilgisayar", image: "https://i.imgur.com/abcdef2.png", url: "#" },
    { id: 3, title: "Televizyon", image: "https://i.imgur.com/abcdef3.png", url: "#" },
    { id: 4, title: "Kamera", image: "https://i.imgur.com/abcdef4.png", url: "#" },
    { id: 5, title: "Kulaklık", image: "https://i.imgur.com/abcdef5.png", url: "#" },
    { id: 6, title: "Oyun Konsolları", image: "https://i.imgur.com/abcdef6.png", url: "#" },
    { id: 7, title: "Tablet", image: "https://i.imgur.com/abcdef7.png", url: "#" },
    { id: 8, title: "Smartwatch", image: "https://i.imgur.com/abcdef8.png", url: "#" }
  ];
  
  const quickLinksStmt = db.prepare("INSERT INTO quick_links (title, image, url) VALUES (?, ?, ?)");
  quickLinksData.forEach(item => {
    quickLinksStmt.run(item.title, item.image, item.url);
  });
  quickLinksStmt.finalize();
  
  // Seed Main Slider
  const mainSliderData = [
    {
      "title": "Hediyeler Bu Listede",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/slider_(13)133905016886141904.png",
      "url": "https://www.hepsiburada.com/dv/anneler-gunu-hediyeleri?trackingId=12779189"
    },
    {
      "title": "Apple Watch",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/slider133904846128169767.png",
      "url": "https://www.hepsiburada.com/kampanyalar/secili-apple-watch-modellerinde-2000-tl-ye-varan-kupon-indirimi?trackingId=12830889"
    },
    {
      "title": "200TL İndirim",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/gra-194550-slider_(1)133905138609580177.jpg",
      "url": "https://www.hepsiburada.com/kampanyalar/moda-urunlerinde-kupon-firsatlari?siralama=coksatan&trackingId=12835525"
    },
    {
      "title": "Anneler Günü Fırsatları",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/gra-194247-slider133899685155392773.jpg",
      "url": "https://www.hepsiburada.com/kampanyalar/sofralarinizi-guzellestirecek-yemek-takimlarinda-2000-tl-alti-fiyatlar?trackingId=12770388"
    },
    {
      "title": "Bütçe Dostu Fırsatlar",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/gra-184502-slider133893659038386742.jpg",
      "url": "https://www.hepsiburada.com/dv/gida-icecek-urunlerinde-firsatlar?trackingId=12695976"
    },
    {
      "title": "Ev Ürünleri",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/gra-194307-slider133904706292540993.jpg",
      "url": "https://www.hepsiburada.com/kampanyalar/ev-ve-yasam-urunlerinde-kupon-firsatlari?trackingId=12828602"
    },
    {
      "title": "Küçük Ev Aletleri",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/slider133904037966500697.png",
      "url": "https://www.hepsiburada.com/dv/kucuk-ev-aletlerinde-indirim-festivali?trackingId=12819971"
    },
    {
      "title": "Yazıcı Ürünleri",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/category-bilg-hpdeskjetyazicihero-01-05-1133905205559383942.jpg",
      "url": "https://www.hepsiburada.com/kampanyalar/yazici-urunlerinde-kacirilmayacak-firsatlar?trackingId=12828420"
    },
    {
      "title": "Elektronik Fırsatlar",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/gra-179715-ince-slider_(1)133875563737779554.jpg",
      "url": "https://www.hepsiburada.com/dv/elektronik-firsatlari?trackingId=12476073"
    },
    {
      "title": "Premiuma Özel",
      "image": "https://images.hepsiburada.net/banners/s/1/640-200/slider133899549395746155.jpg",
      "url": "https://www.hepsiburada.com/kampanyalar/premiuma-ozel-700-tl-uzerine-15-indirim?trackingId=12769064"
    }
  ];
  
  const mainSliderStmt = db.prepare("INSERT INTO main_slider (title, image, url) VALUES (?, ?, ?)");
  mainSliderData.forEach(item => {
    mainSliderStmt.run(item.title, item.image, item.url);
  });
  mainSliderStmt.finalize();
   
  // Seed Sana Ozel Oneriler
  const onerilerData = [
    {
      "name": "Samsung Galaxy Tab S8",
      "price": "14.999 TL",
      "image": "https://productimages.hepsiburada.net/s/131/550/110000081557885.jpg",
      "url": "#",
      "rating": 4.7,
      "reviewCount": 235
    },
    {
      "name": "Philips Airfryer XXL",
      "price": "7.299 TL",
      "image": "https://productimages.hepsiburada.net/s/41/550/10698988101682.jpg",
      "url": "#",
      "rating": 4.5,
      "reviewCount": 412
    },
    {
      "name": "Dyson V11 Absolute",
      "price": "17.999 TL",
      "image": "https://productimages.hepsiburada.net/s/34/550/10460429246514.jpg",
      "url": "#",
      "rating": 4.8,
      "reviewCount": 187
    },
    {
      "name": "Apple MacBook Air M2",
      "price": "41.999 TL",
      "image": "https://productimages.hepsiburada.net/s/307/550/110000299915996.jpg",
      "url": "#",
      "rating": 4.9,
      "reviewCount": 523
    },
    {
      "name": "Bose QuietComfort Earbuds",
      "price": "5.499 TL",
      "image": "https://productimages.hepsiburada.net/s/76/550/110000018213938.jpg",
      "url": "#",
      "rating": 4.6,
      "reviewCount": 156
    }
  ];
  
  const onerilerStmt = db.prepare("INSERT INTO sana_ozel_oneriler (name, price, image, url, rating, reviewCount) VALUES (?, ?, ?, ?, ?, ?)");
  onerilerData.forEach(item => {
    onerilerStmt.run(item.name, item.price, item.image, item.url, item.rating, item.reviewCount);
  });
  onerilerStmt.finalize();
  
  console.log("Database seeded successfully!");
}

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce Backend API. Available endpoints: /api/quick-links, /api/promotionalcards, /api/main-slider, /api/elektronik-firsatlar, /api/sana-ozel-oneriler');
});

// Promotional Cards API routes
app.get('/api/promotionalcards', (req, res) => {
  console.log("Fetching promotional cards from database");
  db.all("SELECT * FROM promotional_cards", [], (err, rows) => {
    if (err) {
      console.error('Database error:', err.message);
      res.status(500).json({ error: err.message });
      return;
    }
    console.log(`Retrieved ${rows.length} promotional cards`);
    res.json(rows);
  });
});

app.get('/api/promotionalcards/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.get("SELECT * FROM promotional_cards WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    if (row) {
      res.json(row);
    } else {
      res.status(404).json({ message: 'Card not found' });
    }
  });
});

// Quick Links API
app.get('/api/quick-links', (req, res) => {
  console.log("Fetching quick links from database");
  db.all("SELECT * FROM quick_links", [], (err, rows) => {
    if (err) {
      console.error('Database error:', err.message);
      res.status(500).json({ error: err.message });
      return;
    }
    console.log(`Retrieved ${rows.length} quick links`);
    res.json(rows);
  });
});

// Main Slider API
app.get('/api/main-slider', (req, res) => {
  console.log("Fetching main slider data from database");
  db.all("SELECT * FROM main_slider", [], (err, rows) => {
    if (err) {
      console.error('Database error:', err.message);
      res.status(500).json({ error: err.message });
      return;
    }
    console.log(`Retrieved ${rows.length} slider items`);
    res.json(rows);
  });
});

// Sana Ozel Oneriler API
app.get('/api/sana-ozel-oneriler', (req, res) => {
  console.log("Fetching sana ozel oneriler from database");
  db.all("SELECT * FROM sana_ozel_oneriler", [], (err, rows) => {
    if (err) {
      console.error('Database error:', err.message);
      res.status(500).json({ error: err.message });
      return;
    }
    console.log(`Retrieved ${rows.length} oneriler`);
    res.json(rows);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Close database on app termination
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Database connection closed');
    process.exit(0);
  });
});

module.exports = app;