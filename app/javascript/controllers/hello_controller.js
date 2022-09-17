import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flip", "red", "blue"]
  connect() {

    // this.element.textContent = "Hello World!"
  }
  yellowflip() {
    this.flipTarget.classList.toggle("is-flipped")
  }

  redflip() {
    this.redTarget.classList.toggle("is-flipped")
  }

  blueflip() {
    this.blueTarget.classList.toggle("is-flipped")
  }

}
