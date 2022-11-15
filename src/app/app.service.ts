import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export const BASE_URI: string = "http://localhost:8080/spring/demo/"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService{

  constructor(private httpClient: HttpClient) {
  }

  getModels(): Observable<any> {
    return this.httpClient.get<any>(BASE_URI + "getModels", httpOptions);
  }

}
