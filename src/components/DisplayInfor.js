import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg"
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUsers } = this.props;
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => this.handleShowHide()}>
                        {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>I'm {user.age}</div>
                                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor;