import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cart, emptyCart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-button-cart-view-mobile',
  templateUrl: './button-cart-view-mobile.component.html',
  styleUrls: ['./button-cart-view-mobile.component.scss']
})
export class ButtonCartViewMobileComponent implements OnInit {

  @Input() cart: Cart = emptyCart();
  closeResult: string = '';

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
