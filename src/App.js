import React from 'react';
import Header from './components/Header';
import Date from './components/Date';
import { motion } from 'framer-motion';
import { Canvas } from 'react-three-fiber';

import {Html, useGLTF} from '@react-three/drei';
import {Section} from './components/section';
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
    const Model = () => {
       //const gltf = useGLTF('virus.gltf')
    }
    const HTMLContent = () => {
      return (
        <Section factor={.5} offset={1}>
          <group possition={[0, 250,0]}>
          {/* <Model/> */}
            <Html fullscreen>
              <div>
                <h1 className='font-bold text-9xl width-h-100 bg-slate-900'>Hello</h1>
              </div>
            </Html>
          </group>
        </Section>
      )
    };

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
        <Header/>
        <Date />
        <div className='z-50'>
        <Canvas>
          <HTMLContent/>
        </Canvas>
        </div>
      </motion.div>
    );
  }
}
// End of loading

// Do not comment this
export default App;
// Do not comment this
