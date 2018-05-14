import React, { Component } from 'react';
import {
    AkNavigationItem,
    AkCreateDrawer
} from '@atlaskit/navigation';
import ArrowLeft from '@atlaskit/icon/glyph/arrow-left';
import { inject } from 'mobx-react';
import UiStore from '../stores/UiStore';

type Props = {
    drawerIsOpen: boolean,
    closeDrawer: Function,
    ui: UiStore
};

@inject('ui')
class CreateDrawer extends Component {
    props: Props;

    createAccount = () => {
        this.props.ui.openModal('CREATE_ASSIGNMENT');
        this.props.closeDrawer();
    }

    render() {
        const { drawerIsOpen, closeDrawer } = this.props;

        return (
            <AkCreateDrawer
                backIcon={<ArrowLeft label="Back" />}
                primaryIcon={null}
                isOpen={drawerIsOpen}
                onBackButton={closeDrawer}
            >
                <AkNavigationItem text="Create a new assignment" onClick={this.createAccount} />
            </AkCreateDrawer>
        );
    }
}

export default CreateDrawer;
