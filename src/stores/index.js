import ClassStore from './ClassStore';
import AssignmentStore from './AssignmentStore';
import UiStore from './UiStore';

const stores = {
    classes: new ClassStore(),   
    assignments: new AssignmentStore(),
    ui: new UiStore()
};

window.stores = stores;

export default stores;
