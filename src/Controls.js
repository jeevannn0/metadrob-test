import React from 'react';

const Controls = ({
  cubeSpeed,
  setCubeSpeed,
  donutSpeed,
  setDonutSpeed,
  coneSpeed,
  setConeSpeed,
  cubeVisible,
  setCubeVisible,
  donutVisible,
  setDonutVisible,
  coneVisible,
  setConeVisible
}) => {
  return (
    
    <div className="p-4 bg-gray-900 flex justify-center items-center space-x-4 ">
      <div className="flex flex-col items-center ">
        <button
          className="mb-2 p-2 bg-blue-400 text-white rounded"
          onClick={() => setCubeVisible(!cubeVisible)}
        >
          Toggle Cube
        </button>
        <input
          type="range"
          min="0"
          max="0.1"
          step="0.01"
          value={cubeSpeed}
          onChange={(e) => setCubeSpeed(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="mt-2 p-1 text-black"
          value={cubeSpeed}
          onChange={(e) => setCubeSpeed(parseFloat(e.target.value))}
          min="0"
          step="0.01"
        />
      </div>

      <div className="flex flex-col items-center">
        <button
          className="mb-2 p-2 bg-blue-400 text-white rounded"
          onClick={() => setDonutVisible(!donutVisible)}
        >
          Toggle Donut
        </button>
        <input
          type="range"
          min="0"
          max="0.1"
          step="0.01"
          value={donutSpeed}
          onChange={(e) => setDonutSpeed(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="mt-2 p-1 text-black"
          value={donutSpeed}
          onChange={(e) => setDonutSpeed(parseFloat(e.target.value))}
          min="0"
          step="0.01"
        />
      </div>

      <div className="flex flex-col items-center">
        <button
          className="mb-2 p-2 bg-blue-400 text-white rounded"
          onClick={() => setConeVisible(!coneVisible)}
        >
          Toggle Cone
        </button>
        <input
          type="range"
          min="0"
          max="0.1"
          step="0.01"
          value={coneSpeed}
          onChange={(e) => setConeSpeed(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="mt-2 p-1 text-black"
          value={coneSpeed}
          onChange={(e) => setConeSpeed(parseFloat(e.target.value))}
          min="0"
          step="0.01"
        />
      </div>
    </div>
   
  );
};

export default Controls;
