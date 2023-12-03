import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const loadingJSX = <h3 className="p-4 mt-8 mx-auto text-2xl text-gray">Content Loading...</h3>;
  const errorJSX = <h3 className="p-4 mt-8 mx-auto text-2xl text-red-500">Error Loading Content</h3>;

  return (
    <div className="max-w-[1536px] mx-auto pt-16 flex min-h-screen px-auto gap-2 flex-wrap">
      {loading && loadingJSX}
      {error && errorJSX}
      {products.length > 0 &&
        products.map((product) => (
          <Card
            key={product.id}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
    </div>
  );
};

export default Shop;
