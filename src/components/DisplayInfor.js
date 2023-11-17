import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
    const { listUsers, handleDeleteUser } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect(() => {
        if (listUsers.length === 0) {
            alert("You deleted all the users");
        }

        setTimeout(() => {
            document.title = "Vu Feng";
        }, 3000);
    }, [listUsers])

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name is {user.name}</div>
                                <div>I'm {user.age}</div>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;