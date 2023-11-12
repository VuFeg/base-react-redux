import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Vu Nguyen", age: "20" },
        { id: 2, name: "Du de", age: "24" },
        { id: 3, name: "Ly de", age: "18" }
    ]);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone)
    }
    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
                length={listUsers.length}
            />
            <br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    )
}

export default MyComponent;