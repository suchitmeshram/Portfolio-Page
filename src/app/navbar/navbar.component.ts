import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;
  searchText = '';

  @Output() search = new EventEmitter<string>();

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onSearch() {
    this.search.emit(this.searchText);
  }
}
