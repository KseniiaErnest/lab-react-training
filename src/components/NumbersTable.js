import React from "react";

// export default function NumbersTable( {limit} ) {
// const array = [];

// for (let i = 1; i <= limit; i++) {
//   if (i % 2 === 0) {
//     array.push(<span style={{ 
//       backgroundColor: 'red ',
//       display: "inline-block",
//       width: "50px", // Adjust the width as needed
//       height: "50px", // Adjust the height as needed
//       textAlign: "center",
//       border: "1px solid black",
//       lineHeight: "50px" // Center the text vertically
//       }}>{i}</span>);
//   } else {
//     array.push(<span style={{
//       display: "inline-block",
//       width: "50px", // Adjust the width as needed
//       height: "50px", // Adjust the height as needed
//       textAlign: "center",
//       border: "1px solid black",
//       lineHeight: "50px" // Center the text vertically
//     }}>{i}</span>)
//   }
// };


//   return (
//     <div>{array}</div>
//   )
// }

// With CSS
export default function NumbersTable({ limit }) {
  const array = [];

  for (let i = 1; i <= limit; i++) {
    // Determine the CSS class based on whether the number is even or odd
    const className = i % 2 === 0 ? "even" : "odd";

    // Push an element into 'array' with the appropriate CSS class
    array.push(
      <span className={`square ${className}`}>
        {i}
      </span>
    );
  }

  return <div>{array}</div>;
}