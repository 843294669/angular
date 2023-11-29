import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AppService {

    constructor(private httpCilent: HttpClient) {
        
    }

    getData(): Observable<any> {
        return this.httpCilent.get("../assets/data/data.json");
    }
}