
function Greetings( {lang, children} ) {
  // A variable with potential text
  let greeting = '';

  // Condition statement for languages
  if (lang === 'de') {
    greeting = `Hallo ${children}!`;
  } else if (lang === 'en') {
    greeting = `Hello ${children}!`;
  } else if (lang === 'es') {
    greeting = `¡Hola ${children}!`;
  } else if (lang === 'fr') {
    greeting = `Bonjour ${children}!`;
  }
  return (
<div>
    <p>{greeting}</p>
  </div>
  )

}

export default Greetings;