import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTableDataSource } from "@angular/material/table";
import {MatSnackBar} from "@angular/material/snack-bar";
import { NbCalendarRange, NbDateService } from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';

import { AcademicYearDialogComponent } from "./academic-year-dialog/academic-year-dialog";
import { AcademicYear, AcademicYearData } from "../../../@core/interfaces/academic-year";

@Component({
  selector: "ngx-academic-period",
  styleUrls: ["./academic-period.component.scss"],
  templateUrl: "./academic-period.component.html",
})
export class AcademicPeriodComponent implements OnInit{

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
  // displayedColumns: string[] = [ "startDate", "endDate", "name", "isActive", "Action"];
  displayedColumns: string[] = [ "name", "isActive", "Action"];

  dataSource: MatTableDataSource<any>;

  constructor(protected dateService: NbDateService<Date>, 
    private dialogService: NbDialogService,
    private academicYearData: AcademicYearData,
    private toastService: NbToastrService) {
    
  }

  ngOnInit(): void {
      this.getAcademicYears();
  }

  openAcademicYearDialog(academicYear: AcademicYear = null) {
    this.dialogService.open(AcademicYearDialogComponent, {hasBackdrop: false, autoFocus: true, context: {academicYear:  academicYear}})
      .onClose.subscribe((academicYear: AcademicYear) => {
        if(academicYear) {
          console.log(academicYear);
          this.addOrUpdateAcademicYear(academicYear);
        }
      })  
  }

  getAcademicYears() {
    this.academicYearData.getAcademicYears().subscribe(
      (academicYears) => {
        if(academicYears.length > 0) {
        this.dataSource = new MatTableDataSource<AcademicYear>(academicYears);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        }
      },
      (error) => {
        this.toastService.show("Error", `Error fetching academic years`, { status: "danger" });
      }
    );
  }

  addOrUpdateAcademicYear(academicYear: AcademicYear) {
    console.log(academicYear);
    this.academicYearData.updateAcademicYear(academicYear).subscribe(
      (academicYear: AcademicYear) => {
        this.toastService.show("Success", `Academic year ${academicYear.name} has been ${academicYear.isActive ? "activated" : "deactivated"}`, { status: "success" });
        this.getAcademicYears();
      },
      (error) => {
        this.toastService.show("Error", `Error ${academicYear.isActive ? "activating" : "deactivating"} academic year ${academicYear.name}`, { status: "danger" });
      }
    );
  }
  }