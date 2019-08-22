import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'myuw-compact-card',
  templateUrl: './compact-card.component.html',
  styleUrls: ['./compact-card.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CompactCardComponent {
  MAINTENANCE_LIFECYCLE = "MAINTENANCE"
  @Input() title: string; // Card title
  @Input() uid: string; // Unique name of the card frame
  @Input() icon: string;
  @Input() url: string;

  @Output() deleteCardNotify = new EventEmitter<string>();

  constructor(@Inject(DOCUMENT) private document: any) {
    library.add(fas);
  }

  /**
   * Notify the page using the web component that the user clicked the delete button.
   */
  handleCardDelete() {
    this.deleteCardNotify.emit(this.uid);
  }

  /**
    * Go to given link when card is clicked. If url starts with http(s) open
    * link in new tab.
   */
  handleCardClick() {
    var reg = new RegExp('^http(s)?');
    if(reg.test(this.url)) {
      window.open(this.url, "_blank");
    } else {
      this.document.location.href = this.url;
    }
  }
}
