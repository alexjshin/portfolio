import React, {Fragment} from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Fragment>
      <div>
        Hello, world!
      </div>
    </Fragment>
    </ChakraProvider>
    
  );
}

export default App;
