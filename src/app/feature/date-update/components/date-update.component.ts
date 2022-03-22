import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// // import { AssignDateModel } from '@core/interface/assignDate';
// import { UpdateDateService } from '../services/update-date.service';

@Component({
  selector: 'app-date-update',
  templateUrl: './date-update.component.html',
  styleUrls: ['./date-update.component.scss']
})
export class DateUpdateComponent implements OnInit {
  isValid: boolean;
  formUpdate: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit() {
    this.formUpdate = new FormGroup({
      document: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    });
  }

  public updateDateService() {
    // let documentUser = this.formUpdate.controls['document'].value;

    // this.updateService.updateDate(documentUser).subscribe((res: AssignDateModel) => {

    // });

  }

  get fUpdate() { return this.formUpdate }

}
