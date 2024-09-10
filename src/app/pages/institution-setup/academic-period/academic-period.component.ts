import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTableDataSource } from "@angular/material/table";
import {MatSnackBar} from "@angular/material/snack-bar";
import { NbCalendarRange, NbDateService } from '@nebular/theme';





import {
  Institution,
  InstitutionData,
} from "../../../@core/interfaces/institution";

@Component({
  selector: "ngx-academic-period",
  styleUrls: ["./academic-period.component.scss"],
  templateUrl: "./academic-period.component.html",
})
export class AcademicPeriodComponent implements OnInit{

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = [ "Start Date", "End Date", "Name", "Is Active", "Action"];
  dataSource: MatTableDataSource<any>;

  constructor(protected dateService: NbDateService<Date>) {
    
  }

  ngOnInit(): void {
      this.displayedColumns = [ "Start Date", "End Date", "Name", "Is Active", "Action"];
  }

  }