import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public _dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public status: string) {
  }

  ngOnInit() {
  }

}
