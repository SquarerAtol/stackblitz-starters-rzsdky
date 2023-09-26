import React from 'react';

export default function AppComp01() {
  return (
    <div>
      <div>Hello React Native Programming</div>
      <MyComponent />
      <MyComponent />
      <MyComponent2 />
      {MyComponent2}
    </div>
  );
}

function MyComponent() {
  return <div>Hello!</div>;
}

function MyComponent2() {
  return <div>Hello2!</div>;
}
