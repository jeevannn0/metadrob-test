import React, { useState } from 'react';
import CanvasComponent from './CanvasComponent';
import Controls from './Controls';
import './index.css';  // Import the CSS file

function App() {
  const [cubeSpeed, setCubeSpeed] = useState(0.00);
  const [donutSpeed, setDonutSpeed] = useState(0.0);
  const [coneSpeed, setConeSpeed] = useState(0.00);
  const [cubeVisible, setCubeVisible] = useState(true);
  const [donutVisible, setDonutVisible] = useState(true);
  const [coneVisible, setConeVisible] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-purple-400 text-white">
      <Controls
        cubeSpeed={cubeSpeed}
        setCubeSpeed={setCubeSpeed}
        donutSpeed={donutSpeed}
        setDonutSpeed={setDonutSpeed}
        coneSpeed={coneSpeed}
        setConeSpeed={setConeSpeed}
        cubeVisible={cubeVisible}
        setCubeVisible={setCubeVisible}
        donutVisible={donutVisible}
        setDonutVisible={setDonutVisible}
        coneVisible={coneVisible}
        setConeVisible={setConeVisible}
      />
      <div className="flex-1 flex justify-center items-center">
        <CanvasComponent
          cubeSpeed={cubeSpeed}
          donutSpeed={donutSpeed}
          coneSpeed={coneSpeed}
          cubeVisible={cubeVisible}
          donutVisible={donutVisible}
          coneVisible={coneVisible}
        />
      </div>
    </div>
  );
}

export default App;
