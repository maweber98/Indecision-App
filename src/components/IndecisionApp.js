import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleRemoveAll = () => {
        this.setState(() => ({
            options: []
        }))
    }

    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handleRemoveOption = (optionToRemove) => {
        console.log('handleRemoveOption', optionToRemove);
        this.setState((prevState) => ({
            // filter method will return true or false
            // to determine which items will stay in the options array
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick = () => {
        const randomPick = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomPick];
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleAddOption = (option) => {

        if(!option) {
            return 'Please enter valid item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Item already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }))
    }

    componentDidMount() {
        try {
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
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options} 
                            handleRemoveAll={this.handleRemoveAll}
                            handleRemoveOption={this.handleRemoveOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}

export default IndecisionApp;