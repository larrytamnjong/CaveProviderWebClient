import {Component, Input, OnInit}  from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { AcademicYear } from '../../../../@core/interfaces/academic-year';
@Component({
selector: "ngx-academic-year-dialog",
templateUrl: "./academic-year-dialog.html",
styleUrls: ["./academic-year-dialog.scss"]
})

export class AcademicYearDialogComponent implements  OnInit {

    @Input() academicYear: AcademicYear;

    ngOnInit(): void {
        if (this.academicYear == null) {
            this.academicYear = new AcademicYear();
        }
    }

    constructor(protected ref: NbDialogRef<AcademicYearDialogComponent>) {}

    cancel() {
        this.ref.close();
      }
    
      submit(academicYear) {
        this.ref.close(academicYear);
      }


}
