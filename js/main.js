
// Smart PDF Download: Each category PDF downloads only ONCE per browser session
document.querySelectorAll('.dropdown-item[data-pdf]').forEach(item => {
    item.addEventListener('click', function(e) {
        const pdfUrl = this.getAttribute('data-pdf');
        const storageKey = 'downloaded_' + btoa(pdfUrl); // Unique key for each PDF

        // Check if this specific PDF was already downloaded in this session
        if (!sessionStorage.getItem(storageKey)) {
            // Trigger download
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = pdfUrl.split('/').pop(); // Uses actual filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Mark this specific PDF as downloaded for this session
            sessionStorage.setItem(storageKey, 'true');
        }
        // If already downloaded this session → just open page, no re-download
    });
});
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });
    
})(jQuery);
// Automatically make "Categories" active when on any category page
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = location.pathname.split("/").pop(); // gets current filename

    // List of your category pages
    const categoryPages = ["GeneralSurgery.html", "DentalSurgery.html", "404.html"];

    if (categoryPages.includes(currentPage)) {
        // Remove active from all normal nav links
        document.querySelectorAll(".navbar-nav > .nav-item > .nav-link").forEach(link => {
            link.classList.remove("active");
        });

        // Make "Categories" dropdown button active
        document.querySelector(".nav-link.dropdown-toggle").classList.add("active");

        // Optional: highlight the specific dropdown item too
        document.querySelectorAll(".dropdown-item").forEach(item => {
            if (item.getAttribute("data-page") === currentPage) {
                item.classList.add("active");
                item.style.color = "var(--bs-primary)";
                item.style.fontWeight = "600";
            }
        });
    }
});

