import React, {useEffect, useState, Suspense} from 'react'
// import NodeChart from '@/components/Graph/NodeChart';
// import dynamic from "next/dynamic";
// const NodeChartDynamic = dynamic(() => import('@/components/Graph/NodeChart'));
const NodeChartDynamic = React.lazy(()=> import('/components/Graph/BasicNodeChart') );


export default function Index() {
  const [isLoaded, setIsLoaded]  = useState(false);
  
  useEffect(() => {
    console.log('window.innerHeight', window.innerHeight);
    setIsLoaded(true);
  },[])
 
  return (
    <>
    {isLoaded &&
      <Suspense fallback={<div>Loading...</div>}>        
        <NodeChartDynamic />
      </Suspense>
    }
    </>
  )
}