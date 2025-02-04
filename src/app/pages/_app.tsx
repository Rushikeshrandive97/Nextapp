// pages/_app.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import { Component } from 'react';



// Create a new instance of QueryClient
const queryClient = new QueryClient();

function MyApp({ component, pageProps }) {
  return (
    // Wrap your application with the QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
