import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { TimelineLite } from "gsap";

const App = function () {
  
  const [toggle, setToggle] = useState(false);
  const [tl] = useState(new TimelineLite({paused: true}));

  let tweenTarget = null;

  const toggleTimeline = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    tl
      .to( tweenTarget, 0.5, { 
        autoAlpha: 1, y: -20,
        onComplete: callbackAnimation
      }, 0.1)
      .reverse();
  }, []);

  useEffect(() => {
    tl.reversed(!toggle);
  }, [toggle]);

  const callbackAnimation = () => {
    console.log("termina animación");
  };
  

  return <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="text-center">Using a Timeline with React Hooks</h2>
        <hr/>
        <button className="btn btn-info" onClick={toggleTimeline}>Toggle Timeline</button>
        <hr/>
        <div
          className="card text-white bg-success"
          style={{"width": "200px"}}
          ref={e => tweenTarget = e}
        >
          <div className="card-body">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

render(<App />, document.getElementById('root'));
