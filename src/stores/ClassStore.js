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


const listClasses = [
    {id: "1",name: 'Human Computer Interaction', code: 'HCI', term: 'Spring 2018', studentNum: 120},
    {id: "2",name: 'Human Computer Interaction', code: 'HCI-RELEARN', term: 'Relearn - Spring 2018', studentNum: 120},
    {id: "3",name: 'Web Technology', code: 'WEB', term: 'Spring 2018', studentNum: 120},
    {id: "4",name: 'Special Subject 2 - 6C15', code: 'SS2', term: 'Spring 2018', studentNum: 30},
    {id: "5",name: 'Project Management', code: 'PJM', term: 'Spring 2018', studentNum: 120},
    {id: "6",name: 'Information System', code: 'IST', term: 'Spring 2018', studentNum: 102},    
]

class ClassStore {
    @observable classes: Map = new ObservableMap([]);

    @action
    addClass = (cl) => {
        this.classes.set(cl.id, cl)
    }

    @computed
    get getClasses(): Array{
        return Array.from(this.classes.values());
    }

    getClass = (id) => {
        return this.classes.get(id)
    }
    constructor() {
        listClasses.forEach((cl) => {
            this.addClass(cl)
        })
    }

}

export default ClassStore;