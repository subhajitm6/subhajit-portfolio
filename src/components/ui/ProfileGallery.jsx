import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const ProfileGallery = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const lastScrollTime = useRef(0);

  // Normalize images list: ensure at least 3 items for cinematic 3D representation
  const items = React.useMemo(() => {
    if (!images || images.length === 0) return [];
    if (images.length === 1) return [images[0], images[0], images[0]];
    if (images.length === 2) {
      // Repeat [img1, img2, img1, img2] so looping between 3 slots is completely natural
      return [images[0], images[1], images[0], images[1]];
    }
    return images;
  }, [images]);

  const count = items.length;

  const nextImage = useCallback(() => {
    if (count <= 1) return;
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prevImage = useCallback(() => {
    if (count <= 1) return;
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevImage, nextImage]);

  // Smooth mouse wheel navigation inside the carousel (throttled to avoid rapid skipping)
  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 400) return;

    if (Math.abs(e.deltaY) > 20 || Math.abs(e.deltaX) > 20) {
      if (e.deltaY > 0 || e.deltaX > 0) {
        nextImage();
      } else {
        prevImage();
      }
      lastScrollTime.current = now;
    }
  };

  // Drag / Touch Swipe gesture handling
  const [dragStartX, setDragStartX] = useState(null);

  const handleDragStart = (clientX) => {
    setDragStartX(clientX);
  };

  const handleDragEnd = (clientX) => {
    if (dragStartX === null) return;
    const diff = dragStartX - clientX;
    const threshold = 40;
    if (diff > threshold) {
      nextImage();
    } else if (diff < -threshold) {
      prevImage();
    }
    setDragStartX(null);
  };

  if (items.length === 0) return null;

  // Determine relative position (-1: left, 0: center, 1: right)
  const getPosition = (index) => {
    const diff = (index - activeIndex + count) % count;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === count - 1) {
      return diff === 1 ? 'right' : 'left';
    }
    return 'hidden';
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      className="relative flex flex-col items-center select-none w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[660px]"
      style={{ perspective: '1100px' }}
    >
      {/* Background Cinematic Glows */}
      <div className="absolute -inset-6 bg-gradient-to-r from-spidey-red/20 via-spidey-blue/20 to-spidey-red/20 blur-3xl rounded-full opacity-60 pointer-events-none animate-pulse-glow" />

      {/* 3D Carousel Stage */}
      <div
        className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {items.map((item, index) => {
          const pos = getPosition(index);

          // 3D positioning styles for 3 visible cards
          let transformStyle = '';
          let zIndex = 10;
          let opacity = 0;
          let filter = 'blur(4px)';
          let isInteractive = false;

          if (pos === 'center') {
            transformStyle = 'translateX(0%) translateZ(60px) rotateY(0deg) scale(1)';
            zIndex = 30;
            opacity = 1;
            filter = 'none';
            isInteractive = true;
          } else if (pos === 'left') {
            transformStyle = 'translateX(-52%) translateZ(-40px) rotateY(26deg) scale(0.82)';
            zIndex = 20;
            opacity = 0.72;
            filter = 'brightness(0.7) contrast(0.95)';
            isInteractive = true;
          } else if (pos === 'right') {
            transformStyle = 'translateX(52%) translateZ(-40px) rotateY(-26deg) scale(0.82)';
            zIndex = 20;
            opacity = 0.72;
            filter = 'brightness(0.7) contrast(0.95)';
            isInteractive = true;
          } else {
            transformStyle = 'translateX(0%) translateZ(-160px) scale(0.5)';
            zIndex = 0;
            opacity = 0;
          }

          return (
            <div
              key={index}
              onClick={() => {
                if (pos === 'left') prevImage();
                if (pos === 'right') nextImage();
              }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[280px] md:w-[320px] h-[340px] sm:h-[400px] md:h-[450px] transition-all duration-500 ease-out origin-center ${
                pos === 'center' ? 'cursor-default' : 'cursor-pointer hover:opacity-90'
              }`}
              style={{
                transform: `translate(-50%, -50%) ${transformStyle}`,
                zIndex,
                opacity,
                filter,
                pointerEvents: isInteractive ? 'auto' : 'none',
              }}
            >
              {/* Card Container */}
              <div
                className={`relative w-full h-full rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300 ${
                  pos === 'center'
                    ? 'border-spidey-red/50 shadow-[0_0_30px_rgba(225,29,72,0.35)]'
                    : 'border-white/10 hover:border-spidey-blue/40 shadow-xl'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt || 'Portfolio photo'}
                  className="w-full h-full object-cover object-top pointer-events-none select-none"
                  draggable={false}
                />

                {/* Sublte Glass Gradient on sides */}
                {pos !== 'center' && (
                  <div className="absolute inset-0 bg-spidey-black/30 backdrop-blur-[0.5px] transition-colors" />
                )}

                {/* Center Card Corner Accents */}
                {pos === 'center' && (
                  <>
                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-spidey-red" />
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-spidey-blue" />
                  </>
                )}
              </div>
            </div>
          );
        })}

        {/* Navigation Arrow Overlays */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          aria-label="Previous image"
          className="absolute -left-2 sm:left-2 top-1/2 -translate-y-1/2 z-40 p-2.5 rounded-full bg-slate-900/80 hover:bg-spidey-red text-white backdrop-blur-md border border-white/10 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          aria-label="Next image"
          className="absolute -right-2 sm:right-2 top-1/2 -translate-y-1/2 z-40 p-2.5 rounded-full bg-slate-900/80 hover:bg-spidey-blue text-white backdrop-blur-md border border-white/10 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <HiChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="mt-3 flex items-center gap-2 z-30 px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-lg">
        {images.map((_, idx) => {
          const isSelected = activeIndex % images.length === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to photo ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isSelected
                  ? 'w-7 bg-spidey-red shadow-[0_0_8px_#E11D48]'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileGallery;
