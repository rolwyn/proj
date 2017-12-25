const { createElement } = React
const { render }        = ReactDOM

const style = { 
	  backgroundColor : 'orange',
	  color 		  : 'white',
	  fontFamily	  : 'verdana'
}

const title = createElement(
	'h1',
	{id: 'title', className: 'header', style: style},
	'Hello World'
)

//ReactDom takes two arguments
render(
	title,                                                  //what we want to render
	document.getElementById('react-container')             //where we want to render
)