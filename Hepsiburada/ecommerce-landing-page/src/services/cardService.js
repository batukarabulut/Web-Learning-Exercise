// This simulates a backend service for now
// In a real application, this would make API calls to your backend


export const fetchPromotionalCards = () => {
  // Simulating a backend API response
  return Promise.resolve([
    {
      id: 1,
      title: "Bu Fiyatlar Kaçmaz",
      description: "Elektronik",
      image: "https://i.imgur.com/JR0SMVd.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 2,
      title: "2 Al 3 Öde İndirimli",
      description: "Acele Et Kaçırma",
      image: "https://i.imgur.com/7V5chIe.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 3,
      title: "7.2k Altın Al",
      description: "Hepsiplay",
      image: "https://i.imgur.com/9MJBzZd.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 4,
      title: "0'dan Başlayan Faiz",
      description: "Hepsiplay",
      image: "https://i.imgur.com/uKvs3mm.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 5,
      title: "İndirimli Fiyatlar",
      description: "Alışveriş Başla",
      image: "https://i.imgur.com/D8cTbvB.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 6,
      title: "Fırsattan Kaçma",
      description: "Sevilen Ürünler",
      image: "https://i.imgur.com/EcUndBC.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 7,
      title: "İlk Alışveriş 100 TL",
      description: "Alışveriş Başla",
      image: "https://i.imgur.com/wByq0iY.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 8,
      title: "Acele Et Kaçırma",
      description: "Evinin İhtiyaçları",
      image: "https://i.imgur.com/JscxWUx.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 9,
      title: "Büyük Fırsat",
      description: "Acele Et Kaçırma",
      image: "https://i.imgur.com/G72fZfq.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 10,
      title: "Peşin Fiyatına Taksit",
      description: "Alışveriş Başla",
      image: "https://i.imgur.com/LI7LPKX.png",
      backgroundColor: "#FFA500", 
      link: "#"
    },
    {
      id: 11,
      title: "Uygun Fiyatlar",
      description: "Teknoloji Ürünleri",
      image: "https://i.imgur.com/JR0SMVd.png",
      backgroundColor: "#FFA500",
      link: "#"
    },
    {
      id: 12,
      title: "Alışveriş Başla",
      description: "Bahçe ve Balkon",
      image: "https://i.imgur.com/xV8HXfZ.png",
      backgroundColor: "#FFA500",
      link: "#"
    }
  ]);
}; 