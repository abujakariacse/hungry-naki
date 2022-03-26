import React from 'react';
import './QNA.css'

const QNA = () => {
    return (
        <div className='qna-container'>
            <div className="qna">
                <h4>Q: How does React works?</h4>
                <p><span>Ans:-</span> In order to work in React we first need two things. One is React and the other is React DOM. When a component is written, it contains pure JavaScript code. We need to convert these JavaScript codes into HTML code. And what we see on the website is HTML code. A package called React takes work to convert this JavaScript code to HTML code. That is, the package that is used to inject the HTML code into the HTML file is React DOM. So React DOM helps to convert HTML code from components to inject into the main HTML page. This whole process goes on without any reload. That is, without reloading the page, dynamically generates the HTML codes in the HTML file i.e. DOM. And that's how React works.</p>
            </div>
            <div className="qna">
                <h4>Q: Difference between State and Props?</h4>
                <p><span>Ans:-</span>Props are used to pass data from one component to another.
                The state is a local data storage that is local to the component only and cannot be passed to other components.The this.setState property is used to update the state values in the component.We can modify and update the data using State. But we cannot update data using props. If you need to update the data through Props, then the data can be updated by converting to State.</p>
            </div>
        </div>
    );
};

export default QNA;