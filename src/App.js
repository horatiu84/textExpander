import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
    <TextExpander>
      Space travel is the ultimate adventure! Imagine soaring past the stars
      and exploring new worlds. It's the stuff of dreams and science fiction,
      but believe it or not, space travel is a real thing. Humans and robots
      are constantly venturing out into the cosmos to uncover its secrets and
      push the boundaries of what's possible.
    </TextExpander>

    <TextExpander
      collapsedNumWords={20}
      expandButtonText="Show text"
      collapseButtonText="Collapse text"
      buttonColor="#ff6622"
    >
      Space travel requires some seriously amazing technology and
      collaboration between countries, private companies, and international
      space organizations. And while it's not always easy (or cheap), the
      results are out of this world. Think about the first time humans stepped
      foot on the moon or when rovers were sent to roam around on Mars.
    </TextExpander>

    <TextExpander expanded={true} className="box">
      Space missions have given us incredible insights into our universe and
      have inspired future generations to keep reaching for the stars. Space
      travel is a pretty cool thing to think about. Who knows what we'll
      discover next!
    </TextExpander>
  </div>
  );
}

function TextExpander({
  collapsedNumWords=10,
  expandButtonText="Show more",
  collapseButtonText = "Show less",
  buttonColor="blue",
  expanded=false,
  className,
  children
  }) {

  const [isExpanded, setIsExpended] = useState(expanded);

  const newText = children.split(" ").slice(0, collapsedNumWords).join(" ")+"...";
  
  
  function handleClick() {
    setIsExpended( cur => !cur);
  }
  
  

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: buttonColor,
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    fontSize: '16px',
  }

  
  return (
      <div className={className}>
          { isExpanded ? children : newText}
          <button onClick={handleClick} style={buttonStyle}>{isExpanded ? collapseButtonText :expandButtonText }</button>
        </div>
  );
}


export default App;
