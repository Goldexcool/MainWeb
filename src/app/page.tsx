import React from 'react';
import Header from '../components/header'
import Category from '../components/category'
import Hero from '@/components/hero';
import Stat from '@/components/stat';
import Why from '@/components/why';
import Product from '../components/product'
const Page = () => {
  return (
    <div>
     <Header /> 
     <Category />
     <Hero />
     <Stat />
     <Why />
     <Product />
    </div>
  );
}

export default Page;
