import React from 'react';

export default function AppComp03() {
  return (
    <div>
      <Star1 />
      <Star2 />
      <Star3 />
      <Star2 />
      <Star1 />
    </div>
  );
}

function Star1() {
  return <div style={{ fontSize: 50, color: 'red' }}>★</div>; // { {} } json{} 문법 내 js{} 문법
}

function Star2() {
  return <div>★★</div>;
}

const Star3 = () => <div>★★★</div>;
