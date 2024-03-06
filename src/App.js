import {Route, Switch} from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import CourseDetail from './component/CourseDetail'
import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses/:id" component={CourseDetail} />
    </Switch>
  </div>
)

export default App
