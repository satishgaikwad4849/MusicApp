import React,{Component} from 'react';
import './App.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Navbar} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Movies} from './Details';
import {WebSeries} from './album';
import {Videos} from './audio';
import Audios from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import Rootreducer from './redux/rootreducer';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootSaga from './redux/sagas';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: 'fixed',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
// }));
// function ScrollTop(props) {
//   const { children, window } = props;
//   const classes = useStyles();
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

  // return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </div>
//     </Zoom>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };
const sagaMiddleware = createSagaMiddleware();
 const store = createStore(Rootreducer,applyMiddleware(sagaMiddleware, logger));
 sagaMiddleware.run(rootSaga);
// Be sure to include styles at some point, probably during your bootstraping
 function App (props){

  return (
    <>
    <Provider store={store}>
    <Router>
    <div>
     {/*} <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <div >
  <div class="row">
    <div class="col-lg-12">
    <Navbar variant="dark" style={{ backgroundColor: '#2f0e17' }} >
    <Navbar.Brand href="#home" class="font-weight-bold" style={{paddingLeft:"36.5rem"}} >
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} 
      MYMUSIC
    </Navbar.Brand>
  </Navbar>
    
    <SideNav style={{ backgroundColor: '#2f0e17'}}
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle style={{ backgroundColor: '#2f0e17',height:"56px" }} />
    <SideNav.Nav defaultSelected="Home" >
    <NavItem eventKey="Home">
            <NavIcon>
                <i className="fa fa-fw fa-line-Home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText style={{ color:"black" }}>
            <Link to="/Home" style={{color:"black"}}>Home</Link>
            </NavText>
           
        </NavItem>
        
        <NavItem eventKey="Album">
            <NavIcon>
                <i className="fa fa-fw fa-line-Album" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText style={{ color:"black" }}>
            <Link to="/Album" style={{color:"black"}}>Album</Link> 
            </NavText>
           
        </NavItem>
        <NavItem eventKey="Audios">
            <NavIcon>
                <i className="fa fa-fw fa-Audios" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText style={{ color:"black" }}>
            <Link to="/Audios" style={{color:"black"}}>Audios</Link> 
            </NavText>
        </NavItem>
        <NavItem eventKey="Details" >
            <NavIcon>
                <i className="fa fa-fw fa-Details" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText style={{ color:"black" }} >
            <Link to="/Details" style={{color:"black"}}>Details</Link> 
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
   <CssBaseline />
     {/* <AppBar>
        <Toolbar>
          <Typography variant="h6">Scroll to see button</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
    </div>
  </div>
     
</div>

 
<Switch>
          <Route  path="/Details" exact component ={Movies} />
          <Route  path="/Album" exact component={WebSeries} />
          <Route  path="/Audios" exact component={Videos} />
          <Route  path="/Home" exact component={Audios} />
        </Switch>

</div>
 </Router>
 </Provider>
    </>
  );
}
 
export default App;

