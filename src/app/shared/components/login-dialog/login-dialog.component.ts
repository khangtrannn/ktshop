import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  constructor(private matDialog: MatDialog, private dialogRef: MatDialogRef<LoginDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

  openRegisterDialog(): void {
    this.dialogRef.close();
    this.matDialog.open(RegisterDialogComponent);
  }
}
