import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

const Room = () => {
  const {
    roomTitle,
    roomDescription,
    roomPhotoUrl,
  } = useContext(AppContext);

  // Use the context values as needed
  // Displaying room information without input fields
  return (
    <div>
      <h1>Room Title: {roomTitle}</h1>
      <p>Description: {roomDescription}</p>
      <img src={roomPhotoUrl} alt="Room" />
      
      {/* Other room details to display */}
      {/* ... */}
    </div>
  );
};

export default Room;
