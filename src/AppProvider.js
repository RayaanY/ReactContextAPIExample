import React, { createContext, useState } from 'react';

// Create a combined context for Room and Light
export const AppContext = createContext();

// Create a provider component to wrap your app with the combined context
export const AppProvider = ({ children }) => {
  const [roomTitle, setRoomTitle] = useState('My Èn Suite');
  const [roomDescription, setRoomDescription] = useState('This room is very nice with a view of the waves crashing onto the rocks.');
  const [roomPhotoUrl, setRoomPhotoUrl] = useState('https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9');

  const [lightOn, setLightOn] = useState(false);
  const [onPhotoUrl, setOnPhotoUrl] = useState('https://th.bing.com/th/id/OIP.rfTpYmOtd7-DmovYupOP2wHaLZ?pid=ImgDet&w=167&h=257&c=7&dpr=2');
  const [offPhotoUrl, setOffPhotoUrl] = useState('https://i.imgur.com/K16McvX.png');

  return (
    <AppContext.Provider
      value={{
        roomState: {
          roomTitle,
          setRoomTitle,
          roomDescription,
          setRoomDescription,
          roomPhotoUrl,
          setRoomPhotoUrl,
        },
        lightState: {
          lightOn,
          setLightOn,
          onPhotoUrl,
          setOnPhotoUrl,
          offPhotoUrl,
          setOffPhotoUrl,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
