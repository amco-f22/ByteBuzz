import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <div className="app">
      <div className="gradient-bg">
        {/* Organic SVG blob shapes */}
        <svg
          style={{ position: 'absolute', top: '5%', right: '8%', width: '420px', height: '420px', opacity: 0.04 }}
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M420.5,301.5Q403,403,301.5,432Q200,461,134,380.5Q68,300,134,219.5Q200,139,301.5,139.5Q403,140,420.5,220Q438,300,420.5,301.5Z"
            fill="#c2a578"
          />
        </svg>
        <svg
          style={{ position: 'absolute', bottom: '10%', left: '5%', width: '350px', height: '350px', opacity: 0.035 }}
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M450,300Q450,400,362.5,450Q275,500,200,450Q125,400,100,300Q75,200,162.5,125Q250,50,337.5,100Q425,150,450,225Q475,300,450,300Z"
            fill="#7a9e7e"
          />
        </svg>
        <svg
          style={{ position: 'absolute', top: '45%', left: '55%', width: '280px', height: '280px', opacity: 0.025 }}
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M390,310Q370,420,270,430Q170,440,120,370Q70,300,120,230Q170,160,270,150Q370,140,395,220Q420,300,390,310Z"
            fill="#c47a6c"
          />
        </svg>
      </div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
