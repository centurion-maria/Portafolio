class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer class="text-center">
            <div>
                <p>Desarrollado por Maria Centurión</p>
            </div>
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)