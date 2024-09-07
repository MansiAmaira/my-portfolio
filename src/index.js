import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ServiceProvider } from './ServiceContext';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <ServiceProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ServiceProvider>
);
