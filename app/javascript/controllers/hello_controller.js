import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flip"]
  connect() {

    // this.element.textContent = "Hello World!"
  }
  disable() {
    this.flipTarget.classList.toggle("is-flipped")
  }

}
