import React,{Component} from 'react'
import {Button} from "react-bootstrap";
// import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { withTranslation, Trans } from "react-i18next";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';



const EqualDivider = styled.div`
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
    background: papayawhip;
    ${props => props.vertical && "flex-direction: column;"}
  
    > * {
      flex: 1;
  
      &:not(:first-child) {
        ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
      }
    }
  `;
  const Child = styled.div`
  padding: 0.25rem 0.5rem;
  background: palevioletred;
`;
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row"
  },
  container: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  topgrid: {
    marginTop: "10px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});

 class  Audios extends Component {
  state = {
    value: "en"
  };

  handleChange = event => {
    console.log("selected val is ", event.target.value);
    let newlang = event.target.value;
    this.setState(prevState => ({ value: newlang }));
    console.log("state value is", newlang);
    this.props.i18n.changeLanguage(newlang);
  };
      render(){
        const { t, i18n } = this.props;
        const { classes } = this.props;
    return (
        <div><div class="row" style={{marginTop:"0rem"}}>
        <div class="col-lg-12">
        {/*<div>{this.props.age}</div>
            <Button variant="outline-danger" onClick={this.props.onAdd}/>
            <Button variant="outline-danger" onClick={this.props.onSub}/>*/}
          
  <div className="App">
        {/* <Header /> */}

        <div className={classes.container}>
          <Grid container spacing={24}>
            <Grid item xs={12} className={classes.topgrid}>
              <Paper className={classes.paper}>
                <div className={classes.root}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Connect with music culture</FormLabel>
          
                    <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleChange}
                    >

                                <CardDeck style={{width:"100rem"}}>
  <Card >
    <Card.Img variant="top" src="https://picsum.photos/20" />
    <Card.Body>
      <Card.Title>English Top Album</Card.Title>
     
    </Card.Body>
    <Card.Footer>
    <FormControlLabel
                        value="en"
                        control={<Radio />}
                        label="English"
                      />
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://picsum.photos/200" />
    <Card.Body>
      <Card.Title>JAPANESE SONGS</Card.Title>
    
    </Card.Body>
    <Card.Footer>
    <FormControlLabel
                        value="jap"
                        control={<Radio />}
                        label="Japanese"
                      />
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://picsum.photos/50" />
    <Card.Body>
      <Card.Title>BOLLYWOOD SONGS</Card.Title>
     
    </Card.Body>
    <Card.Footer>
    <FormControlLabel
                        value="hin"
                        control={<Radio />}
                        label="Hindi"
                      />
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://picsum.photos/100" />
    <Card.Body>
      <Card.Title>FRENCH MUSIC</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <FormControlLabel
                        value="fre"
                        control={<Radio />}
                        label="French"
                      />
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://picsum.photos/120" />
    <Card.Body>
      <Card.Title>GERMAN RHYTHM</Card.Title>
    </Card.Body>
    <Card.Footer>
    <FormControlLabel
                        value="ger"
                        control={<Radio />}
                        label="German"
                      />
    </Card.Footer>
  </Card>
 
</CardDeck>
                    </RadioGroup>
                  </FormControl>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h3" gutterBottom>
                  <Trans> {t("Introduction")} </Trans>

                  <Typography variant="subtitle2" gutterBottom>
                    i18next{" "}
                    {t(
                      "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop"
                    )}
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} >
                <Typography variant="h6" gutterBottom>
                  {t("Advantages")}
                </Typography>

                <List dense={false}>
                  <ListItem>
                    <ListItemText>
                      {t("Plugins to detect the user language")}
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      {t("Plugins to load translations")}
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      {t("Optionally cache the translations")}
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      {t("Flexibility to use other packages")}
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      {t("Plugins to detect the user language")}
                    </ListItemText>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} style={{padding:"2.80rem"}}>
                <Typography variant="h6" gutterBottom>
                  No Change Section
                </Typography>
                <Typography variant="body1" gutterBottom>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
      <Button variant="secondary" size="lg" active style={{backgroundColor:"#2f0e17", width:200,marginLeft:"35rem",marginTop:"3rem"}}>JOIN PREMIUM</Button>{' '}
  {/*<EqualDivider>
    <Child>First</Child>
    <Child>Second</Child>
    <Child>Third</Child>
    <Child>Fourth</Child>
  </EqualDivider>
  <EqualDivider vertical>
    <Child>First</Child>
    <Child>Second</Child>
    <Child>Third</Child>
  </EqualDivider>*/}
  </div>
            </div>
            
            </div>
        </div>
    )
}
  }
  
/*const mapStateToProps=(state)=>{
    return{
        age:state.age
    }
}
const mapDispatchToProps= (dispatch) => {
    return{
    onAdd:()=>dispatch({type:"ADD",value: 1}),
    onSub:()=>dispatch({type:"SUBSTRACT",value: 1})
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(Audios);
*/
Audios.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(withTranslation("translations")(Audios));