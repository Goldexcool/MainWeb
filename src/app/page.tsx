import React from 'react';
import Header from '../components/header'
import Category from '../components/category'
import Hero from '@/components/hero';
import Stat from '@/components/stat';
import Why from '@/components/why';
import Product from '../components/product'
import ProPage from '../components/proPage'
const Page = () => {
  return (
    <div>
     <Header /> 
     <Category />
     <Hero />
     <Stat />
     <Why />
     <Product />
     <ProPage />
    </div>
  );
}

export default Page;
