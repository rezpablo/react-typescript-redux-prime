import * as React from 'react';
import {Sidebar} from 'primereact/components/sidebar/Sidebar';
import {Button} from "primereact/components/button/Button";
import './Sidebar.css';

interface HeaderProps {}
interface HeaderState {
    visibleLeft: boolean,
    visibleRight: boolean,
    visibleTop:boolean,
    visibleBottom: boolean,
    visibleFullScreen:boolean
}

class Header extends React.Component<HeaderProps, HeaderState>  {

    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            visibleLeft: false,
            visibleRight: false,
            visibleTop:false,
            visibleBottom: false,
            visibleFullScreen:false
        };
    }


    render() {
        return (
            <div className="content-section implementation">
                <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({visibleLeft: false})}>
                    <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1>
                    <Button type="button" onClick={() => this.setState({visibleLeft: true})} label="Save" className="ui-button-success"/>
                    <Button type="button" onClick={() => this.setState({visibleLeft: true})} label="Cancel" className="ui-button-secondary"/>
                </Sidebar>
                <a  onClick={() => this.setState({visibleLeft:true})} className="float" >
                    <i className="fa fa-arrow-right my-float"></i>
                </a>

            </div>
    );
    }
}

export default Header;
