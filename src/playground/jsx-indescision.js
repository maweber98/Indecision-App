console.log('App.js is runing!!!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.newOption.value;

    if(option) {
        app.options.push(option);
        e.target.elements.newOption.value = '';
        console.log(app.options);
        renderApp();
    }
}

const onRemoveOptions = () => {
    app.options = [];
    renderApp();
}

const onRandom = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const decison = app.options[randomNumber];
    console.log(decison);
    alert(decison);
}

const appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onRandom}>What should I do?</button>
            <button onClick={onRemoveOptions}>Remove Options</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="newOption"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}


renderApp();