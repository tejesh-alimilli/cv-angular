import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavComponent } from "./app-nav/app-nav.component";
import { IntroSectionComponent } from "./intro-section/intro-section.component";
import { SkillsSectionComponent } from "./skills-section/skills-section.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        AppNavComponent,
        IntroSectionComponent,
        SkillsSectionComponent
    ]
})
export class AppModule { }
