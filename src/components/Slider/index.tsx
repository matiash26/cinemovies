'use client';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { useCallback, useEffect, useRef, useState } from 'react';
import { type IState } from './type';
import './style.css';

const Slider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [positionX, setPositionX] = useState<number>(0);
  const [numberOfSlide, SetnumberOfSlide] = useState<number>(5);
  const elementRef: any | null = useRef(null);

  let element: any = null;
  let slide = 0;
  let limitWidth = 0;

  const prev = (): void => {
    setPositionX((state) => (state - slide < 0 ? state : state - slide));
  };
  const next = (): void => {
    setPositionX((state) => (state > limitWidth ? state : state + slide));
  };

  useEffect(() => {
    element = elementRef.current;
    slide = Number(element.children[0].clientWidth) + 30.4;
    limitWidth = Number(element.scrollWidth) - slide * numberOfSlide;
  }, [positionX, numberOfSlide]);

  const slideResolution = useCallback(
    (width: number, setState: IState['setState']) => {
      if (width === 1302) {
        setState(4);
      } else if (width > 684 && width < 994) {
        setState(3);
      } else if (width > 376 && width < 684) {
        setState(2);
      } else if (width > 0 && width < 376) {
        setState(1);
      }
    },
    []
  );

  const handleGap = useCallback((event: any): void => {
    const width = event.target.outerWidth;
    slideResolution(width, SetnumberOfSlide);
  }, []);

  useEffect(() => {
    const width = window.outerWidth;
    slideResolution(width, SetnumberOfSlide);

    addEventListener('resize', handleGap);
    return () => {
      removeEventListener('resize', handleGap);
    };
  }, []);
  return (
    <div className="sliderContainer">
      <div onClick={prev}>
        <MdOutlineArrowBackIosNew />
      </div>
      <div className="sliderContent">
        <div
          className="sliderList"
          ref={elementRef}
          style={{ right: `${positionX}px` }}
        >
          {children}
        </div>
      </div>
      <div onClick={next}>
        <MdOutlineArrowForwardIos />
      </div>
    </div>
  );
};
export default Slider;
