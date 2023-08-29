import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["list","form","input"]
  connect() {
    // console.log(this.listTarget)
    // console.log(this.formTarget)
    // console.log(this.inputTarget)
  }

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}` // "movies?query + whatever you type"
    fetch(url, { headers: { "Accept": "text/plain" } })
      .then(response => response.text())
      .then((data) => {
        console.log(data)
        this.listTarget.outerHTML = data
      })
  }
}
