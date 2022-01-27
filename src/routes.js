import Trending from './Pages/Trending';
import About from './Pages/About';
import Popular from './Pages/Popular';
import TopRated from './Pages/TopRated';
import Detail from './components/Detail';
import Search from './components/Search';
import Contact from './components/Contact';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import NotFound from './components/NotFound';



const routes = [
  {title: "HomePage", path:"/", element: Trending, isNav: true, isFooter: false},
  {title: "About", path: "about", element: About, isNav:false, isFooter: true},
  {title: "TopRated", path: "top-rated", element: TopRated, isNav:false, isFooter: false},
  {title: "Popular", path: "popular", element: Popular, isNav:false, isFooter: false},
  {title: "Detail", path: "/movies/:movieId", element: Detail, isNav:false, isFooter: false},
  {title: "Search", path: "search", element: Search, isNav:false, isFooter: false},
  {title: "Contact", path: "contact", element: Contact, isNav:false, isFooter: true},
  {title: "Profile", path: "profile", element: Profile, isNav:false, isFooter: false},
  {title: "Login", path: "login", element: Login, isNav:false, isFooter: false},
  {title:"NotFound", path: "*", element: NotFound, isNav: false, isFooter: false}
]

export default routes