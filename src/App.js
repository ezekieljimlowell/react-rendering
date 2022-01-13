import './App.css';
import React from 'react';
import ArrayAndObject from './ArraysObjectRender';
import ConditionalRendering from './ConditionalRendering';
import { PromiseRendering } from './Promise';
import { AsyncAndAwait } from './AsyncAndAwait';

function App() {
  const m = React.createElement("h1", {}, "Hi");
  return (
    <div className="App">
      <div>{m}</div>
      <ArrayAndObject />
      <ConditionalRendering />
      <PromiseRendering />
      <AsyncAndAwait />
    </div>
  );
}

export default App;
