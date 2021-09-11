import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from 'pages/Dashboard'
import Home from 'pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
