import React, {useRef} from 'react'
 

const Intro = () => {
  const textRef = useRef();
  return (
    <div className="intro" id="intro">
      <div className="wraper">
        <h2> Hi There, I'm</h2>
        <h1>Ikechukwu Ekedede</h1>
        <h3>Freelance <span ref = {textRef}></span></h3>
      </div>
    </div>
  );
}

export default Intro
