import React, { Component } from 'react';

class User extends Component {
   permissionShow  = () =>{
    if (parseInt(this.props.acti) === 1) {
        return "Admin";
    } else {
        return "User"
    }
   }
   editFunction = () => {
    this.props.editFun();
    this.props.changeStatus()
   }
   getDelete = (id) => {
    this.props.getDelete(id);
   }
    render() {
        return (
        <tr>
            <td>{this.props.sss+1}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.phone}</td>
            <td>
                {
                this.permissionShow()
                }
            </td>
            <td>
            <div className="btn-group">
                <div className="btn btn-warning" onClick={() => this.editFunction()}><i className="fa fa-edit sua ">Sửa</i></div>
                <div className="btn btn-danger" onClick={(id) => this.getDelete(this.props.id)}><i className="fa fa-trash xoa ">Xóa</i></div>
            </div>
            </td>
        </tr>
        );
    }
}

export default User;