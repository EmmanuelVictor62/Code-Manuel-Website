import React, {
  useRef,
  useEffect,
  useState,
  RefObject,
  CSSProperties,
} from "react";

import "./animate.scss";

interface AnimateProps {
  children: React.ReactNode;
  from?: CSSProperties;
  to?: CSSProperties;
  className?: string;
  animateOnce?: boolean;
  styles?: CSSProperties;
}

const useElementOnScreen = (ref: RefObject<Element>, rootMargin = "0px") => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
};

const AnimateIn: React.FC<AnimateProps> = ({
  from,
  to,
  children,
  className,
  animateOnce,
  styles,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: "600ms ease-in-out",
  };

  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...styles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...styles,
              ...from,
            }
      }
      className={onScreen ? className : ""}
    >
      {children}
    </div>
  );
};

const FadeIn: React.FC<AnimateProps> = ({ children }) => (
  <AnimateIn className="animate__fade-in">{children}</AnimateIn>
);

const FadeUp: React.FC<AnimateProps> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
  >
    {children}
  </AnimateIn>
);

const ScaleIn: React.FC<AnimateProps> = ({ children }) => (
  <AnimateIn className="animate__scale-in">{children}</AnimateIn>
);

const SlideInRight: React.FC<AnimateProps> = ({ children, animateOnce }) => (
  <AnimateIn className="animate__slide-right" animateOnce={animateOnce}>
    {children}
  </AnimateIn>
);

const SlideInLeft: React.FC<AnimateProps> = ({
  children,
  animateOnce,
  styles,
}) => (
  <AnimateIn className="animate__slide-left" styles={styles}>
    {children}
  </AnimateIn>
);

const FormSlideIn: React.FC<AnimateProps> = ({ children, styles }) => (
  <AnimateIn className="animate__slide-in-form" styles={styles}>
    {children}
  </AnimateIn>
);
export const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
  SlideInRight,
  SlideInLeft,
};
