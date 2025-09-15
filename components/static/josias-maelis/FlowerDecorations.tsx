import React from 'react';
import styles from '@/styles/StaticWedding.module.css';

interface FlowerDecorationsProps {
  position: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

export const DelicateFlower: React.FC<FlowerDecorationsProps> = ({ 
  position, 
  color = '#9C8329', 
  size = 'medium' 
}) => {
  const sizeMap = {
    small: 24,
    medium: 32,
    large: 40
  };

  const flowerSize = sizeMap[size];

  return (
    <div className={`${styles.flowerDecoration} ${styles[`flower-${position}`]}`}>
      <svg
        width={flowerSize}
        height={flowerSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Petals */}
        <path
          d="M16 4C18.5 4 20 6.5 20 9C20 11.5 18.5 14 16 14C13.5 14 12 11.5 12 9C12 6.5 13.5 4 16 4Z"
          fill={color}
          opacity="0.8"
        />
        <path
          d="M16 18C18.5 18 20 20.5 20 23C20 25.5 18.5 28 16 28C13.5 28 12 25.5 12 23C12 20.5 13.5 18 16 18Z"
          fill={color}
          opacity="0.8"
        />
        <path
          d="M4 16C4 13.5 6.5 12 9 12C11.5 12 14 13.5 14 16C14 18.5 11.5 20 9 20C6.5 20 4 18.5 4 16Z"
          fill={color}
          opacity="0.8"
        />
        <path
          d="M28 16C28 13.5 25.5 12 23 12C20.5 12 18 13.5 18 16C18 18.5 20.5 20 23 20C25.5 20 28 18.5 28 16Z"
          fill={color}
          opacity="0.8"
        />
        {/* Center */}
        <circle cx="16" cy="16" r="3" fill={color} opacity="0.9" />
        {/* Small decorative dots */}
        <circle cx="8" cy="8" r="1" fill={color} opacity="0.6" />
        <circle cx="24" cy="8" r="1" fill={color} opacity="0.6" />
        <circle cx="8" cy="24" r="1" fill={color} opacity="0.6" />
        <circle cx="24" cy="24" r="1" fill={color} opacity="0.6" />
      </svg>
    </div>
  );
};

export const VineFlower: React.FC<FlowerDecorationsProps> = ({ 
  position, 
  color = '#9C8329', 
  size = 'medium' 
}) => {
  const sizeMap = {
    small: 40,
    medium: 60,
    large: 80
  };

  const flowerSize = sizeMap[size];

  return (
    <div className={`${styles.flowerDecoration} ${styles[`flower-${position}`]}`}>
      <svg
        width={flowerSize}
        height={flowerSize}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vine stem */}
        <path
          d="M30 5C30 5 25 15 20 25C15 35 20 45 30 50C40 45 45 35 40 25C35 15 30 5 30 5Z"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        {/* Small flowers along the vine */}
        <circle cx="25" cy="20" r="2" fill={color} opacity="0.8" />
        <circle cx="35" cy="30" r="2" fill={color} opacity="0.8" />
        <circle cx="28" cy="40" r="2" fill={color} opacity="0.8" />
        {/* Leaves */}
        <ellipse cx="22" cy="15" rx="3" ry="1.5" fill={color} opacity="0.6" transform="rotate(-30 22 15)" />
        <ellipse cx="38" cy="25" rx="3" ry="1.5" fill={color} opacity="0.6" transform="rotate(30 38 25)" />
        <ellipse cx="32" cy="35" rx="3" ry="1.5" fill={color} opacity="0.6" transform="rotate(-45 32 35)" />
      </svg>
    </div>
  );
};

export const CornerFlower: React.FC<FlowerDecorationsProps> = ({ 
  position, 
  color = '#9C8329', 
  size = 'medium' 
}) => {
  const sizeMap = {
    small: 30,
    medium: 45,
    large: 60
  };

  const flowerSize = sizeMap[size];

  return (
    <div className={`${styles.flowerDecoration} ${styles[`flower-${position}`]}`}>
      <svg
        width={flowerSize}
        height={flowerSize}
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main flower */}
        <path
          d="M22.5 5C25 5 27 7 27 9.5C27 12 25 14 22.5 14C20 14 18 12 18 9.5C18 7 20 5 22.5 5Z"
          fill={color}
          opacity="0.8"
        />
        <path
          d="M22.5 31C25 31 27 33 27 35.5C27 38 25 40 22.5 40C20 40 18 38 18 35.5C18 33 20 31 22.5 31Z"
          fill={color}
          opacity="0.8"
        />
        <path
          d="M5 22.5C5 20 7 18 9.5 18C12 18 14 20 14 22.5C14 25 12 27 9.5 27C7 27 5 25 5 22.5Z"
          fill={color}
          opacity="0.8"
        />
        <path
          d="M40 22.5C40 20 38 18 35.5 18C33 18 31 20 31 22.5C31 25 33 27 35.5 27C38 27 40 25 40 22.5Z"
          fill={color}
          opacity="0.8"
        />
        {/* Center */}
        <circle cx="22.5" cy="22.5" r="2.5" fill={color} opacity="0.9" />
        {/* Small decorative elements */}
        <circle cx="10" cy="10" r="1" fill={color} opacity="0.5" />
        <circle cx="35" cy="10" r="1" fill={color} opacity="0.5" />
        <circle cx="10" cy="35" r="1" fill={color} opacity="0.5" />
        <circle cx="35" cy="35" r="1" fill={color} opacity="0.5" />
      </svg>
    </div>
  );
};
