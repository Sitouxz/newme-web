import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Date from './components/Date';
import { motion } from 'framer-motion';

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
      }, 2000);
    });
  };

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 bg-[#BCFFCE]">
        <Header />
        <Content />
        <Date />
      </motion.div>
    );
  }
}
// End of loading

// Do not comment this
export default App;
// Do not comment this
