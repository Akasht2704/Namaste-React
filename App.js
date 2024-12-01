const parent = React.createElement('div', {id:'parent'},
     React.createElement('div', {id:'child'},
       [React.createElement('h1', {id:'heading'},'This is an h1 tag' ),
        React.createElement('h', {id:'head2'},'This is an h2 tag' )
       ]
      ),
     );



const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(root);

root.render(parent)

console.log(parent);
