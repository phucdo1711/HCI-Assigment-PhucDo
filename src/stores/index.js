import ClassStore from './ClassStore';

const stores = {
    classes: new ClassStore(),   
};

window.stores = stores;

export default stores;
