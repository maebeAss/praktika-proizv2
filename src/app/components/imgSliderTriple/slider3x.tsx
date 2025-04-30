'use client'
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './slider3x.module.css'
import Link from 'next/link';
import Punktt from '../punkt/punkt';

const punkt = [
  {
    description: "Виды работ"
  }
]

interface FeatureItem {
  id: number;
  title: string;
  link: string;
  image: StaticImageData | string;
}

interface FeatureListProps {
  features3x: FeatureItem[];
  visibleCount?: number;
}
  
  const FeatureList3x: React.FC<FeatureListProps> = ({ features3x, visibleCount = 2 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayCount] = useState(visibleCount);
    
    const nextSlide = () => {
      setCurrentIndex(prev => 
        prev + displayCount >= features3x.length ? 0 : prev + displayCount
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex(prev => 
        prev - displayCount < 0 ? features3x.length - displayCount : prev - displayCount
      );
    };
  
    const visibleFeatures = features3x.slice(currentIndex, currentIndex + displayCount);
  
  return (
    <div className={styles.listContainer}>
        <div className={styles.listNav}>
        <Punktt featurePunkt={punkt} />
        <div className={styles.sliderControls}>
          <button onClick={prevSlide} aria-label="Previous features">
            <Image
            src="/svg/arrow-left.svg"
            alt='left'
            width={24}
            height={24}
            className={styles.ico}
            priority
            ></Image>
          </button>
          <button onClick={nextSlide} aria-label="Next features">
            <Image
            src="/svg/arrow-right.svg"
            alt='right'
            width={24}
            height={24}
            className={styles.ico}
            priority
            ></Image>
          </button>
        </div>
      </div>
      <div className={styles.list}>
        {visibleFeatures.map((features3x) => (
          <div key={features3x.id} className={styles.item}>
            <div className={styles.imgArea}>
                <Link
                href={features3x.link}
                className={styles.cont}
                >
                    <Image 
                    src={features3x.image} 
                    alt={features3x.title} 
                    width={300}
                    height={200}
                    objectFit="cover"
                    className={styles.image} />
                    <p className={styles.p}>{features3x.title}</p>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList3x;