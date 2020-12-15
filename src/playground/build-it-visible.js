console.log('build-it-visible');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            details: false
        }
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                details: !prevState.details
            }
        })
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggle}>{this.state.details ? 'Hide Details' : 'Show Details'}</button>
                {this.state.details && (
                    <div>
                    <p>Here are the details!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById("app");

// let details = false;
// const onToggle = () => {
//     console.log('onToggle');
//     // if(details) {
//     //     details = false;
//     // } else {
//     //     details = true;
//     // }
//     details = !details;
//     renderApp();
// }


// const renderApp = () => {
//     const template = (
//         <div>
            // <h1>Visibility Toggle</h1>
            // <button onClick={onToggle}>{details ? 'Hide Details' : 'Show Details'}</button>
            //     {details && (
            //         <div>
            //         <p>Here are the details!</p>
            //         </div>
            //     )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);

// }

// renderApp();