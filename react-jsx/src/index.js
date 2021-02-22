import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// jsx - javascript
// to interpolate variables you use {}
const text = 'Hi React'
// const element = <h1>{text}!</h1>

// we can return jsx from functions
const greet = () => {
    return <h1>Welcome</h1>
}
const user = 'Felix'
// wrap multiple lines with parentheses - jsx must have one root element
// class -> className, for -> htmlFor
// You need to close all tags -> <br> -> <br/>
const block = (
    <div className="Heading">
        <h1>Greeting</h1>
        <br />
        <h1>
            Hello {user}
        </h1>
    </div>
)

const myStyle = {
    color: 'blue'
}

const styledElement = (
    <div>
        <p style={{
            backgroundColor: 'pink'
        }} >
            Random number: {Math.floor(Math.random() * 10)}
        </p>
        <p style={myStyle}>
            Second paragraph
        </p>
    </div>
)

ReactDOM.render(styledElement, document.getElementById('root'));