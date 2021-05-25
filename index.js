import React, { Component } from 'react'

 class Even_Bainding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){

        this.setState({

            count : this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
             <h1>{this.state.count}</h1>
             <button onClick={this.handleOnClick}>Increase</button>
                
            </div>
        )
    }
}
export default Even_Bainding;
