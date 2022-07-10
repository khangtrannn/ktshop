import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/shared/components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from 'src/app/shared/components/register-dialog/register-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private matDialog: MatDialog) {}

  onRegisterClick(): void {
    this.matDialog.open(RegisterDialogComponent);
  }

  onLoginClick(): void {
    this.matDialog.open(LoginDialogComponent);
  }
}
