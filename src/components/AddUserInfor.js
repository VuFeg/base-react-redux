import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [name, setName] = useState("Vu Feng");
    const [age, setAge] = useState(20);

    const handleOnChangeName = (e) => {
        setName(e.target.value);
    }

    const handleOnChangeAge = (e) => {
        setAge(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.handleAddNewUser({
            id: props.length + 1,
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name is {name}. I'm {age}
            <form form onSubmit={(e) => handleOnSubmit(e)}>
                <input
                    value={name}
                    type="text"
                    onChange={(e) => handleOnChangeName(e)}
                />
                <input
                    value={age}
                    type="text"
                    onChange={(e) => handleOnChangeAge(e)}
                />
                <button>Submit</button>
            </form >
        </div>
    )
}

export default AddUserInfor;