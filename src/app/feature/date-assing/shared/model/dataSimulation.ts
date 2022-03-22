import { DataDate } from "./dataDate";
import { DataUser } from "./dataUser";

export interface DataSimulation {
    mountLending: string;
    days: number;
    dataDate: DataDate;
    dataBasicPersonal: DataUser;
}
