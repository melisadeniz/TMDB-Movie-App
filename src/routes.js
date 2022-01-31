import HomePage from './pages/HomePage';
import About from './pages/About';
import SortFilter from './pages/SortFilter';
import Detail from './components/Detail';
import Search from './components/SearchResults';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NotFound from './components/NotFound';



const routes = [
  {title: "HomePage", path:"/", element: HomePage, isFooter: false},
  {title: "Movies", path: "/sort-filter", element: SortFilter, isFooter: false},
  {title: "Movies", path: "/sort-filter/:type", element: SortFilter, isFooter: false},
  {title: "Detail", path: "/movie/:movieId", element: Detail, isFooter: false},
  {title: "Search", path: "search", element: Search, isFooter: false},
  {title: "About", path: "about", element: About, isFooter: true},
  {title: "Contact", path: "contact", element: Contact, isFooter: true},
  {title: "Profile", path: "/profile", element: Profile, isFooter: false},
  {title: "Login", path: "login", element: Login, isFooter: false},
  {title:"NotFound", path: "*", element: NotFound, isFooter: false}
]

export default routes