import { DataDate } from "src/app/feature/date-assing/shared/model/dataDate";
import { DataUser } from "src/app/feature/date-assing/shared/model/dataUser";

export class DataSimulation {
    mountLending: string;
    days: number;
    dataDate: DataDate;
    dataBasicPersonal: DataUser;

    constructor(mountLending: string, days: number, dataDate: DataDate, dataBasicPersonal: DataUser){
        this.mountLending = mountLending;
        this.days = days;
        this.dataDate = dataDate;
        this.dataBasicPersonal = dataBasicPersonal
    }
}
