import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "VuFeng",
        address: "Da Nang City",
        age: 20
    };

    handleClick(e) {
        console.log(e.target);
    }

    handleMouseOver(e) {
        console.log(e.pageX);
    }

    render() {
        return (
            <div>
                My name is {this.state.name}. I'm from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
            </div>
        )
    }
}

export default MyComponent;