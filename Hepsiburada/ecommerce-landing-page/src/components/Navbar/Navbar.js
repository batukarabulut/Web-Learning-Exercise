import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const menuItems = [
    { name: 'Elektronik', link: '#', hasSubmenu: true, 
      submenu: [
        { name: 'Cep Telefonu', link: '#' },
        { name: 'Bilgisayar', link: '#' },
        { name: 'Televizyon', link: '#' },
        { name: 'Tablet', link: '#' }
      ] 
    },
    { name: 'Moda', link: '#', hasSubmenu: true,
      submenu: [
        { name: 'Kadın', link: '#' },
        { name: 'Erkek', link: '#' },
        { name: 'Çocuk', link: '#' }
      ]
    },
    { name: 'Ev, Yaşam, Kırtasiye, Ofis', link: '#', hasSubmenu: true,
      submenu: [
        { name: 'Mobilya', link: '#' },
        { name: 'Ev Tekstili', link: '#' },
        { name: 'Ofis Malzemeleri', link: '#' }
      ]
    },
    { name: 'Anne, Bebek, Oyuncak', link: '#', hasSubmenu: true,
      submenu: [
        { name: 'Bebek Bezi', link: '#' },
        { name: 'Bebek Maması', link: '#' },
        { name: 'Oyuncaklar', link: '#' }
      ]
    },
    { name: 'Spor, Outdoor', link: '#', hasSubmenu: false },
    { name: 'Kozmetik, Kişisel Bakım', link: '#', hasSubmenu: false },
    { name: 'Süpermarket, Pet Shop', link: '#', hasSubmenu: false },
    { name: 'Kitap, Müzik, Film, Hobi', link: '#', hasSubmenu: false },
  ];

  return (
    <div className="navbar-container">
      <div className="top-bar">
        <div className="logo">
          <h1>Hepsiburada</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Ürün, kategori veya marka ara..." />
          <button><i className="search-icon">🔍</i></button>
        </div>
        <div className="user-actions">
          <a href="#" className="action-link">Giriş Yap</a>
          <a href="#" className="action-link">Favorilerim</a>
          <a href="#" className="cart-link">Sepetim</a>
        </div>
      </div>

      <div className="color-bar">
        <div className="segment" style={{ backgroundColor: '#FF6000', flex: 4 }}></div>
        <div className="segment" style={{ backgroundColor: '#0082FC', flex: 1.8 }}></div>
        <div className="segment" style={{ backgroundColor: '#8B3FFC', flex: 1.8 }}></div>
        <div className="segment" style={{ backgroundColor: '#5AD84F', flex: 1.8 }}></div>
        <div className="segment" style={{ backgroundColor: '#7622DA', flex: 2 }}></div>
      </div>
      
      <div className="category-nav">
        <ul className="main-menu">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={`menu-item ${item.hasSubmenu ? 'has-submenu' : ''}`}
            >
              <a href={item.link}>
                {item.name} {item.hasSubmenu && <span className="dropdown-icon">▾</span>}
              </a>
              
              {item.hasSubmenu && (
                <ul className="submenu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="submenu-item">
                      <a href={subItem.link}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar; 