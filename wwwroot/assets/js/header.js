document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobileMenu");
    const toggle = document.getElementById("menuToggle");
    const close = document.getElementById("menuClose");

    if (!menu || !toggle) return;

    function openMenu() {
        menu.classList.remove("translate-x-full");
        toggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("overflow-hidden");
    }

    function closeMenu() {
        menu.classList.add("translate-x-full");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("overflow-hidden");
    }

    toggle.addEventListener("click", openMenu);
    close?.addEventListener("click", closeMenu);

   
});
