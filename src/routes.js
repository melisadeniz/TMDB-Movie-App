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