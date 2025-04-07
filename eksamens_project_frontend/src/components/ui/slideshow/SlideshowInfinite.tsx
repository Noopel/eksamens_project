"use client";
import { Children, Dispatch, SetStateAction, useEffect } from "react";

type TransitionProperties = {
  duration?: number;
  easing?: string;
  delay?: number;
};

type SlideshowProps = {
  index: number;
  setIndex?: Dispatch<SetStateAction<number>>;
  children?: React.ReactNode;
  autoplay?: boolean;
  slideDuration?: number;
  transition?: TransitionProperties;
  opacityTransition?: boolean;
  id?: string;
  className?: string;
  playOnRender?: boolean;
};

const NO_INDEX_ERROR_MESSAGE = "A slideshow with autoplay enabled requires a way to set the index! Provide the setIndex function for it to work";

const SlideshowInfinite = ({ id, className, children, index, setIndex, autoplay, slideDuration = 5, transition, opacityTransition = true, playOnRender }: SlideshowProps) => {
  const childCount = Children.count(children);
  const middleElementIndex = Math.floor(childCount / 2);

  function nextSlide(nextIndex: number) {
    if (!setIndex) return;
    if (nextIndex > childCount - 1) nextIndex = 0;
    setIndex(nextIndex);
  }

  useEffect(() => {
    if (!autoplay) return;
    if (!setIndex) throw Error(NO_INDEX_ERROR_MESSAGE);
    if (playOnRender) nextSlide(index + 1);
    
    let timeout = setTimeout(() => nextSlide(index + 1), slideDuration * 1000)
    return () => clearTimeout(timeout);
  }, [index, autoplay]);

  return (
    <section id={id || ""} className={"flex relative w-full h-auto flex-shrink-0 overflow-hidden " + (className || "")}>
      {children &&
        Children.map(children, (child, i) => {
          let indexOffset = index - i + middleElementIndex;

          if (indexOffset < 0) {
            indexOffset = childCount + indexOffset;
          } else if (indexOffset > childCount - 1) {
            indexOffset = indexOffset - childCount;
          }

          return (
            <div
              key={i + "slideshow" + String(child)}
              className={"w-full h-full flex-shrink-0" + (opacityTransition ? " [transition:transform,opacity]" : " [transition:transform]")}
              style={{
                zIndex: Math.min(indexOffset - middleElementIndex + 1, (indexOffset - middleElementIndex) * -1 + 1, 0),
                transform: `translateX(${-100 * i + 100 * (middleElementIndex - indexOffset)}%)`,
                opacity: index != i && opacityTransition ? 0 : 1,
                transitionDuration: `${transition?.duration || 0.3}s`,
                transitionTimingFunction: transition?.easing || "ease",
                transitionDelay: `${transition?.delay || 0}s`,
              }}
            >
              {child}
            </div>
          );
        })}
    </section>
  );
};

export default SlideshowInfinite;
