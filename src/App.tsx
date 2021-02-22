import './App.css';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import withRedirect from './hoc/withRedirect';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeApp } from './store/ducks/app/actionCreators';
import { selectAppIsError, selectAppIsLoading, selectAppIsNever } from './store/ducks/app/selectors';

import twitterPreloader from './assets/images/twitterLoading.gif';

const SignInWithRedirect = withRedirect(SignIn, 'toHome')
const HomeWithRedirect = withRedirect(Home)
const SimpleRedirect = withRedirect(null)

function App() {
  const dispatch = useDispatch()
  const appIsNever = useSelector(selectAppIsNever)
  const appIsLoading = useSelector(selectAppIsLoading)
  const appIsError = useSelector(selectAppIsError)

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  if (appIsNever || appIsLoading) {
    return (
      <div className="appPreloader">
          <img src={twitterPreloader} alt="Application is loading..."/>
      </div>
    )
  }
  
  if (appIsError) {
    return (
      <div className="appPreloader">
        <h2>Приносим свои извинения. Возникли технические неполадки.</h2>
      </div>
    )
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={SimpleRedirect} />
            <Route path='/home' component={HomeWithRedirect} />
            <Route exact path='/signIn' component={SignInWithRedirect} />
            <Route path='/' component={() => <><h1>Ошибка 404</h1><h2>Страница не найдена</h2></>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
