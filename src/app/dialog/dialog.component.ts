import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Postulation} from '@app/models/postulation';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public _dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public _postulation: Postulation) {
  }

  ngOnInit() {
  }

}
