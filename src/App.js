import React from 'react';
import ProductTable from './components/ProductTable';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ProductTable />
    </ErrorBoundary>
  );
}

export default App;
