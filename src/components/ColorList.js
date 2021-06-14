import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorEle = colors.map(color =>{
   return <li key={color} style={{ color: colors }}>{color}</li>
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorEle}
      </ol> 
    </div>
  );
}

export default ColorList;
