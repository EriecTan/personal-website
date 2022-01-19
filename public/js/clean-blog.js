(function ($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body")
    .on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass(
        "floating-label-form-group-with-value",
        !!$(e.target).val()
      );
    })
    .on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    })
    .on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $("#mainNav").height();
    $(window).on(
      "scroll",
      {
        previousTop: 0,
      },
      function () {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $("#mainNav").hasClass("is-fixed")) {
            $("#mainNav").addClass("is-visible");
          } else {
            $("#mainNav").removeClass("is-visible is-fixed");
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $("#mainNav").removeClass("is-visible");
          if (currentTop > headerHeight && !$("#mainNav").hasClass("is-fixed"))
            $("#mainNav").addClass("is-fixed");
        }
        this.previousTop = currentTop;
      }
    );
  }

  //checker

  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //check OS theme setting
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark"); //add this
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light"); //add this
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);

  // navbar active
  $("li.nav-item").click(function () {
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
  });
  
})(jQuery); // End of use strict
