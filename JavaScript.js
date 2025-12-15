

document.addEventListener("DOMContentLoaded", function () {

    //Dark Mode

    var darkModeBtn = document.getElementById("darkModeBtn");

    //load saved theme from localStorage 
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (darkModeBtn) {
            darkModeBtn.textContent = "Light Mode";
        }
    } else {
        if (darkModeBtn) {
            darkModeBtn.textContent = "Dark Mode";
        }
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            //toggle dark mode class
            document.body.classList.toggle("dark-mode");

            //update button text and save preference
            if (document.body.classList.contains("dark-mode")) {
                darkModeBtn.textContent = "Light Mode";
                localStorage.setItem("theme", "dark");
            } else {
                darkModeBtn.textContent = "Dark Mode";
                localStorage.setItem("theme", "light");
            }
        });
    }

    //Show staff and hide about me 

    var moreBtn = document.getElementById("moreAboutMeBtn");
    var moreSection = document.getElementById("moreAboutMe");

    if (moreBtn && moreSection) {

        //start hidden (in case browser keeps some state)
        moreSection.style.display = "none";
        moreBtn.textContent = "Show more about me";

        moreBtn.addEventListener("click", function () {
            if (moreSection.style.display === "block") {
                moreSection.style.display = "none";
                moreBtn.textContent = "Show more about me";
            } else {
                moreSection.style.display = "block";
                moreBtn.textContent = "Hide info";

                //smooth scroll to the section (makes it feel nicer)
                moreSection.scrollIntoView({ behavior: "smooth", block: "start" });

                //small highlight effect (CSS class)
                flashElement(moreSection);
            }
        });
    }

   
    
    //this is a small extra feature to show more JavaScript.
    //if the user clicks the "Resume" heading, the section highlights.
    

    var resumeHeading = document.querySelector(".resume-section h2");
    if (resumeHeading) {
        resumeHeading.style.cursor = "pointer";
        resumeHeading.title = "Click to highlight this section";

        resumeHeading.addEventListener("click", function () {
            //find the resume section container
            var resumeSection = resumeHeading.closest(".resume-section");
            if (resumeSection) {
                resumeSection.scrollIntoView({ behavior: "smooth", block: "start" });
                flashElement(resumeSection);
            }
        });
    }

    //this function adds a small outline effect and then removes it
    function flashElement(element) {
        element.classList.add("flash");

        setTimeout(function () {
            element.classList.remove("flash");
        }, 600);
    }

});
