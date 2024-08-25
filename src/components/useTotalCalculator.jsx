import { useState, useEffect } from 'react';

const useTotalCalculator = (initialProducts) => {
  const [products, setProducts] = useState(initialProducts);
  const [total, setTotal] = useState(0);

  // Función para calcular el total
  const calculateTotal = () => {
    let calculatedTotal = 0;
    products.forEach(product => {
      calculatedTotal += product.precio * product.cantidad;
    });
    setTotal(calculatedTotal);
  };

  // Efecto para calcular el total cuando cambia el arreglo de productos
  useEffect(() => {
    calculateTotal();
  }, [products]);

  // Función para actualizar la cantidad de un producto por su ID           
  const updateQuantity = (productId, newQuantity) => {
    const updatedProducts = products.map(product =>
      product.idProducto === productId ? { ...product, cantidad: newQuantity } : product
    );
    setProducts(updatedProducts);
  };

  return { products, total, updateQuantity };
};

export default useTotalCalculator;