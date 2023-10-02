import React from 'react';

// See Day 10 for Props
interface ButtonProps {
  label: string;
  onClick: () => void;
}

/** We define an interface ButtonProps to specify the props that this button component will accept. 
 * In this case, it accepts a label (the text to display on the button) and an onClick function (the callback function 
 * to execute when the button is clicked) */

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
        return (
            <button onClick={onClick}>
            {label}
            </button>
        );
    };

export default Button;

/// FC: Function Component

/** The Button component is defined as a functional component (FC) that takes in ButtonProps as its props. */

// var: value ==> const Button: React.FC<ButtonProps> = ({ label, onClick })

// ============================================================================================================================= 

/** App.tsx for this code
import React from 'react';
import Button from './Day8_Buttons';

function App() {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div className="App">
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}

export default App;

 */

// ============================================================================================================================= 