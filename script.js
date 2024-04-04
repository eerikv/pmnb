document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("sidebar-mobile-menu-button").onclick = function() {
        let sidebar = document.getElementById("sidebar");
        let sidebarNav = document.getElementById("sidebar-nav");
        let contentContainer = document.getElementById("content-container");
        let sidebarFooter = document.getElementById("sidebar-footer");
        let sidebarIcon = document.getElementById("sidebar-mobile-menu-button-icon");

        if (sidebarNav.style.display == "block") {
            document.body.style.overflowY = "initial";
            sidebar.style.height = "48px";
            sidebarNav.style.display = "none";
            sidebarFooter.style.display = "none";
            sidebarIcon.classList.add("fa-bars");
            sidebarIcon.classList.remove("fa-xmark");
        } else {
            document.body.style.overflowY = "hidden";
            sidebar.style.height = "100vh";
            sidebarNav.style.display = "block";
            sidebarFooter.style.display = "block";
            sidebarIcon.classList.add("fa-xmark");
            sidebarIcon.classList.remove("fa-bars");
        }
        
    };
});
