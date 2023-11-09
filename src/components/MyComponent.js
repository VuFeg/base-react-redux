import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "VuFeng",
        address: "Da Nang City",
        age: 20
    };

    handleClick(e) {
        console.log("Click me my button");

        this.setState({
            name: "Vu Nguyen",
            age: Math.floor(Math.random() * 100 + 1)
        });
    }

    handleMouseOver(e) {
        // console.log(e.pageX);
    }

    render() {
        return (
            <div>
                My name is {this.state.name}. I'm {this.state.age}
                <button onClick={(e) => { this.handleClick(e) }}>Click me</button>
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
            </div>
        )
    }
}

export default MyComponent;