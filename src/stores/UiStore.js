import {
    observable, action
    // , computed 
} from 'mobx';
// import Store from '.';

class UiStore {
    @observable isOpenNav: boolean = true;
    @observable navWidth: number = 304;
    @observable modal: ?boolean = false;

    @action
    resizeNav = (resizeState: { isOpen: boolean, width: number }) => {
        this.isOpenNav = resizeState.isOpen;
        this.navWidth = resizeState.width;
    };

    @action
    openModal = (modalName: string) => {
        this.modal = modalName
    }

    @action
    closeModal = () => {
        this.modal = false;
    }
}

export default UiStore;
