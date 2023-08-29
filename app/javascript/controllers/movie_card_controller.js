import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="movie-card"
export default class extends Controller {
  static targets =  ["form", "card"]

  connect() {
  }

  revealContent() {
    console.log("click on button")
    this.formTarget.classList.toggle("d-none");
  }

  update(event) {
    //prevent the submission from happening
    event.preventDefault()
    //build the url for the patch request
    const url = this.formTarget.action // "movies/:id"

    // ajax request
    fetch(url, {
      method: "PATCH",
      headers: { "Accept": "text/plain" },
      body: new FormData(this.formTarget)
    })
     .then(response =>
      response.text())
      .then((data) => {
        this.cardTarget.outerHTML = data
      })
    //what do we need?
    // method PATCH
    // route for update
    // controller action for update
  }
}
