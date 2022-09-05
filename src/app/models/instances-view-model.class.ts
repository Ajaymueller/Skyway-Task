export class InstancesViewModel {
    Date_Time: string;
    Id: number;
    Title: string;

    constructor(json: any = null) { if (json) { this.fromJSON(json); } }

    fromJSON(json: any) {
        if (json) {
            for (var propName in json) {
                let prop = propName.charAt(0).toUpperCase() + propName.slice(1);
                this[prop] = json[propName];
            }
        }
    }
}