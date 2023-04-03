import React, { Component } from 'react';

class AddUser extends Component {
   constructor(props) {
    super(props);
    this.state = {
        id:"",
        name: "",
        phone:"",
        trangthai:"",
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
        // var item = {}
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.phone = this.state.phone;
        // item.trangthai = this.state.trangthai;
        // console.log(item);
    };
    kiemTratrangthai = () => {
        if (this.props.hienThiForm === true) {
            return ( 
                <div className="col">
            <form>
            <div className="card border-primary mb-3 mt-2">
            <div className="card-header">
                Thêm mới
            </div>
            <div className="card-body text-primary">
                <div className="form-group">
                <input type="text" className="form-control" onChange={(event) => this.isChange(event)} name="name"  placeholder="Tên user" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control" onChange={(event) => this.isChange(event)}  name="phone" placeholder="SĐT" />
                </div>
                <div className="form-group">
                <select className="form-control" name="trangthai" onChange={(event) => this.isChange(event)}  >
                    <option value>Chọn quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                </select>
                </div>
                <div className="form-group">
                <input type="reset" className="btn btn-block btn-primary" onClick = {(name,phone,trangthai) => this.props.add(this.state.name,this.state.phone,this.state.trangthai)} value="Thêm" /> 
                </div>
            </div>
            </div>
            </form>
            </div>)
        }
    }
  
    render() {
        // console.log(this.state);
        return (
            
                <div className="card text-left">
                   
                   {
                    this.kiemTratrangthai()
                   }
                   
                  
                </div>
           

        );
    }
}

export default AddUser;