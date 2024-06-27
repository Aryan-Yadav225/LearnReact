import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', { id: 'heading' }, 'I am h1 tag inside div inside div. Just adding extra lines'),
        React.createElement('h2', { id: 'heading2' }, 'I am h2 tag inside div inside div')
    ])
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);