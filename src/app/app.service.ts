import { Injectable } from "@angular/core";

@Injectable()
export class AppService {

    constructor() {

    }

    getData() {
        return "Angular";
    }
}