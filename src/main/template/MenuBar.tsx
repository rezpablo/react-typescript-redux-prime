import * as React from 'react';
import {Menubar} from 'primereact/components/menubar/Menubar';
import {Button} from 'primereact/components/button/Button';
import {Sidebar} from 'primereact/components/sidebar/Sidebar';

import './MenuBar.css';
import {Link} from 'react-router-dom';

interface MenuBarProps {}
interface MenuBarStateState {
    visibleLeft: boolean;
    visibleRight: boolean;
    visibleTop: boolean;
    visibleBottom: boolean;
    visibleFullScreen: boolean;
}

class MenuBar extends React.Component<MenuBarProps, MenuBarStateState>  {

    constructor(props: MenuBarProps) {
        super(props);
        this.state = {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFullScreen: false,
        };
    }

    render() {
        return (
            <div>
                <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({visibleLeft: false})}>
                    <div className="sidebar-content">
                        <ul className="sidebar-ul">
                            <li className="sidebar-li">
                                <Link className="sidebar-a" to="/" onClick={() => this.setState({visibleLeft: !this.state.visibleLeft})}>
                                    <i className="fa fa-fw fa-home" />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="sidebar-li">
                                <Link className="sidebar-a" to="/people" onClick={() => this.setState({visibleLeft: !this.state.visibleLeft})}>
                                    <i className="fa fa-fw fa-user" />
                                    <span>People</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Sidebar>


                <div className="content-section implementation">
                    <Menubar>
                        <Button onClick={() => this.setState({visibleLeft: !this.state.visibleLeft})} icon="fa-bars"/>
                    </Menubar>
                </div>
            </div>
    );
    }
}

export default MenuBar;
