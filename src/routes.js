import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import Detail from './components/Detail';
import Search from './components/Search';
import Contact from './components/Contact';
import NotFound from './components/NotFound';


const routes = [
  {title: "HomePage", path:"/", element: Home, isNav: true, isFooter: false},
  {title: "About", path: "about", element: About, isNav:true, isFooter: true},
  {title: "Movies", path: "movies", element: Movies, isNav:false, isFooter: false},
  {title: "Detail", path: "/movies/:movieId", element: Detail, isNav:false, isFooter: false},
  {title: "Search", path: "search", element: Search, isNav:false, isFooter: false},
  {title: "Contact", path: "contact", element: Contact, isNav:false, isFooter: true},
  {title:"NotFound", path:"*", element: NotFound, isNav: false, isFooter: false}
]

export default routes