import { Component, EventEmitter, Output } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
        (status: string) => alert('New Status: '+status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
/*    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/
    this.loggingService.logStatesChange(accountStatus);
   /* const service = new LoggingService();
    service.logStatesChange(accountStatus);*/
   /* console.log('A server status changed, new status: ' + accountStatus);*/
  }
}
