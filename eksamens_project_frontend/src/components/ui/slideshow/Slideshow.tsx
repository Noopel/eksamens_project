"use client";
import { Children, Dispatch, SetStateAction, useEffect } from "react";

type SlideshowProps = {
  index: number;
  setIndex?: Dispatch<SetStateAction<number>>;
  children?: React.ReactNode;
  autoplay?: boolean;
  slideDuration?: number;
  transitionDuration?: number;
  verticalMode?: boolean;
};

const Slideshow = ({ children, index, setIndex, autoplay, slideDuration = 5, transitionDuration = 0.3, verticalMode }: SlideshowProps) => {
  useEffect(() => {
    if (!autoplay) return;
    if (!setIndex) {
      throw Error("A slideshow with autoplay enabled requires a way to set the index! Provide the setIndex function for it to work");
    }

    let timeout = setTimeout(() => {
      let newIndex = index + 1;
      if (newIndex > Children.count(children) - 1) newIndex = 0;

      setIndex(newIndex);
    }, slideDuration * 1000);

    return () => clearTimeout(timeout);
  }, [index, autoplay]);

  return (
    <section className="w-full h-full overflow-hidden">
      <article
        className={`flex relative w-full h-full transition-all flex-shrink-0 ${verticalMode ? "flex-col" : ""}`}
        style={{
          transform: `translate${verticalMode ? "Y" : "X"}(${-100 * index}%)`,
          transitionDuration: `${transitionDuration}s`,
        }}
      >
        {Children.map(children, (child, i) => (
          <div key={i + "slideshow" + String(child)} className={`[transition:transform] w-full h-full flex-shrink-0`}>
            {child}
          </div>
        ))}
      </article>
    </section>
  );
};

export default Slideshow;
