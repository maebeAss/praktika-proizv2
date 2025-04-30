'use client'
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './slider.module.css'
import PortfolioButton from '../portfolioButton/portfolioButton';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  price: string;
  image: StaticImageData | string;
}

interface FeatureListProps {
  features: FeatureItem[];
  visibleCount?: number;
}

interface FeatureListProps {
    features: FeatureItem[];
    visibleCount?: number;
  }
  
  const FeatureList: React.FC<FeatureListProps> = ({ features, visibleCount = 3 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayCount] = useState(visibleCount);
    
    const currentSlide = Math.floor(currentIndex / displayCount) + 1;
  
    const nextSlide = () => {
      setCurrentIndex(prev => 
        prev + displayCount >= features.length ? 0 : prev + displayCount
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex(prev => 
        prev - displayCount < 0 ? features.length - displayCount : prev - displayCount
      );
    };
  
    const visibleFeatures = features.slice(currentIndex, currentIndex + displayCount);
  
  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {visibleFeatures.map((feature) => (
          <div key={feature.id} className={styles.item}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div className={styles.rombik}></div>
                    <p>{feature.title}</p>
                </div>
              <h3>{feature.description}</h3>
              <p>{feature.price}</p>
            </div>
            <div className={styles.imgArea}>
              <Image 
                src={feature.image} 
                alt={feature.title} 
                width={300}
                height={200}
                objectFit="cover"
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.listNav}>
        <div className={styles.sliderControls}>
          <button onClick={prevSlide} aria-label="Previous features">
            <p>Пред.</p>
          </button>
          <div className={styles.counter}>
            {currentSlide}
          </div>
          <button onClick={nextSlide} aria-label="Next features">
            <p>След.</p>
          </button>
        </div>
        <PortfolioButton />
      </div>
    </div>
  );
};

export default FeatureList;