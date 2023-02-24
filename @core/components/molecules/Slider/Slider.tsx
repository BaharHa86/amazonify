import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Image from 'next/image';
import styles from './Slider.module.scss';
import LinkBox from '../../atoms/LinkBox/LinkBox';
import Overlay from '../../atoms/Overlay/Overlay';
import slider from '../../../data/slider';

function Slider() {
  return (
    <div className={styles.slider_wrapper}>
      <Overlay variant="slider" />
      <Carousel
        className={styles.slider}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {slider.map((item) => {
          return (
            <div key={item.slug}>
              <LinkBox
                variant="slider_link"
                key={item.slug}
                href={item.href}
                className={styles.link}
              >
                <Image
                  key={item.slug}
                  src={item.url}
                  alt="slider"
                  width={1500}
                  height={600}
                  priority
                />
              </LinkBox>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
