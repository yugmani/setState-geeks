import React from 'react';
import './style.css';
import SetStateDemo from './components/SetStateDemo';
import PrevStateDemo from './components/PrevStateDemo';

export default function App() {
  return (
    <div>
      <h1>GeeksForGeeks!</h1>
      <SetStateDemo />
      <PrevStateDemo />
    </div>
  );
}
