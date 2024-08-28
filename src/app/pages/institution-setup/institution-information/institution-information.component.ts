import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import {
  Institution,
  InstitutionData,
} from "../../../@core/interfaces/common/institution";

@Component({
  selector: "ngx-institution-information",
  styleUrls: ["./institution-information.component.scss"],
  templateUrl: "./institution-information.component.html",
})
export class InstitutionInformationComponent implements OnInit {
  institutionDetails: Institution = new Institution();
  canSave: boolean = false;
  constructor(private institutionData: InstitutionData,  private cd: ChangeDetectorRef,private toastService: NbToastrService) {}
  ngOnInit(): void {
    this.getInstitutionDetails();
  }

  getInstitutionDetails() {
    this.institutionData.getInstitutionDetails().subscribe(
      (information: Institution) => {
        this.institutionDetails = information;
      },
      (error) => {
        this.showFailureToast('danger');
      }
      
    );
    this.cd.detectChanges();
  }

  addOrUpdateInstitutionDetails() {
    this.institutionData
      .addOrUpdateInstitutionDetails(this.institutionDetails)
      .subscribe(
        (information) => {
          this.institutionDetails = information;
          this.showSuccessToast('success');
        },
        (error) => {
          this.showFailureToast('danger');
        }
      );
  }

  showSuccessToast(status: NbComponentStatus) {
    this.toastService.show(status, `Institution details updated successfully`, { status });
  }
  showFailureToast(status: NbComponentStatus) {
    this.toastService.show(status, `Details where not updated`, { status });
  }
}
