document.addEventListener("alpine:init", () => {
  Alpine.data("about_accordion", () => ({
    isOpen: false,

    toggle() {
      this.isOpen = !this.isOpen;
    },
  }));
});
