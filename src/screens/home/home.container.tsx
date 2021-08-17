import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeView from './home.view';
import ProductsService from '../../services/products.service';

export const HomeContainer = () => {
  const dispatch = useDispatch();
  const defaultState = useSelector((state: any) => state);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    ProductsService.fetchProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    console.log("default state is ", defaultState)
    const allProducts = defaultState?.productsResponse?.products?.data;
    const loading = defaultState?.productsResponse?.loading;
    const hasError = defaultState?.productsResponse?.error;

    setTimeout(() => {
      setProducts(allProducts);
      setIsLoading(loading);
      setError(hasError);
    }, 1000);
  }, [defaultState]);

  return <HomeView products={products} />;
};
