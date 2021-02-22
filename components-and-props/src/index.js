import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// class component
// class Greeting extends Component {
//   render() {
//     // const message = 'Hello Components'
//     console.log(this.props);
//     return (
//       <h1>{this.props.message}</h1>
//     )
//   }
// }

// functional component
const Greeting = (props) => {
  // const message = 'hello components'
  return <h1>{props.message} {props.name}</h1>
}
// using the component
// <Greeting message='hello' name='Felix' />,

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
