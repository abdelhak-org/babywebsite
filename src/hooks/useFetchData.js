import React, { useState, useEffect } from 'react';
import { db } from '../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

const useFetchData = (collectionName) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const dataRef = collection(db, collectionName);
        const snapshot = await getDocs(dataRef);
        const fetchedData = snapshot.docs.map((doc) => doc.data());
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [collectionName]); 
  return {
    isPending,
    data,
    error,
  };
};

export default useFetchData;
