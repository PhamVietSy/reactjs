import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-3">Quản lý thành viên bằng ReactJS</h1>
                <p className="lead">Với dữ liêu JSON</p>
                <hr className="my-2" />
            </div>
            </div>

        );
    }
}

export default Header;