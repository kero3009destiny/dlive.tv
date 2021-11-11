import { Component, Vue } from 'vue-property-decorator';
@Component
export default class DraggableMixin extends Vue {
  public pos1: any = 0;
  public pos2: any = 0;
  public pos3: any = 0;
  public pos4: any = 0;
  public elmnt: any = null;

  public dragElement(elmnt: any) {
    if (elmnt === undefined || elmnt === null) {
      // throw new Error("receive null element in dragElement")
      return;
    }
    this.elmnt = elmnt;
    this.elmnt.onmousedown = this.dragMouseDown;
    this.elmnt.ontouchstart = this.dragTouchDown;
    // this.elmnt.addEventListener('touchstart', this.dragMouseDown, false);
  }

  public dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    document.onmouseup = this.closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = this.elementDrag;
  }

  public dragTouchDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    this.pos3 = e.changedTouches[0].clientX;
    this.pos4 = e.changedTouches[0].clientY;
    document.ontouchend = this.closeDragElement;
    // call a function whenever touch moves:
    document.ontouchmove = this.elementMove;
    // prevent default will stop the propogation to click event, here to enable click on mobile
    e.srcElement.click();
  }

  // element dragged by cursor
  public elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    // set the element's new position:
    this.elmnt.style.top = this.elmnt.offsetTop - this.pos2 + 'px';
    this.elmnt.style.left = this.elmnt.offsetLeft - this.pos1 + 'px';
  }

  // element dragged by touch
  public elementMove(e: any) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    this.pos1 = this.pos3 - e.changedTouches[0].clientX;
    this.pos2 = this.pos4 - e.changedTouches[0].clientY;
    this.pos3 = e.changedTouches[0].clientX;
    this.pos4 = e.changedTouches[0].clientY;
    // set the element's new position:
    this.elmnt.style.top = this.elmnt.offsetTop - this.pos2 + 'px';
    this.elmnt.style.left = this.elmnt.offsetLeft - this.pos1 + 'px';
  }

  public closeDragElement() {
    /* stop moving when mouse button is released: */
    document.onmouseup = null;
    document.onmousemove = null;
    // this.elmnt.addEventListener('touchend', null, false);
    // this.elmnt.addEventListener('touchmove', null, false);
    document.ontouchend = null;
    document.ontouchmove = null;
  }
}
