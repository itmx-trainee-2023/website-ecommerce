"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (
    productName: string,
    productPrice: number,
    productimg: string
  ) => void;
}

interface Product {
  name: string;
  price: number;
  productimg: string;
  quantity?: number;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (
    productName: string,
    productPrice: number,
    productimg: string
  ) => {
    const newProduct: Product = {
      name: productName,
      price: productPrice,
      productimg: productimg,
      quantity: 1,
    };

    setCart([...cart, newProduct]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
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
