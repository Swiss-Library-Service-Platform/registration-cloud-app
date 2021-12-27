import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { LibraryManagementService } from '../services/library-management.service';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.scss']
})
export class UsermenuComponent implements OnInit {

  constructor(
    private _Activatedroute:ActivatedRoute,
    private _location: Location,
    private _libraryManagementService: LibraryManagementService
  ) { }

  currentPrimaryId: String;
  subscription;

  ngOnInit(): void {
    console.log("before:" + this.currentPrimaryId);
    this.subscription = this._libraryManagementService.getPrimaryId().subscribe(
      res => {
        this.currentPrimaryId = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateBack(): void {
    this._location.back();
  }


}
