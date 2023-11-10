import React from "react";

class AddUserInfor extends React.Component {
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

    handleOnChangeName = (e) => {
        this.setState({
            name: e.target.value,
            age: e.target.value
        })
    }

    handleOnChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddNewUser({
            id: this.props.length + 1,
            name: this.state.name,
            age: this.state.age
        })
    }

    render() {
        return (
            <div>
                My name is {this.state.name}. I'm {this.state.age}
                <form form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(e) => this.handleOnChangeName(e)}
                    />
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(e) => this.handleOnChangeAge(e)}
                    />
                    <button>Submit</button>
                </form >
            </div>
        )
    }
}

export default AddUserInfor;