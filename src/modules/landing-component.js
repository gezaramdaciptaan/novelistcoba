import React, { Component, Fragment } from 'react'; //import dari react biasa
import { Layout, Row, Col, Modal } from 'antd'; //import dari ant seperti biasa
import Navbar from '../common/layout/navbar-landing' //import komponen navbar dari folder layout yang ada di folder common 
import ButtonHome from '../common/component/button/button-home'; //import komponen buttonhome yang ada di dalamn folder component yang ada di folder common
import '../common/layout/css/landing-style.css'; //import css dari folder css yang ada di folder assets
import firebase from '/.firebase'
const { Content } = Layout; // membuat konstanta content yang berasal dari bawaan layout ant design, bisa dicek di dokumentasi antdesign

class LandingComponent extends Component{
    render(){
        return(
            <Fragment className="fragment">
            <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/350/200/any" alt=""/>
            </div>
            <div className="content">
                <p className="title"> Judul </p>
                <p className="penulis"> Penulis </p>
                <p className="desc"> Sinopsis </p>
            </div>
        </div>
            </Fragment>
            
        )
        
    }
}

export default LandingComponent;