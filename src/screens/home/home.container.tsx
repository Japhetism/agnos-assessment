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
  const [orders, setOrders] = useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0)
  const [discount, setDiscount] = useState(0);
  const [grandtotal, setGrandtotal] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    ProductsService.fetchProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const allProducts = defaultState?.productsResponse?.products?.data;
    const loading = defaultState?.productsResponse?.loading;
    const hasError = defaultState?.productsResponse?.error;

    setTimeout(() => {
      setProducts(allProducts);
      setIsLoading(loading);
      setError(hasError);
    }, 1000);
  }, [defaultState]);

  const addToOrder = (product: any, quantity: number) => {
    product.quantity = quantity;
    const previousOrder: any[] = orders;
    previousOrder.push(product);
    const accumulatedSubtotal = subtotal + (product.price * quantity)
    const accumulatedTax = tax + ((product.tax / 100) * (product.price * quantity))
    const accumulatedDiscount = product.discount ? discount + ((discount / 100) * (product.price * quantity)) : 0;
    const accumulatedGrandtotal = accumulatedSubtotal + accumulatedTax - accumulatedDiscount;
    setTimeout(() => {
      setOrders((previousOrder: any) => previousOrder)
      setSubtotal(accumulatedSubtotal)
      setTax(accumulatedTax)
      setGrandtotal(accumulatedGrandtotal)
      setDiscount(accumulatedDiscount)
      setOpenModal(false);
    }, 5000);
  }

  return <HomeView 
    products={products} 
    orders={orders} 
    addToOrder={addToOrder} 
    openModal={openModal} 
    discount={discount}
    subtotal={subtotal}
    tax={tax}
    grandtotal={grandtotal}
  />;
};
