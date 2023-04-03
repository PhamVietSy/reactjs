import React, { Component } from 'react';
import User from './User';

class TableData extends Component {
  getDelete = (id) => {
    // console.log(id);
    this.props.getDelete(id);
  }
  mappingUser = () => this.props.dataUserProps.map((value,key) => (
    <User getDelete ={(id) => this.getDelete(id) } changeStatus = {() => this.props.changeStatus()} key={key} sss={key} id={value.id} userName={value.name} phone ={value.phone} acti = {value.trangthai} editFun = {(user) => this.props.editUser(value)} />
  ))
  
    render() {
      // console.log(this.props.editUser);
        return (
            <div className="col">
  <table className="table table-striped table-inverse table-hover">
    <thead className="thead-inverse">
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>SĐT</th>
        <th>Quyền</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
   {
   this.mappingUser()
   }
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;