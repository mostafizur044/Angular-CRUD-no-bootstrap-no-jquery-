import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";


@Injectable()
export class CarService {

  private url:string;
  private headers:any;

  constructor(
  		private _http: Http
  	) { 
  		this.url = 'https://dashboard-4b65f.firebaseio.com/Garage';
  		this.headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  }

  add(data:any) {
    let params = JSON.stringify(data);
    let url = this.url + '.json';
    return this._http.post(url, params,{headers: this.headers}).map(res=>res.json());
  }

  get() {
    let url = this.url + '.json';
    return this._http.get(url,{headers: this.headers}).map(res=>res.json());
  }

  delete(id) {
    let url = this.url +'/'+ id + '.json';
    return this._http.delete(url,{headers: this.headers}).map(res=>res.json());
  }


  initModal(){
    var modal = document.getElementById('mainModal');
    modal.style.display = "none";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }

  open(){
    var modal = document.getElementById('mainModal');
    modal.style.display = "block";
  }

  close(){
    var modal = document.getElementById('mainModal');
    modal.style.display = "none";
  }
  
  

}