console.log('Indescision App!');

class IndescisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            console.log('fetching data...');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options) {
                this.setState(() => ({
                    options: options
                }))
            }

        } catch (e) {
            console.log('error', e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleRemoveAll() {
        this.setState(() => ({
            options: []
        }))
    }

    handleRemoveOption(optionToRemove) {
        console.log('handleRemoveOption', optionToRemove);
        this.setState((prevState) => ({
            // filter method will return true or false
            // to determine which items will stay in the options array
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick() {
        const randomPick = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomPick]
        alert(option);

    }

    handleAddOption(option) {

        if(!option) {
            return 'Please enter valid item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Item already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }))
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleRemoveAll}>Remove All</button>
        {props.options.length == 0 && <p>Please add an option to get started.</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => { 
                    props.handleRemoveOption(props.optionText)
                }} >
            Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({
            error: error
        }))

        // this.setState(() => {
        //     return {
        //         error: error
        //     }
        // })

        if(!error) {
            e.target.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndescisionApp />, document.getElementById('app'));