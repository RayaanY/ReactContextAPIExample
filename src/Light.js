import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

const Light = () => {
  const { lightOn, setLightOn, onPhotoUrl, setOnPhotoUrl, offPhotoUrl, setOffPhotoUrl } = useContext(AppContext);

  // Use the context values as needed
  // ...

  return (
    <div>
      {/* Your Light component UI */}
      <h1>Light Component</h1>
      <p>Light is {lightOn ? 'on' : 'off'}</p>
      <button onClick={() => setLightOn(!lightOn)}>
        {lightOn ? 'Turn Off' : 'Turn On'}
      </button>
      {/* You can use onPhotoUrl and offPhotoUrl if needed */}
    </div>
  );
};

export default Light;
