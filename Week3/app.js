import React from 'react';
import ReactDOM from 'react-dom/client';
//React element
const ele = (<h1 id='element'>it is a JSX element</h1>)
//React component
const Title = () => (
<h1 className='head'>React Using JSX</h1>);
//Writing Component & element inside React Component
const HeadingComponent = () => (
    <div id='container'>
        <Title />
        {ele}
        <h1 className='heading'>React Functional Component</h1>;
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);