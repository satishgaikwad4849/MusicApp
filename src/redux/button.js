import React from 'react';
import { connect } from 'react-redux';
import {Button,Jumbotron} from "react-bootstrap";
import { getNews } from './actions_1';

function Buton({getNews}){
    return (
    <>
    <div>
    <Jumbotron style={{height:"16rem",width:"20rem", marginLeft:"22rem"}}>
  <h1>Hello,User</h1>
  <p>
    This is a simple unit, you see
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary"  onClick={getNews}>See more</Button>
  </p>
</Jumbotron>
    </div>
    </>
    )
}
const mapDispatchToProps = {
    getNews: getNews,
};

export default connect(null,mapDispatchToProps)(Buton);





