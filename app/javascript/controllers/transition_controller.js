import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["test"]
  connect() {
    


    window.onload = () => {
      const anchors = document.querySelectorAll('a');

      setTimeout(() => {
        this.testTarget.classList.remove('is-active');
      }, 500);

      for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
          e.preventDefault();
          let target = e.target.href;

          this.testTarget.classList.add('is-active');

          setTimeout(() => {
            window.location.href = target;
          }, 500);
        })
      }

    }
    }

  }
