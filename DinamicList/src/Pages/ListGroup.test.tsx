import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ListGroup from './ListGroup'; 
import '@testing-library/jest-dom';

// Mock Apollo Client setup                         
const mockClient = new ApolloClient({            
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

test('renders the ListGroup component', async () => {
  render(
    <ApolloProvider client={mockClient}>
      <ListGroup />
    </ApolloProvider>
  );

  expect(screen.getByPlaceholderText('Search character')).toBeInTheDocument();
});
