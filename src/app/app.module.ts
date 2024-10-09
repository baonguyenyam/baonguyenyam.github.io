import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RouterOutlet } from '@angular/router';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
    imports: [
        FormsModule,
        RouterOutlet,
        BrowserModule,
        BrowserAnimationsModule,
        NzImageModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {}