import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HomeComponent } from './pages/home/home.component';
import { CanActivateViaAuthGuard } from './guards/canActivateViaAuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CanActivateViaAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
