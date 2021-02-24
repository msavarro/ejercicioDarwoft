import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: AuthServiceService, private router: Router) { }

    canActivate() {
        if (!this.authService.isLogged()) {
            alert('No estás logueado');
            this.router.navigateByUrl('/home');
            return false;
        }
        return true;
    }
}