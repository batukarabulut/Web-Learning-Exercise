import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PromotionalCards.css';

const PromotionalCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/promotionalcards');
        console.log('Fetched cards:', response.data); // Add this line for debugging
        setCards(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading promotional cards:', error);
        setError('Failed to load cards. Please try again later.');
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  if (loading) return <div className="loading">Loading promotional cards...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="promotional-cards-container">
      {cards.map((card) => (
        <div key={card.id} className="promotional-card">
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            <div 
              className="card-content" 
              style={{ backgroundColor: card.backgroundColor || '#FFA500' }}
            >
              {/* Add debug output for image URL */}
              <div style={{display: 'none'}}>{console.log('Card image URL:', card.image)}</div>
              <img 
                src={card.image} 
                alt={card.title} 
                onError={(e) => {
                  console.error('Image load error:', e);
                  e.target.src = 'https://via.placeholder.com/150'; // Fallback image
                }}
              />
              <div className="card-info">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PromotionalCards;