import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { ToastContainer } from 'react-toastify';
import Header from './components/header';
import Footer from './components/footer';

const queryClient = new QueryClient();
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='min-h-screen flex flex-col justify-between'>
        <Header />
        <App />
        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </QueryClientProvider>
  </React.StrictMode>,
);
