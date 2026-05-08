import React, { useState, useEffect } from 'react';

const BookApi = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    console.log('fetchBooks called');
    setLoading(true);
    setError(null);
    
    try {
      console.log('Making request to http://localhost:3001/api/books');
      const response = await fetch('http://localhost:3001/api/books', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Response received:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Parse the body JSON string to get the books data
      const parsedData = JSON.parse(result.body);
      const booksData = parsedData.books;
      
      console.log('Books data:', booksData);
      setBooks(booksData);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Failed to fetch: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px' }}>
      <h2>Books from AWS Lambda</h2>
      
      <button onClick={fetchBooks} disabled={loading} style={{ marginBottom: '20px' }}>
        {loading ? 'Loading Books...' : 'Refresh Books'}
      </button>
      
      {error && (
        <div style={{ color: 'red', marginBottom: '20px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {books && books.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {books.map((book) => (
            <div key={book.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '15px',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{book.title}</h3>
              <p style={{ margin: '5px 0', fontStyle: 'italic', color: '#666' }}>
                by {book.author}
              </p>
              <p style={{ margin: '10px 0', fontSize: '14px', lineHeight: '1.4' }}>
                {book.description}
              </p>
              <a 
                href={book.amazonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#ff9900',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                View on Amazon
              </a>
              
              {book.chapters && book.chapters.length > 0 && (
                <div style={{ marginTop: '15px' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Chapters:</h4>
                  <ul style={{ margin: '0', paddingLeft: '20px' }}>
                    {book.chapters.slice(0, 3).map((chapter, index) => (
                      <li key={index} style={{ margin: '5px 0', fontSize: '12px' }}>
                        <a 
                          href={chapter.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#0066cc', textDecoration: 'none' }}
                        >
                          {chapter.title}
                        </a>
                      </li>
                    ))}
                    {book.chapters.length > 3 && (
                      <li style={{ margin: '5px 0', fontSize: '12px', fontStyle: 'italic' }}>
                        ...and {book.chapters.length - 3} more chapters
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <p>No books available. Click "Refresh Books" to load data from AWS Lambda.</p>
          </div>
        )
      )}
    </div>
  );
};

export default BookApi;
