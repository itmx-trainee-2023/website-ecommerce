'use client'
import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ResultsPageProps {
  results: Product[];
}

const ResultsPage: React.FC<ResultsPageProps> = () => {

    const [originalData, setOriginalData] = useState<Product[]>([]);
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    useEffect(() => {
      fetch('https://dummyjson.com/products/search?q=phone')
        .then((res) => res.json())
        .then((data) => {
          // console.log('Data received:', data);
          setOriginalData(data.products);
          setFilteredData(data.products);
        });
    }, []);
  
    const handleSearch = () => {
        const filteredResults = originalData.filter((result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filteredResults);
        // console.log('search:', filteredResults);
      };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };
    
      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      };
    
      return (
        <div>
          <div>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <ul>
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </div>
      );
    };
    
    export default ResultsPage;