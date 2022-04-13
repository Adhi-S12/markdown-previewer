import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { marked } from 'marked';
import './index.css';

marked.setOptions({
	breaks: true,
});

const App = () => {
	const [ input, setInput ] = useState('');
	const [ output, setOutput ] = useState('');

	const changeInput = (e) => {
		setInput(e.target.value);
	};

	useEffect(
		() => {
			setOutput(marked.parse(input));
		},
		[ input ]
	);

	useEffect(() => {
		setInput(
			"# Welcome to my React Markdown Previewer! \n \n## This is a sub-heading... \n### And here's some other cool stuff: \n \nHeres some code, `<div></div>`, between 2 backticks. \n \n``` \n// this is multi-line code: \n \nfunction anotherExample(firstLine, lastLine) { \n  if (firstLine == '```' && lastLine == '```') { \n    return multiLineCode; \n  } \n} \n``` \n \nYou can also make text **bold**... whoa! \nOr _italic_. \nOr... wait for it... **_both!_** \nAnd feel free to go crazy ~~crossing stuff out~~. \n \nThere's also [links](https://www.freecodecamp.org), and \n> Block Quotes! \n \nAnd if you want to get really crazy, even tables: \n \nWild Header | Crazy Header | Another Header? \n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here.... \nAnd here. | Okay. | I think we get it. \n \n- And of course there are lists. \n  - Some are bulleted. \n     - With different indentation levels. \n        - That look like this. \n \n \n1. And there are numbered lists too. \n1. Use just 1s if you want! \n1. And last but not least, let's not forget embedded images: \n \n![YTLogo](https://logodix.com/logo/1062794.png)"
		);
	}, []);

	return (
		<div className="app-container">
			<div className="heading">
				<em>Markdown Previewer</em>
			</div>
			<div className="container">
				<textarea name="editor" id="editor" value={input} onChange={(e) => changeInput(e)} />
				<div id="preview" dangerouslySetInnerHTML={{ __html: output }} className="preview_html" />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
