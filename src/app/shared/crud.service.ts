import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpData:HttpClient) { }
  postData(routename: string,data: any)
  {
    return this.httpData.post(environment.apiurl+routename,data,{
      headers: {
        'Content-Type': 'application/json',
        // 'Cache-Control': 'no-cache',
        'Accept': 'application/json',
      }
    })
  }
  getData(routename:string)
  {
    return this.httpData.get(environment.apiurl+routename);
  }
}
