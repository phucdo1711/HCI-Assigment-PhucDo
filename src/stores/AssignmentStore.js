import {
    observable,
    computed,
    action,
    ObservableMap,
    runInAction,
    intercept,
    observe,
    // extendObservable, autorun
} from 'mobx';

const listAss = [
    {id : '1', name: 'Assignment 2' , subject : 'HCI', deadline: "24/5/2018" },
    {id : '2',name: 'Assignment 1' , subject : 'HCI', deadline: "24/5/2018" },
    {id : '3',name: 'Clone website 2' , subject : 'HCI', deadline: "24/5/2018" },
    {id : '4', name: 'Assignment 2' , subject : 'HCI', deadline: "24/5/2018" },
    {id : '5',name: 'Assignment 2' , subject : 'HCI', deadline: "24/5/2018" },    
]

class AssignmentStore {
    @observable assignments: Map = new ObservableMap([]);
    
    @action 
    addAss = (ass) => {
        this.assignments.set(ass.id, ass)
    }

    @computed 
    get getAssignments() {
        return Array.from(this.assignments.values());
    }

    @action 
    deleteAss = (id ) => {
        this.assignments.delete(id)
    }
    constructor(){
        listAss.forEach((ass) => {
            this.addAss(ass)
        })
    }
}

export default AssignmentStore;