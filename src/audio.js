import React , {Component} from 'react'
import Image from 'react-bootstrap/Image'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export class Videos extends Component {
    constructor(){
        super();
          this.state={
          searchData:{
                      resultCount:0,
                      results:[]
                    },
        }
       }
       componentDidMount(){
          this.search()
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
    render(){
      console.log(this.state.searchData)
  {/*  const options = this.state.searchData.results.map((option) => {
        const firstLetter = option.artistName[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });*/}
    return (
        <>
        <div class="row" style={{margin:"3rem"}}>
        <div class="col-lg-6">
      <div>    
      
<input type="text" onChange={(event)=>this.search(event.target.value)} style={{marginLeft:"30rem"}} /></div>
{console.warn(this.state.searchData)}

        {
            this.state.searchData ?(
            <div>
            {
              this.state.searchData.results.map((result)=>
            <div >
          
          <Image width="400"  height="200" src={result.artworkUrl100} style={{marginLeft:"24rem", marginTop:"2rem" }}  />
          <div style={{marginLeft:"27rem", marginTop:"2rem"}}> <audio controls style={{backgroundColor:"#2f0e17"}}>
            <source  src={result.previewUrl} type="audio/mp3"/>
          </audio></div>
    </div>
              )
            }
            </div>)
            :""
          }
         
    </div>
    <div class="col-lg-6">
   {/* <Autocomplete
          id="grouped-demo"
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.artistName}
          style={{ width: 300,marginLeft:"20rem" }}
          renderInput={(params) => <TextField {...params} label="With categories" variant="outlined" />}
   />*/}
      </div>
    </div> 
    </>
    )
}
}