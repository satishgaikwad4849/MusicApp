import React,{Component} from 'react';
import { connect } from 'react-redux';
import {ListGroup,Image} from "react-bootstrap";
 class NewsItem extends Component {
   render(){
   return (
   <>
    {this.props.article ? this.props.article.map((result)=> 
      <div>
        <ListGroup>
          <ListGroup.Item>{result.artistName}</ListGroup.Item>
          <ListGroup.Item>{result.trackName}</ListGroup.Item>
          <Image width="400"  height="200" src={result.artworkUrl100} style={{marginLeft:"24rem", marginTop:"2rem" }}  />
          </ListGroup>
      </div> ) :
      null }
  </>
    )
   }
}
   
const mapStateToProps = (state) => ({
article: state.news,
})

 
export default connect(mapStateToProps,null)(NewsItem);





