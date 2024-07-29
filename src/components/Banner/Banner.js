import "./Banner.css"

function Banner() {
  // JSX
  return(
    // Because JSX files are essentially JavaScript code, the term "class"
    // conflicts with JavaScript's built-in keyword.
    // That's why we use "className" instead.
    <header className="banner">
      <img src="/images/banner.png" alt="Main banner from the organo home page"/>
    </header>
  );
}

export default Banner;