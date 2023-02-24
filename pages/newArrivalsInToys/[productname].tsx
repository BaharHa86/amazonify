import React from 'react'
import {useRouter} from 'next/router';
 
import db from '../../lib/db';
import Product from '../../models/Product'
import {product, dbProduct} from '../../@core/types/types'
 
import ProductDetailTemplate from '../../@core/components/templates/ProductDetailTemplate/ProductDetailTemplate';



interface productDetailPageProps{
  products: product [];
 }

function ProductDetailPage({products}:productDetailPageProps) {

  const router = useRouter();
  const currentSlug = router.query.productname;
  const product = products.find( item => item.slug === currentSlug );
  console.log(product);
 
   
   if( !product){
    return  <div>not found</div>;
 
 }
const {slug,title,description,images,price} = product;
 


  
  
  return (
 
  
   <ProductDetailTemplate slug={slug} title={title}  description={description} images={images} price={price} />
  
  
  )
}

export default ProductDetailPage



export async function getServerSideProps(){

 
 
  await db.connect();
  const products: Array<dbProduct> = await Product.find({category:'newArrivalsInToys'});
   
 
 
   
  return {
    props: {
      products:JSON.parse(JSON.stringify(products))
       
    },
  };
}