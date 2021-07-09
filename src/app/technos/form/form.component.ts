import {Component, Inject} from '@angular/core';
import {BaseComponent} from '../../base/base.component';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFirestore} from '@angular/fire/firestore';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  templateUrl: './form.component.html',
})

export class FormComponent extends BaseComponent {
  form = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    rate: new FormControl()
  });

  constructor(private _snackbar: MatSnackBar, private firestore: AngularFirestore, @Inject(MAT_DIALOG_DATA) public data: any) {
    super(_snackbar);
    console.log(data);
  }

  onSubmit() {
    if (this.data) {
      this.firestore.collection('technos').doc(this.data.id).update({
        name: this.form.get('name').value,
        description: this.form.get('description').value,
        rate: this.form.get('rate').value,
      })
    } else {
      this.firestore.collection('technos').add({
        name: this.form.get('name').value,
        description: this.form.get('description').value,
        rate: this.form.get('rate').value,
      }).then(
        () => {
          this.afficherSnackbar('Techno has been submitted !!!');
        }
      ).catch((error) => {
        console.log(error);
        this.afficherSnackbar('Techno submit has failed');
      })
    }
  }

}
