import React,{Navigate} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About1 from './pages/About1';
import UseStateArray from './pages/UseStateArray';
import UseEffect from './pages/UseEffect';
import About from './pages/About';
import Parent from './pages/Parent';
import UseStateObject from './pages/UseStateObject';
import Clone from './pages/Clone';
import LifeCycle from './pages/LifeCycle';
import { useState } from 'react';
import Map from './pages/Map';
import PureComponent from './pages/PureComponent';
import { UseMemo } from './pages/UseMemo';
import RegisterForm from './component/forms/RegisterForm';
import LoginForm from './component/forms/LoginForm';
import Layout from './component/Layout';
import { PrivateRoute } from './utils/PrivateRoute';
import Welcome from './component/Welcome';

export default function Routers() {
  const [name, setName] = useState("Hensi");

  return (

    <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
          <Layout>
            <Switch>
            <PrivateRoute path="/about1" exact component={About1}/>
              {/* <PrivateRoute exact path="/lifecycle"  component={<LifeCycle name={name} click={() => setName("Hensi Solanki")} />}/> */}
              <PrivateRoute exact path="/parent" component={Parent}/>
              <PrivateRoute exact path="/about" component={About}/>
              <PrivateRoute exact path="/useStateArray" component={UseStateArray}/>
              <PrivateRoute exact path="/useEffect" component={UseEffect}/>
              <PrivateRoute exact path="/useStateObject" component={UseStateObject}/>
              <PrivateRoute exact path="/clone" component={Clone}/>
              <PrivateRoute exact path="/map" component={Map}/> 
              <PrivateRoute exact path="/purecomponent" component={PureComponent}/>
              <PrivateRoute exact path="/usememo" component={UseMemo}/>
              <Route path='*' exact={true} />
            </Switch>
          </Layout>
      </Switch>
    </BrowserRouter>


    // <BrowserRouter>
    // {/* <Navbar/> */}

    //     <Header/>
    //   <Switch >
    //     <Route exact path="/home">
    //     {/* <UseStateArray />
    //     <Child onClick={this.updateCounter} previous={this.state.prev} /> */}
    //     {/* <HomeComponent/> */}
    //     </Route>
    //     <Route exact path="/register">
    //       <RegisterForm />
    //     </Route>
    //     <Route exact path="/about1">
    //       <About1 />
    //     </Route>
    //     <Route exact path="/lifecycle">
    //       <LifeCycle name={name} click={()=>setName("Hensi Solanki")}/>
    //     </Route>
    //     <Route exact path="/parent">
    //       <Parent />
    //     </Route>
    //     <Route exact path="/about">
    //       <About />
    //     </Route>
    //     <Route exact path="/useStateArray">
    //       <UseStateArray />
    //     </Route>
    //     <Route exact path="/useEffect">
    //       <UseEffect />
    //     </Route>
    //     <Route exact path="/useStateObject">
    //       <UseStateObject />
    //     </Route>
    //     <Route exact path="/clone">
    //       <Clone />
    //     </Route>
    //     <Route exact path="/map">
    //       <Map />
    //     </Route>
    //     <Route exact path="/purecomponent">
    //       <PureComponent />
    //     </Route>
    //     <Route exact path="/usememo">
    //       <UseMemo />
    //     </Route>
    //     {/* </Header> */}
    //   </Switch>
    // </BrowserRouter>

  );
}
