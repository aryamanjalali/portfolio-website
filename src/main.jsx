import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

// Handle GitHub Pages SPA routing
(function() {
  var basePath = '/portfolio-website/';
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
  
  // Handle query string routing from 404.html
  var path = window.location.search.slice(1);
  if (path.startsWith('/')) {
    var newPath = basePath + path.replace(/~and~/g, '&');
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

