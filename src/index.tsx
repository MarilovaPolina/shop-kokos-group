import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import './scss/media.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElem = document.getElementById('root');

if(rootElem){
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  ); 
  
}
