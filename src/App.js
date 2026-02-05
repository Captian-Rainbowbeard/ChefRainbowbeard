import logo from './logo.svg';
import './App.css';
import Header from './header.js'
import Forms from './form.js'
import ListView from './ListView.js';
import Footer from './footer.js';

function App() {
  return (
    <>
    <div className="main-wrapper">
    <Header />
    <Forms />
    <ListView />
    <Footer />
    </div>
  

    </>
  );
}

export default App;
