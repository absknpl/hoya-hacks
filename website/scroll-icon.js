document.addEventListener('DOMContentLoaded', function() {
    // Show scroll icon after 10 seconds on the first page
    setTimeout(function() {
        document.getElementById('scrollIcon').style.display = 'block';
    }, 1000);

    // Scroll to the next container when the scroll icon is clicked
    document.getElementById('scrollIcon').addEventListener('click', function() {
        document.querySelector('.container2').scrollIntoView({ behavior: 'smooth' });
    });

    // Show or hide scroll icon based on scroll position
    window.addEventListener('scroll', function() {
        var scrollIcon = document.getElementById('scrollIcon');
        var lastContainer = document.querySelector('.container3');
        var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        // If user has scrolled past the first container, show the scroll icon
        if (scrollPosition > window.innerHeight && scrollPosition < lastContainer.offsetTop) {
            scrollIcon.style.display = 'block';
        } else {
            scrollIcon.style.display = 'none';
        }

        // If user has scrolled to the bottom of the page, change the scroll icon to scroll to top
        if (scrollPosition + window.innerHeight >= document.body.scrollHeight) {
            scrollIcon.style.backgroundImage = "url('scroll-top-icon.png')"; // Add your scroll to top icon
            scrollIcon.onclick = function() {
                document.querySelector('.container1').scrollIntoView({ behavior: 'smooth' });
            };
        } else {
            scrollIcon.style.backgroundImage = "url('scroll-down-icon.png')"; // Reset to scroll down icon
            scrollIcon.onclick = function() {
                document.querySelector('.container2').scrollIntoView({ behavior: 'smooth' });
            };
        }
    });
});
