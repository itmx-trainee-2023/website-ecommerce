"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextProps {
  cart: Product[];
  addToCart: (productName: string, productPrice: number) => void;
}

interface Product {
  name: string;
  price: number;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (productName: string, productPrice: number) => {
    const newProduct: Product = {
      name: productName,
      price: productPrice,
    };

    setCart([...cart, newProduct]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
