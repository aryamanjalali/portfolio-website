import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

// Handle GitHub Pages SPA routing
(function() {
  // Handle query string routing from 404.html
  var search = window.location.search;
  if (search && search.indexOf('?/') !== -1) {
    var path = search.slice(2).replace(/~and~/g, '&');
    var newPath = '/portfolio-website/' + path;
    window.history.replaceState({}, '', newPath);
  }
})();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

