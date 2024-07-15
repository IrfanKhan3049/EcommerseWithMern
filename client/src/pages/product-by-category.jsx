import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/layout';
import ProductStore from '../store/ProductStore';
import ProductList from '../components/product/product-list'

const ProductByCategory = () => {
  const {ListByCategoryRequest}=ProductStore();
  const {id}=useParams();
  
  useEffect(()=>{
    (async()=>{
      
       await ListByCategoryRequest(id);
      
    })()

  },[id]);

  return (
    <Layout>
      <ProductList/>
    </Layout>
  );
};
export default ProductByCategory;