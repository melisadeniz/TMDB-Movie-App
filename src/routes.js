import HomePage from './Pages/HomePage';
import About from './Pages/About';
import SortFilter from './Pages/SortFilter';
import Detail from './components/Detail';
import Search from './components/SearchResults';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import NotFound from './components/NotFound';



const routes = [
  {title: "HomePage", path:"/", element: HomePage, isNav: true, isFooter: false},
  {title: "About", path: "about", element: About, isNav:false, isFooter: true},
  {title: "Movies", path: "/sort-filter", element: SortFilter, isNav:false, isFooter: false},
  {title: "Movies", path: "/sort-filter/:type", element: SortFilter, isNav:false, isFooter: false},
  {title: "Detail", path: "/movie/:movieId", element: Detail, isNav:false, isFooter: false},
  {title: "Search", path: "search", element: Search, isNav:false, isFooter: false},
  {title: "Contact", path: "contact", element: Contact, isNav:false, isFooter: true},
  {title: "Profile", path: "profile", element: Profile, isNav:false, isFooter: false},
  {title: "Login", path: "login", element: Login, isNav:false, isFooter: false},
  {title:"NotFound", path: "*", element: NotFound, isNav: false, isFooter: false}
]

export default routes