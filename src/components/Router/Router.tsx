import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Header } from '@components/Header/Header'
import { Calendar } from '@components/pages/Calendar/Calendar'
import { Plans } from '@pages/Plans/Plans'
import { ToDo } from '@components/pages/ToDo/ToDo'
import { Footer } from '@components/Footer/Footer'

export const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/calendar" component={Calendar} />
      <Route path="/plans" component={Plans} />
      <Route path="/to-do" component={ToDo} />
      <Redirect to="/plans" />
    </Switch>
    <Footer />
  </BrowserRouter>
)
