import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Vu Nguyen", age: "20" },
            { id: 2, name: "Du de", age: "24" },
            { id: 3, name: "Ly de", age: "18" }
        ]
    }
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        )
    }
}

export default MyComponent;