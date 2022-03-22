import { DataSimulation } from '@core/interface/dataSimulation';

export class AssignDateModel {
    id: string;
    dataSimulation: DataSimulation;

    constructor(id: string, dataSimulation: DataSimulation){
        this.id = id;
        this.dataSimulation = dataSimulation;
    }

}
