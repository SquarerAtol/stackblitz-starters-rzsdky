import React from 'react';

export default function AppComp05() {
  return (
    <div>
      <Star num="5" mark="🤢" color=" " />
      <Star2 num="5" />
    </div>
  );
}
// ({ }) -> { }  구조분해할당
function Star({ mark = ' ★ ', num, color = 'red', size = '50px' }) {
  
  const divStyle = {color:color,fontSize:50px}
  
  let star = '';
  for (let i = 0; i < num; i++) star += mark;
  return <div style={divStyle}>{star}</div>;
}

const Star2 = ({ num }) => <div>
  {(()=>{ let star = '';
  for (let i = 0; i < num; i++) star += mark;
  retutn star;
  }())
  }
</div>;

// arrow func 내에 선언 및 반복문 구현
