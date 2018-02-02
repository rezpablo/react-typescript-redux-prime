import * as React from 'react';
import {Menubar} from 'primereact/components/menubar/Menubar';
import {Button} from 'primereact/components/button/Button';
import {Sidebar} from 'primereact/components/sidebar/Sidebar';

import './MenuBar.css';

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
                        <Button type="button" onClick={() => this.setState({visibleLeft: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleLeft: true})} label="Cancel" className="ui-button-secondary"/>
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
