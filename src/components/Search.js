import React, { Component } from 'react';
import Edit from './Edit';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temValue:'',
            userObj:{}
        }
    }
    isShowForm = () => {
        if (this.props.editUserStatus === true) {
            return <Edit getUserEdit={(info) => this.getUserEdit(info)} changeStatus={()=>this.props.changeStatus()} editUserData={this.props.editUserData}/>
        }
    }
    getUserEdit = (info) => {
        this.setState({
            userObj : info
        });
        this.props.getUserEditApp(info)
        
    }
    isChange = (event) => {
        this.setState({
            temValue: event.target.value
        });
        this.props.checkConnecProps(this.state.temValue);
    }
    hienThiNut = () =>{
        if (this.props.hienThiNut === true ) {
            return <div className="btn btn-block btn-outline-danger" onClick={() =>this.props.ketNoi()}>Đóng lại</div>
        }else{
            return <div className="btn btn-block btn-outline-info" onClick={() =>this.props.ketNoi()}>Thêm mới</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className='row'>
               {
                this.isShowForm()
               }
                </div>
            <div className="form-group">
                <div className="btn-group">
                <input type="text" className="form-control" onChange={(event)=>this.isChange(event)}  placeholder="Nhập từ khóa" />
                <div onClick={(dl)=>this.props.checkConnecProps(this.state.temValue)} className="btn btn-info">Submit</div>
                </div>
            </div>
            <div className="form-group">
                {this.hienThiNut()}
            
            </div>
            <hr/>
            </div>
            
        );
    }
}

export default Search;