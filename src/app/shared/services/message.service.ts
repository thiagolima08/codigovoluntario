import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackbar: MatSnackBar) { }

  success(message: string): void {
    this.openSnackBar(message, 'success');
}

  info(message: string): void {
    this.openSnackBar(message, 'info');
  }

  warning(message: string): void {
    this.openSnackBar(message, 'warning');
  }

  error(message: string): void {
    this.openSnackBar(message, 'error');
  }

  private openSnackBar(message: string , classesExtras: string ): void {
    this.snackbar.open(message, 'Fechar', {
      duration: 2000,
      panelClass: classesExtras
    });
  }
}
