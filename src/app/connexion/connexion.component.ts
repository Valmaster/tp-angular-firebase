import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent extends BaseComponent implements OnInit {

  formulaire = new FormGroup({
    email: new FormControl(),
    motDePasse: new FormControl()
  });

  constructor(
    private authentication: AngularFireAuth,
    public snackBar: MatSnackBar
  ) {
    super(snackBar);
  }

  ngOnInit(): void {
  }

  connexion() {
    console.log(this.formulaire.value);
    this.authentication
      .signInWithEmailAndPassword(
        this.formulaire.get('email').value,
        this.formulaire.get('motDePasse').value
      ).then(
        (response) => {
          console.log(response);
          this.afficherSnackbar('Utilisateur authentifié !');
        },
        (error) => {
          this.afficherSnackbar(environment.firebaseMessage[error.code]);
        }
      );
  }

  motDePasseOublie() {
    this.authentication.sendPasswordResetEmail(this.formulaire.get('email').value).then(
      () => {
        this.afficherSnackbar('Email de modification envoyé !');
      }
    )
  }
}
