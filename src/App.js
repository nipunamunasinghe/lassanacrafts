import './App.css';

function App() {
  return (
    <div class="container"> 
  <header>
    <div class="logo">
     {/* <img src="https://www.streamlineicons.com/ux/img/img-1.svg"/> */}
      <h1>Lassana Crafts</h1>
    </div>
    <ul>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </header>
  <section>
   {/* <img src="https://www.streamlineicons.com/ux/img/img-1.svg"/> */}
    <p>coming soon</p>
    <p>Are You Ready ?</p>
    <form onsubmit="return false">
      <input type="submit" value="Notify me"/>
      <input type="email" placeholder="Your Email"/>
    </form>
    <div class="clear-fix"></div>
   {/* <img src="https://www.streamlineicons.com/ux/img/style-8.svg"/> */}
   {/* <img src="https://www.streamlineicons.com/ux/img/style-8.svg"/> */}
  </section>
</div>
  );
}

export default App;
