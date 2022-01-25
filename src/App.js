import { ThemeProvider } from 'styled-components';
import { Routes, Route} from 'react-router-dom';
import Header from './components/base/Header';
import Footer from './components/base/Footer';
import routes from './routes';

function App() {

  const theme = {
    colors: {
      dark: '#4b4b4b',
      light: '#ffffff',
    },
    mobile: '768px',
  }

  return (
    
    <ThemeProvider theme={theme}>
    <>
    <div className='app'>
     <Header />
     <br />
     <br />
     <br />
     <Routes>
         {routes.map((item, index) => (
           <Route key={index} path={item.path} element={<item.element />} />
         ))}
       </Routes>
    </div>
     <Footer />

    </>
   
    </ThemeProvider>
  );
}

export default App;
