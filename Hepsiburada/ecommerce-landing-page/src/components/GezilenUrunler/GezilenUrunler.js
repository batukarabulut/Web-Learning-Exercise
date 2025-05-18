import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './GezilenUrunler.css';

const GezilenUrunler = () => {
  const [isOpen, setIsOpen] = useState(false);
  const visitedProducts = useSelector((state) => state.visitedProducts.products);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };    

  // Close the panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.gezilen-urunler-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="gezilen-urunler-wrapper">
      <button 
        className={`gecmis-button ${isOpen ? 'active' : ''}`} 
        onClick={toggleOpen}
      >
        Geçmiş
      </button>
      
      {isOpen && (
        <div className="gezilen-urunler-container">
          <div className="gezilen-urunler-header">
            <h3>Son Gezilen Ürünler</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="gezilen-urunler-list">
            {visitedProducts.length === 0 ? (
              <div className="empty-history">
                <p>Henüz ürün gezmemişsiniz.</p>
              </div>
            ) : (
              visitedProducts.map((product) => (
                <a 
                  key={product.id} 
                  href={product.url}
                  className="visited-product-item"
                >
                  <div className="visited-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="visited-product-info">
                    <h4>{product.name}</h4>
                    <div className="visited-product-price">{product.price}</div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GezilenUrunler;