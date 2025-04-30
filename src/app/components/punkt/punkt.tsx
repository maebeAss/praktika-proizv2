'use client'
import React from 'react';
import styles from './punkt.module.css'

interface Punkt {
    description: string;
}

interface FeaturePunktProps {
    featurePunkt: Punkt[];
}

const Punktt: React.FC<FeaturePunktProps> = ({ featurePunkt }) => {
    return (
        <>
            {featurePunkt.map((punkt, index) => (
                <div key={index} className={styles.punkt}>
                    <div className={styles.rombik}></div>
                    <p>{punkt.description}</p>
                </div>
            ))}
        </>
    )
}

export default Punktt;