import { Link, Switch, Route } from "react-router-dom"
import { CartPage, Products } from "./components"

function App() {
  return (
    <div className="App">
      <h1>Welcome to my shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={"/"}>
          <div>Hello World!</div>
        </Route>
        <Route path={"/products"}>
          <Products />
        </Route>
        <Route path={"/cart"}>
          <CartPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
