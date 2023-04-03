import '../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import React, { Component } from 'react';
import DataUser from './data.json';

const { v4: uuidv4 } = require('uuid');

class App extends Component {
   constructor(props) {
        super(props);
        this.state = {
            hienThiForm : false,
            data : DataUser,
            searchText: '',
            editUserStatus: false,
            userEdit : ''
        }
    }
    getUserEditApp = (info) => {
      console.log("thong tin la "+ info.name);
      this.state.data.forEach((value,key) =>{
        if (value.id === info.id) {
          value.name = info.name;
          value.phone = info.phone;
          value.trangthai = info.trangthai;
        }
      })
    }
    thayFrom = () => {
      this.setState({
        editUserStatus: !this.state.editUserStatus
      });
    }
    thayDoiTrangThai = () =>{
      this.setState({        
        hienThiForm: !this.state.hienThiForm
    });
    }
    getTextSearch = (dl) =>{
      this.setState({
        searchText:dl
      });
      console.log('Du lieu nhan dc la' + this.state.searchText );
    } 
    getNewUserData = (name,phone,trangthai) => {
      var item = {}
      item.id = uuidv4();
      item.name = name;
      item.phone = phone;
      item.trangthai = trangthai;
      var items = this.state.data;
      items.push(item);
      this.setState({
        data: items
      });
      console.log(this.state.data);
      
    };
    getEditUser = (user) => {
      this.setState({
        userEdit:user
      }
      );
      
    }
    getDeleteUser = (id) => {
      var tempData = this.state.data.filter(item => item.id !== id)
      
      this.setState({
        data: tempData
      });
      // tempData.forEach((value,key) => {
      //   if (value.id === id) {
      //     console.log("ok");
      //   }
      // })
    }
  render() {
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if (item.name.indexOf(this.state.searchText) !== -1 ) {
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    return (
      <div >
      <Header/>
      <div className="searchForm">
        <div className="container">
            <div className="row">
              <Search getUserEditApp = {(info) => this.getUserEditApp(info)} 
              ketNoi = {() => this.thayDoiTrangThai()} 
              hienThiNut = {this.state.hienThiForm} 
              checkConnecProps = {(dl) => this.getTextSearch(dl)}
              editUserStatus = {this.state.editUserStatus}
              changeStatus = {() => this.thayFrom()}
              editUserData = {this.state.userEdit}
              />
              <TableData 
              getDelete = {(id) => this.getDeleteUser(id)} 
              dataUserProps = {ketqua} 
              editUser = {(user) => this.getEditUser(user)}
              changeStatus = {() => this.thayFrom()}
               />
              <AddUser hienThiForm = {this.state.hienThiForm} add={(name,phone,trangthai) => this.getNewUserData(name,phone,trangthai)}/>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

 
 
