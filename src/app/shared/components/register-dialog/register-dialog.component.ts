import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
})
export class RegisterDialogComponent {
  constructor(private matDialog: MatDialog, private dialogRef: MatDialogRef<RegisterDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onLoginClick(): void {
    this.dialogRef.close();
    this.matDialog.open(LoginDialogComponent);
  }
}
