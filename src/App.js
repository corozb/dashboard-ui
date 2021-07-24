import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SideBar from './components/SideBar/SideBar'
import Topbar from './components/TopBar/Topbar'
import Home from './Pages/Home/Home'
import UserList from './Pages/UserList/UserList'
import User from './Pages/User/User'
import NewUser from './Pages/NewUser/NewUser'
import ProductList from './Pages/ProductList/ProductList'
import Product from './Pages/Product/Product'
import NewProduct from './Pages/NewProduct/NewProduct'
import './App.css'

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <SideBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:userId'>
            <User />
          </Route>
          <Route path='/newUser'>
            <NewUser />
          </Route>
          <Route path='/products'>
            <ProductList />
          </Route>
          <Route path='/product/:productId'>
            <Product />
          </Route>
          <Route path='/newproduct'>
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
