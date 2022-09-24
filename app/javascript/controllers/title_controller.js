import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const img = document.getElementsByTagName('img');

    window.addEventListener('load', () => {
      img[0].className = "showingup";
    });

  }
}
