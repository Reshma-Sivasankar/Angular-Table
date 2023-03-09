import { Component, Input, OnInit } from '@angular/core';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {


  loading: boolean = true;
  isError: boolean = false;
  dataSource: any;

  propertyType: Array<string> = ['code', 'name', 'type',
    'upfont_commission', 'high_trail_commission', 'low_trail_commission', 'balance_multiplier']
  headers: any = {
    thead1: ['Bank Code', 'Display Name', 'Type'],
    tSubHead: ['Upfront', 'Trail High', 'Trail Low'],
    thead2: ['Balance Mutipier', 'Active', 'Hide', 'Edit'],
  };
  commissionSubHeader:any=['upfont_commission','high_trail_commission','low_trail_commission'];

  constructor(private dataService: TableDataService) {
  }

  ngOnInit() {
    //setting timeout to be able to see the spinner as per Test Scenario 1 
    setTimeout(() => {
      this.dataService.getLenderDetails().subscribe((data) => {
        this.dataSource = data.data;

        //appending % to the Commission values and Capitalize the first letter of Type values
        this.dataSource.forEach((element: any) => {
          this.commissionSubHeader.forEach((val: string | number) => 
            element['attributes'][val] = "%" + element['attributes'][val]
          );
          element['attributes']['type'] = element['attributes']['type'].charAt(0).toUpperCase() + element['attributes']['type'].slice(1);
        });
      }, (error) => {
        this.isError = true;
        console.log('HTTP Error', error);
      })
      this.loading = false;
    }, 2000);
  }

  reload() {
    location.reload();
  }

}
