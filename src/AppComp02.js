import React from 'react';

export default function AppComp02() {
  return (
    <div>
      <MyComponent1 />
      <MyComponent2 />
      <MyComponent3 />
    </div>
  );
}

function MyComponent1() {
  return <div>Hello!</div>;
} // this 써야함

const MyComponent2 = () => {
  return <div>Hello!</div>;
}; // this x

const MyComponent3 = () => <div>
  <h1>Hello!</h1>
  Hello {''}
</div>; // 내부 코드 축약가능
