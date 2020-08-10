import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private closingStatusChanged = new BehaviorSubject<boolean>(false);
  public changeClosingStatus = this.closingStatusChanged.asObservable();
 
  private closingStatusallChanged = new BehaviorSubject<boolean>(false);
  public changeClosingallStatus = this.closingStatusallChanged.asObservable();

  constructor() { }

  public closingStatusUpdated(val: any) {
    this.closingStatusChanged.next(val);
  }
  public closingStatusallUpdated(val: any) {
    this.closingStatusallChanged.next(val);
  }
}
