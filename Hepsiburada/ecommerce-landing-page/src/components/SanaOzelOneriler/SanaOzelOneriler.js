import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '../../redux/slices/visitedProductsSlice';
import { fetchSanaOzelOneriler } from '../../services/api';
import './SanaOzelOneriler.css';

const SanaOzelOneriler = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchSanaOzelOneriler();
        setProducts(data);
      } catch (err) {
        setError('Ürün önerileri yüklenirken bir hata oluştu.');
        console.error('Error loading product recommendations:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductClick = (product) => {
    // Add product to visited products in Redux store
    dispatch(addVisitedProduct(product));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  if (loading) {
    return <div className="loading">Ürünler yükleniyor...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="sana-ozel-oneriler">
      <h2 className="section-title">Sana Özel Öneriler</h2>
      <div className="product-grid">
        {products.map((product) => (
          <a
            href={product.url}
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-rating">
                {renderStars(product.rating)}
                <span className="rating-count">({product.reviewCount})</span>
              </div>
              <div className="product-price">{product.price}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SanaOzelOneriler;