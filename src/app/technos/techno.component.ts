import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {AngularFirestore} from '@angular/fire/firestore';
import {FormComponent} from './form/form.component';

export interface Technno {
  id: string;
  name: string;
  description: string;
  rate: number;
}

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.css']
})

export class TechnoComponent extends BaseComponent implements OnInit {
  technos: Observable<any>;

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public firestore: AngularFirestore
  ) {
    super(snackBar);
  }

  ngOnInit(): void {
    this.technos = this.firestore.collection('technos').valueChanges({idField: 'id'});
  }

  add() {
    this.dialog.open(FormComponent, {width: '600px'});
  }

  update(techno) {
    this.dialog.open(FormComponent, {width: '600px', data: techno});
  }

  delete(techno: Technno) {
    this.firestore.collection('technos').doc(techno.id).delete().then(
      () => {
        this.afficherSnackbar('Techno has been removed');
      }
    ).catch((error) => {
      console.log(error);
      this.afficherSnackbar('techno remove has failed');
    })
  }

}
