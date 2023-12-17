import React from 'react';
import { AppProvider } from './AppProvider';
import Room from './Room';
import Light from './Light';

const App = () => {
  return (
    <AppProvider>
      <div>
        {/* Your components that consume these contexts */}
        <Room />
        <Light />
      </div>
    </AppProvider>
  );
};

export default App;
