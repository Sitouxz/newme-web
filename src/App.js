import React from 'react';
import Home from './pages/Home';
import News from './pages/News';
import { Routes, Route } from 'react-router-dom';


// ATTENTION!!!
// Uncomment this function and comment class below to disable loading delay animation
// function App() {
//   return (
//     <div className="container mx-auto px-4 bg-[#BCFFCE] ">
//       <Header />
//       <Content />
//       <Date />
//     </div>
//   );
// }


// Loading
class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector('.loader-container');
      if (el) {
        el.remove();
        this.setState({ loading: false });
      }
    });
  }

  fakeRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 0);
    });
  };

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    );
  }
}
// End of loading

// Do not comment this
export default App;
// Do not comment this
