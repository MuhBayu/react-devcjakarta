import React from 'react';

const style = {
   small: {
      padding: 1
   },
   large: {
      padding: 10
   }
}
const Button = props => {
   return (
      <button onClick={props.onClick} style={props.size === 'lg' ? style.large : style.small}>
         {props.children}
      </button>
   );
};


export default Button;
