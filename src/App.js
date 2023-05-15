import React from 'react';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from "react-cookie";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Router />
      </CookiesProvider>
    </QueryClientProvider>
  )
}

export default App;
