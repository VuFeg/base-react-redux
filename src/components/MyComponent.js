import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor name="Vu Nguyen" age="24" />
                <hr />
                <DisplayInfor name="Du de" age={50} />
            </div>
        )
    }
}

export default MyComponent;