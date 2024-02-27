import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css'], // Corrected styleUrls typo
})
export class Dashboard3Component {
  // Function to toggle sidebar visibility
  toggleSidebar() {
    const sidebar = document.getElementById('default-sidebar');
    if (sidebar) {
      if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
      } else {
        sidebar.classList.add('hidden');
      }
    }
  }
}
