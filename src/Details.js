import React, {Component} from 'react'
import {Form,FormControl,Button,Table} from "react-bootstrap";
// import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components'
// import Header from "./Header";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div `
display: inline-block;
animation: ${rotate} 2s linear infinite;
padding: 2rem 1rem;
font-size: 1.2rem;
`;
export  class Movies extends Component {
    constructor(){
        super();
          this.state={
          searchData:{
            resultCount:0,
            results:[],
          },
          noData:false,
        }
       }
       

       search(key){
         console.warn(key)
         fetch( "https://itunes.apple.com/search?term=artist" + key)
         .then((data)=>{data.json().then((resp)=>{console.warn("resp",resp)
         if(resp.resultCount>0 && key){
          this.setState({searchData:resp,noData:false})
         }
         else
         {
          this.setState({noData:true,searchData:null})
         }
        })
      })  
       }
       // Create the keyframes

      render(){
        
    return (
        <>
        <div class="row">
<div class="col-lg-4">

</div>
<div class="col-lg-4">
<div style={{ marginTop: "3rem"}}>
{/* <Header />  */}
</div>

<Rotate style={{ marginTop: "3rem",marginLeft: "8rem",Color: '#2f0e17' }} ><MusicNoteIcon style={{backgroundColor: '#2f0e17',color:"white"}}/><i style={{padding:"1rem",color:"#2f0e17"}}> Music</i><MusicNoteIcon style={{backgroundColor: '#2f0e17',color:"white"}}/></Rotate>
<Form >
      <FormControl type="text" onChange={(event)=>this.search(event.target.value)} style={{ marginTop: "3rem" }}/>
      <Button style={{ marginTop: "3rem",marginLeft: "10rem"}}  variant="outline-success">Search</Button>
    </Form>
   
  
</div>
<div class="col-lg-4">

</div>
    </div>
    
        <div>
            <div class="row" style={{margin:"3rem"}}>
    <div class="col-lg-12">
    {console.warn(this.state.searchData)}
    {
        this.state.searchData ?(
        <div>
        {
          this.state.searchData.results.map((result)=>
        <div >
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Artist ID</th>
      <th>Artist Name</th>
      <th>Track Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{result.artistId}</td>
      <td>{result.artistName}</td>
      <td>{result.trackName}</td>
    </tr>
    <tr>
    <td>{result.artistId}</td>
      <td>{result.artistName}</td>
      <td>{result.trackName}</td>
      
    </tr>
    <tr>
    <td>{result.artistId}</td>
      <td>{result.trackName}</td>
      <td>{result.trackName}</td>
    </tr>
  </tbody>
</Table> 
</div>
          )
        }
        </div>)
        :""
      }
      {this.state.noData && this.state.searchData ? (<div style={{marginLeft:"30rem"}}>Sorry,No Results Found</div>):""}
      
</div>
</div> 
        </div>
        </>
    )
}
}