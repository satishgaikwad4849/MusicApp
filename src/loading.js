import React from 'react';
import { connect } from 'react-redux'
import {Spinner,Button} from "react-bootstrap";
// import img from '../loading_spinner.gif'
let Loading = ({ loading }) => (
loading ?
<div style={{marginLeft:"40rem"}}>
<Button variant="primary" disabled>
<Spinner
  as="span"
  animation="border"
  size="sm"
  role="status"
  aria-hidden="true"
/>
<span className="sr-only">Loading...</span>
</Button>{' '}
<Button variant="primary" disabled>
<Spinner
  as="span"
  animation="grow"
  size="sm"
  role="status"
  aria-hidden="true"
/>
Loading...
</Button>
</div>
:
null
);
const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;