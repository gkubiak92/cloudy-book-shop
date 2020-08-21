import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { listBooks } from 'api/queries';
import { processOrder } from 'api/mutations';
import { BookContext } from './types';

const BookContext = React.createContext<Partial<BookContext>>({
  books: [],
  featured: [],
  loading: false,
});

const BookProvider: React.FC = ({ children }) => {
  const [books, setBooks] = useState<any>([]);
  const [featured, setFeatured] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const checkout = async (orderDetails: any) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails,
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log('Order is successful');
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBooks = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listBooks,
        authMode: 'API_KEY',
      });
      const books = data.listBooks.items;
      const featured = books.filter((book: any) => {
        return !!book.featured;
      });
      setBooks(books);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BookContext.Provider value={{ books, featured, loading, checkout }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
