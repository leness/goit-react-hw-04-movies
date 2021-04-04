
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import AppBar from './components/AppBar';
import { Suspense, lazy } from "react";

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */));
const PageDetalisView = lazy(() =>
  import('./views/PageDetalisView.js' /* webpackChunkName: "page-detalis-view" */));


const App=()=>   {
  
     return (
       <>
         <AppBar />
      
         <Suspense fallback={<h1>Загружаем...</h1>}>
           <Switch>
        <Route exact path={routes.home} component={HomePage} />
           <Route path={routes.movieId} component={PageDetalisView} />
           <Route path={routes.movies} component={MoviesPage} />
        <Route component={routes.home} />
      </Switch>
         </Suspense>
      
      
    </>
  );
}

export default App


