import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserData.id,
            name: this.props.editUserData.name,
            phone: this.props.editUserData.phone,
            trangthai: this.props.editUserData.trangthai,
            userOject:{}
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [name] : value
            }
        );
        
    };
    saveButton = () => {
        var info = {};
        info.id = this.state.id; 
        info.name = this.state.name; 
        info.phone = this.state.phone; 
        info.trangthai = this.state.trangthai; 
        this.props.changeStatus();
        this.props.getUserEdit(info);
        
    }    
    render() {
        // console.log(this.state);
        return (
            <div className="col-12">
            <form>
            <div className="card text-white bg-success mb-3 mt-2">
            <div className="card-header text-center">
                Sửa thông tin User
            </div>
            <div className="card-body text-primary">
                <div className="form-group">
                <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserData.name} className="form-control"  name="name"  placeholder="Tên user" />
                </div>
                <div className="form-group">
                <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserData.phone} className="form-control"   name="phone" placeholder="SĐT" />
                </div>
                <div className="form-group">
                <select onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserData.trangthai} className="form-control" name="trangthai"  required >
                    <option value>Chọn quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                </select>
                </div>
                <div className="form-group">
                <input type="button" className="btn btn-block btn-warning"  value="Sửa" onClick={() => this.saveButton()}/> 
                </div>
            </div>
            </div>
            </form>
            </div>
        );
    }
}

export default Edit;