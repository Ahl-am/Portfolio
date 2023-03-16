import { BrowserRouter } from 'react-router-dom';
import { Experience, Hero, Navbar } from './components';
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="relative z-0 bg-primary">
            <div className='bg-hero-pattern bg-cover bg-no-repeate bg-center'>
              <Navbar />
              <Hero />
              <Experience />
            </div>
        </div>
    </BrowserRouter>
  )
}

export default App
