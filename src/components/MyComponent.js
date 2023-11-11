import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Vu Nguyen", age: "20" },
            { id: 2, name: "Du de", age: "24" },
            { id: 3, name: "Ly de", age: "18" }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }

    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                    length={this.state.listUsers.length}
                />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </div>
        )
    }
}

export default MyComponent;