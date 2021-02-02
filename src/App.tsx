import './App.css';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path='/signIn' component={SignIn} />
            <Route path='/home' component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
