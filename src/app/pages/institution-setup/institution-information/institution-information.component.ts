import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NbToastrService, NbComponentStatus } from "@nebular/theme";
import { DomSanitizer } from "@angular/platform-browser";


import {
  Institution,
  InstitutionData,
} from "../../../@core/interfaces/institution";

@Component({
  selector: "ngx-institution-information",
  styleUrls: ["./institution-information.component.scss"],
  templateUrl: "./institution-information.component.html",
})
export class InstitutionInformationComponent implements OnInit {
  institutionDetails: Institution = new Institution();
  imageSource: any;
  canSave: boolean = false;
  constructor(
    private institutionData: InstitutionData,
    private cd: ChangeDetectorRef,
    private toastService: NbToastrService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.getInstitutionDetails();
  }

  getInstitutionDetails() {
    this.institutionData.getInstitutionDetails().subscribe(
      (information: Institution) => {
        if (information != null) {
          this.institutionDetails = information;
          this.setImageSource(information.logo);
        }
      },
      (error) => {
        this.showFailureToast("danger");
      }
    );
    this.cd.detectChanges();
  }

  addOrUpdateInstitutionDetails() {
    if (
      window.confirm("Are you sure you want to update the institution details?")
    ) {
      this.institutionData
        .addOrUpdateInstitutionDetails(this.institutionDetails)
        .subscribe(
          (information) => {
            if (information != null) {
              this.institutionDetails = information;
              this.showSuccessToast("success");
              this.setImageSource(information.logo);
            }
          },
          (error) => {
            this.showFailureToast("danger");
          }
        );
    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.institutionDetails.logo = reader.result as string;
      this.setImageSource(this.institutionDetails.logo);
    };
  }

  showSuccessToast(status: NbComponentStatus) {
    this.toastService.show(status, `Institution details updated successfully`, {
      status,
    });
  }
  showFailureToast(status: NbComponentStatus) {
    this.toastService.show(status, `Details where not updated`, { status });
  }

  setImageSource(logo: string) {
    this.imageSource = this.sanitizer.bypassSecurityTrustUrl(logo);
  }
}
