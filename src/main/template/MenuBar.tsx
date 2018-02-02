import * as React from 'react';
import './Sidebar.css';
import {Menubar} from 'primereact/components/menubar/Menubar';
import {InputText} from "primereact/components/inputtext/InputText";
import {Button} from "primereact/components/button/Button";


interface MenuBarProps {}
interface MenuBarStateState {
    items: any
}

class MenuBar extends React.Component<MenuBarProps, MenuBarStateState>  {

    constructor(props: MenuBarProps) {
        super(props);
        this.state = {
            items: [ {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                    label: 'New',
                    icon: 'fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                    {label: 'Open'},
                    {separator:true},
                    {label: 'Quit'}
                ]
            },
                {
                    label: 'Edit',
                    icon: 'fa-edit',
                    items: [
                        {label: 'Undo', icon: 'fa-mail-forward'},
                        {label: 'Redo', icon: 'fa-mail-reply'}
                    ]
                },
                {
                    label: 'Help',
                    icon: 'fa-question',
                    items: [
                        {
                            label: 'Contents'
                        },
                        {
                            label: 'Search',
                            icon: 'fa-search',
                            items: [
                                {
                                    label: 'Text',
                                    items: [
                                        {
                                            label: 'Workspace'
                                        }
                                    ]
                                },
                                {
                                    label: 'File'
                                }
                            ]}
                    ]
                },
                {
                    label: 'Actions',
                    icon: 'fa-gear',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'fa-refresh',
                            items: [
                                {label: 'Save', icon: 'fa-save'},
                                {label: 'Update', icon: 'fa-save'},
                            ]
                        },
                        {
                            label: 'Other',
                            icon: 'fa-phone',
                            items: [
                                {label: 'Delete', icon: 'fa-minus'}
                            ]
                        }
                    ]
                },
                {
                    label: 'Quit', icon: 'fa-minus'
                }]
        };
    }


    render() {
        return (
            <Menubar model={this.state.items}>
                <InputText placeholder="Search" type="text"/>
                <Button label="Logout" icon="fa-sign-out" style={{marginLeft:4}}/>
            </Menubar>
    );
    }
}

export default MenuBar;
