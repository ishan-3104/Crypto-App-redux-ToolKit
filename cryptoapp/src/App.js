import './App.css';
import { Route,Link, Routes} from 'react-router-dom'
import { Layout, Space, Typography } from 'antd';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Exchange from './components/Exchange';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';
import Cryptodetails from './components/Cryptodetails';

function App() {
  return ( 
    <div className='app' >
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/exchanges' element={<Exchange/>}/>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/coins/:id' element={<Cryptodetails/>}/>
            </Routes>
            </div>
        </Layout>
        <div className='footer' >
          <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
            cryptoverse <br/>
            allrights back
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
