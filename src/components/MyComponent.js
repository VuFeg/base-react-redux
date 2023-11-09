import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "VuFeng",
        address: "Da Nang City",
        age: 20
    };

    render() {
        return (
            <div>
                My name is {this.state.name}. I'm from {this.state.address}
            </div>
        )
    }
}

export default MyComponent;