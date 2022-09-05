import { InstancesViewModel } from "./instances-view-model.class";

export class EventViewModel {
    ID: number;
    Title: string;
    ShortDescription: string;
    DateTime: any;
    Time: any;
    Instances: Array<InstancesViewModel> = new Array<InstancesViewModel>();

    constructor(json: any = null) { if (json) { this.fromJSON(json); } }

    fromJSON(json: any) {
        if (json) {
            for (var propName in json) {
                let prop = propName.charAt(0).toUpperCase() + propName.slice(1);
                this[prop] = json[propName];
            }
        }
        this.getInstances(json.instances);
        this.setTime(json.instances);
    }

    getInstances(instances: any) {
        this.Instances = new Array<InstancesViewModel>();
        instances.forEach(element => { this.Instances.push(new InstancesViewModel(element)); });
    }

    setTime(instances) {
        instances.forEach(x =>
            this.DateTime = new Date(x.date_time));
        this.Time = this.DateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }
}