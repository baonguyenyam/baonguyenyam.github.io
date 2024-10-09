import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RouterOutlet } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterOutlet,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [    
        provideAnimations()
    ]
})
export class AppModule {}