import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRippleModule } from "@angular/material/core";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
