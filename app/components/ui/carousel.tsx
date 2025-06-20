import React, {
    useRef,
    useState,
    useEffect,
    useCallback,
    KeyboardEvent,
    ReactNode,
  } from "react";
  
  interface CarouselProps {
    children: ReactNode;
    className?: string;
  }
  
  export function Carousel({ children, className = "" }: CarouselProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
  
    const updateScrollButtons = useCallback(() => {
      const container = containerRef.current;
      if (!container) return;
  
      setCanScrollPrev(container.scrollLeft > 0);
      setCanScrollNext(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }, []);
  
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
  
      updateScrollButtons();
      container.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
  
      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }, [updateScrollButtons]);
  
    const scrollByAmount = (amount: number) => {
      containerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
    };
  
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        scrollByAmount(300);
      } else if (e.key === "ArrowLeft") {
        scrollByAmount(-300);
      }
    };
  
    return (
      <div
        className={`relative focus:outline-none ${className}`}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
      >
        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 px-4 py-2"
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1}`}
            >
              {child}
            </div>
          ))}
        </div>
  
        <button
          onClick={() => scrollByAmount(-300)}
          disabled={!canScrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow disabled:opacity-50"
          aria-label="Previous Slide"
        >
          ←
        </button>
  
        <button
          onClick={() => scrollByAmount(300)}
          disabled={!canScrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow disabled:opacity-50"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>
    );
  }
  