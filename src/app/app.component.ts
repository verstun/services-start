import { Component, OnInit } from '@angular/core';

import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: {name: string, status: string}[] = [];
  constructor(private accountService: AccountService){}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status:string}) {
   /* this.accounts.push(newAccount);*/
    this.accountService.addAccount(name, status);
  }

  onStatusChanged(updateInfo: {id:number, newStatus: string}){
    this.accountService.updateStatus(updateInfo.id, updateInfo.newStatus);
   /* this.accounts[updateInfo.id].status = updateInfo.newStatus;*/
  }
}
