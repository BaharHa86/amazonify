import React, {useState } from 'react'
import Flex from '../../../atoms/Flex/Flex'
import Image from 'next/image';
import Styles from './ProductSlider.module.scss';

interface ProductSliderProps{
  images:{
    _id:string;
    url:string;
    sizes:number[];
  }[];
  title:string;
}

function ProductSlider({images, title}:ProductSliderProps) {

  const [index, setIndex] = useState('1');
  const currentImage = images.find(image => image._id === index)
  
  return (
  <Flex variant='btwn_cntr' className={Styles.product_slider}>
    
    <Flex variant='col_cntr_strt' className={Styles.product_slider_images}>
     
        {images.map(image =>{
          return(
            <Flex variant='cntr_cntr'className={Styles.product_slider_image} key={image._id} onMouseEnter={() => setIndex(image._id)}>
            <Image src={image.url} alt={title} width={50} height={50} />
            </Flex>
          )
        })}
     
    </Flex>
    <Flex>
        <Image src={currentImage ? currentImage.url : images[0].url} alt={title} width={300} height={300} />
    </Flex>
  </Flex>
  )
}

export default ProductSlider