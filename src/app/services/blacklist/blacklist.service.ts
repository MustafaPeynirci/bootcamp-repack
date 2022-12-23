import { IBlackListDeleteRequestModel } from './../../models/blacklist/BlacklistDeleteModel';
import { IBlackListUpdateRequestModel } from './../../models/blacklist/BlacklistUpdateModel';
import { IBlackListAddRequestModel } from './../../models/blacklist/BlacklistAddRequestModel';
import { IBlackListAllModel } from './../../models/blacklist/BlacklistAllModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  apiUrl = 'http://localhost:3000/blacklist'

  constructor(private httpClient:HttpClient) { }

  getAllBlacklists():Observable<IBlackListAllModel[]>{
    return this.httpClient.get<IBlackListAllModel[]>(
      this.apiUrl
    )
  }

  getBlacklistById(id:number):Observable<IBlackListAllModel>{
    return this.httpClient.get<IBlackListAllModel>(
      this.apiUrl + "/" + id
    )
  }

  addBlacklist(data:IBlackListAddRequestModel):Observable<IBlackListAllModel>{
    return this.httpClient.post<IBlackListAllModel>(
      this.apiUrl, data
    )
  }

  updateBlacklist(id:number, data:IBlackListUpdateRequestModel):Observable<IBlackListUpdateRequestModel>{
    return this.httpClient.put<IBlackListUpdateRequestModel>(
      this.apiUrl + "/" + id, data
    )
  }

  removeApplicant(id:number){
    return this.httpClient.delete<IBlackListDeleteRequestModel>(
      this.apiUrl + "/" + id
    )
  }

}
