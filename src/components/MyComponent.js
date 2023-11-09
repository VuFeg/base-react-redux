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

    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name}. I'm {this.state.age}
                <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <input type="text" onChange={(e) => this.handleOnChange(e)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;