import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [user, setUser] = useState({
        name: "VuFeng",
        address: "Da Nang City",
        age: 20
    });

    const handleOnChangeName = (e) => {
        setUser({
            name: e.target.value,
            age: user.age
        });
    }

    const handleOnChangeAge = (e) => {
        setUser({
            name: user.name,
            age: e.target.value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.handleAddNewUser({
            id: props.length + 1,
            name: user.name,
            age: user.age
        });
    }

    return (
        <div>
            My name is {user.name}. I'm {user.age}
            <form form onSubmit={(e) => handleOnSubmit(e)}>
                <input
                    value={user.name}
                    type="text"
                    onChange={(e) => handleOnChangeName(e)}
                />
                <input
                    value={user.age}
                    type="text"
                    onChange={(e) => handleOnChangeAge(e)}
                />
                <button>Submit</button>
            </form >
        </div>
    )
}

export default AddUserInfor;