import React, { useState, useEffect } from 'react';

const AgeComponent = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    // This effect will be triggered whenever 'age' changes
    console.log(`Age changed to: ${age}`);
  },[age] );

  const incrementAge = () => {
    setAge(prevAge => prevAge + 1);
  };

  const decrementAge = () => {
    setAge(prevAge => (prevAge > 0 ? prevAge - 1 : 0));
  };

  return (
    <div>
      <h1>Age: {age}</h1>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={decrementAge}>Decrement Age</button>
    </div>
  );
};

export default AgeComponent;
