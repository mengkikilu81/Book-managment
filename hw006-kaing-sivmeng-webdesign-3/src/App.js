import './App.css';
import MyHeader from './components/MyHeader';
import MyNavbar from './components/MyNavbar';
import PostPage from './components/PostPage';

function App() {
  return (
    <div className="App">

      <MyNavbar />
      <MyHeader />
      <PostPage />
    </div>
  );
}

export default App;
