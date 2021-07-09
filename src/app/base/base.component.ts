import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  constructor(public _snackBar: MatSnackBar) { }

  afficherSnackbar(message: string){
    this._snackBar.open(
      message, null, {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'end'
      }
    );
  }

}
