
import './NavBar.scss';

export const Navbar1 = () => {
    return (
      <>
      <div class = "row bg-primary">

      <div class="col ">
        <h1 >PORFOLIO</h1>
      </div>
      <div class=" col ">
          <nav class = "nav justify-content-between" >
            <a class="nav-link link-dark" aria-current="page" href="#">Active</a>
            <a class="nav-link link-dark" href="#">Link</a>
            <a class="nav-link link-dark" href="#">Link</a>
            <a class="nav-link link-dark" aria-disabled="true">Disabled</a>
          </nav>
        </div>

      </div>
      </>
      
     
     
    );
}
    
