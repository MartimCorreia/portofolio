import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["bganimate"]
  connect() {
    const img = document.getElementsByTagName('img');

    window.addEventListener('load', () => {
      img[0].className = "showingup";
      this.bganimateTarget.className = "about-frame-in d-flex justify-content-start"
    });
    window.addEventListener('loadend', () =>{
      
    });

  }
}
