// @ts-nocheck
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Hero } from "../hero";
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {
  @Input() hero: Hero;
  @Output() delete = new EventEmitter();

  onDeleteClick($event): void {
    $event.stopPropagation();
    this.delete.next();
  }
}
