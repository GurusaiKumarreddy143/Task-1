
import ButtonAppBar from './components/navbar/Navbar';

import Dashboard from './components/dashboard/dashboard';
import Reports from './components/reports/reports';
import News from './components/news/news';
import Analystics from './components/analytics/analytics';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      < ButtonAppBar></ButtonAppBar>
      
      <Routes>
       <Route path='/dashboard' element ={<Dashboard/>}></Route>
       <Route path='/analystics' element ={<Analystics/>}></Route>
       <Route path='/news' element ={<News/>}></Route>
       <Route path='/reports' element ={<Reports/>}></Route>
     </Routes>

  </div>
</Router>
  )
}

export default App;
