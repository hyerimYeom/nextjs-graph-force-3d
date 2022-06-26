import React, { useEffect } from 'react'

import {  ForceGraph3D, ForceGraph2D } from 'react-force-graph';


// Random data
const N = 30;
const gData = {
  nodes: [...Array(N).keys()].map((i) => ({ id: i, nodeColor: 'blue'})),
  links: [...Array(N).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1)),
      linkColor : 'white'
    }))
};

export default function App() {
  // useEffect(() =>{
  //   console.log('rendering...')
  //   console.log(gData)
  // })
console.log('hi')
  return (
      <ForceGraph2D
        enableNodeDrag={false}
        backgroundColor={"#000"}
        graphData={gData}
        linkColor={()=>'white'}
        onNodeClick={() => {
          
        }}
      />

  );
}