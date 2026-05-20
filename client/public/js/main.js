// Function to close modal
const closeModal = () => {
  const modalCloseButtons = document.querySelectorAll(".close-modal");

  modalCloseButtons.forEach((btn) => {
    btn.addEventListener("click", ({ target }) => {
      const modalContainer = target.closest(".modal-container");
      if (!modalContainer) return;

      const modalContent = modalContainer.querySelector(".modal-content");
      if (!modalContent) return;

      modalContent.classList.remove(
        "modal-top_active",
        "modal-right_active",
        "modal-left_active",
        "modal-center_active",
        "modal-center-top_active"
      );

      modalContainer.classList.remove("modal-overlay_active");
      document.body.classList.remove("overflow-hidden");
    });
  });
};

// Configure loading animation
const loader = () => {
  setTimeout(() => {
    const loader_content = document.querySelector(".loader-content");

    if (loader_content) {
      loader_content.classList.add(
        "transition-all",
        "duration-500",
        "opacity-0",
        "invisible"
      );
    }
  }, 500);

  setTimeout(() => {
    const loader = document.querySelector(".loader");
    const body = document.querySelector("body");

    if (loader) {
      loader.classList.add(
        "transition-all",
        "duration-1000",
        "opacity-0",
        "invisible"
      );
    }

    if (body) {
      body.classList.remove("overflow-hidden");
    }
  }, 800);
};

// Calculates the tab position to switch to when an element with 'data-tab' attribute is clicked
const calculatePositionTab = (target) => {
  if (!target.hasAttribute("data-tab")) {
    return;
  }

  const position = target.getAttribute("data-tab");
  const tabItems = document.querySelectorAll(".tab-container-entry .tab-item");

  if (tabItems[position]) {
    tabItems[position].click();
  }
};

// Updates the status of the steps
const stepUpdate = (stepsContent, stepCounter, progressbar, action) => {
  stepsContent.forEach((step) => {
    if (step) {
      step.classList.remove("active");
    }
  });

  if (stepsContent[stepCounter]) {
    stepsContent[stepCounter].classList.add("active");
  }

  const parent = stepsContent[stepCounter]?.closest(".step-container");
  if (!parent) return;

  const stepNumbers = parent.querySelectorAll(".step-number div");

  if (action === "next") {
    if (progressbar[stepCounter - 1]) {
      progressbar[stepCounter - 1].classList.replace("w-0", "w-full");
    }

    if (stepNumbers[stepCounter]) {
      stepNumbers[stepCounter].classList.add("active");
    }
  } else if (action === "prev") {
    if (progressbar[stepCounter]) {
      progressbar[stepCounter].classList.replace("w-full", "w-0");
    }

    if (stepNumbers[stepCounter + 1]) {
      stepNumbers[stepCounter + 1].classList.remove("active");
    }
  }
};

// Resets the state of the progress bar
const resetProgressbar = () => {
  const resetButtons = document.querySelectorAll(".reset-progressbar");

  resetButtons.forEach((element) => {
    element.addEventListener("click", ({ currentTarget }) => {
      setTimeout(() => {
        const selector = currentTarget.getAttribute("data-target");
        if (!selector) return;

        const parent = document.querySelector(selector);
        if (!parent) return;

        const progressbar = parent.querySelectorAll(".progressbar div");
        const step_number = parent.querySelectorAll(".step-number div");
        const steps_content = parent.querySelectorAll(".step-content");

        progressbar.forEach((e) => {
          if (e) {
            e.classList.replace("w-full", "w-0");
          }
        });

        steps_content.forEach((e, i) => {
          if (e) {
            e.classList.remove("active");
          }

          if (step_number[i]) {
            step_number[i].classList.remove("active");
          }
        });

        stepCounter = 0;

        if (steps_content[0]) {
          steps_content[0].classList.add("active");
        }

        if (step_number[0]) {
          step_number[0].classList.add("active");
        }
      }, 300);
    });
  });
};

// Toggle a checkbox and update "Select All" element state
const toggleCheck = (target) => {
  if (!target.classList.contains("check-product")) return;

  const check_all = document.querySelector("#check-all");
  const checkboxes = document.querySelectorAll(".check-product");

  const id_product = target.id;

  const text = id_product.includes("desktop")
    ? id_product.replace("desktop", "mobile")
    : id_product.replace("mobile", "desktop");

  const second_check = document.querySelector(`#${text}`);

  if (second_check) {
    second_check.checked = target.checked;
  }

  const checkboxes_checked = document.querySelectorAll(
    ".check-product:checked"
  );

  if (check_all) {
    check_all.checked = checkboxes_checked.length === checkboxes.length;
  }
};

// Make "Go top" button appear/disappear
const scrollUpButton = () => {
  const button = document.querySelector(".scroll-up");

  if (!button) return;

  if (document.documentElement.scrollTop > 500) {
    button.classList.remove("-bottom-16");
    button.classList.add("z-40", "bottom-8");
  } else {
    button.classList.remove("z-40", "bottom-8");
    button.classList.add("-bottom-16");
  }
};

// Open/Close Search
const searchMob = () => {
  const element = document.querySelector(".btn-search-mob");

  element &&
    element.addEventListener("click", () => {
      const headerSearch = document.querySelector(".header-search");

      if (headerSearch) {
        headerSearch.classList.toggle("hidden");
      }
    });
};

// Configure quantity counter
const counter = () => {
  const counter = document.querySelectorAll(".counter");

  counter.forEach((element) => {
    const value = element.querySelector(".counter-value");

    if (!value) return;

    element.addEventListener("click", ({ target }) => {
      if (target.classList.contains("increment")) {
        value.value++;
      } else if (
        target.classList.contains("decrement") &&
        value.value > 0
      ) {
        value.value--;
      }
    });
  });
};

// See more functionality
const seeMore = () => {
  const element = document.querySelectorAll(".btn-see-more");

  element.forEach((element) => {
    element.addEventListener("click", (e) => {
      const father = e.currentTarget.closest(".see-more");
      if (!father) return;

      const see_more_container = father.querySelector(".see-more-container");
      const see_more_content = father.querySelector(".see-more-content");
      const icon_rotate = father.querySelector("i");

      if (
        !see_more_container ||
        !see_more_content ||
        !icon_rotate
      ) {
        return;
      }

      see_more_container.classList.toggle("gradient-bottom");
      icon_rotate.classList.toggle("rotate-180");

      see_more_container.style.transition = "max-height 1s ease";
      see_more_container.style.maxHeight =
        see_more_content.offsetHeight + "px";

      let duration = see_more_container.style.transitionDuration;

      if (duration.includes("ms")) {
        duration = parseInt(duration);
      } else if (duration.includes("s")) {
        duration = 1000 * parseFloat(duration);
      }

      if (icon_rotate.classList.contains("rotate-180")) {
        setTimeout(
          () => (see_more_container.style.maxHeight = "max-content"),
          duration
        );
      } else {
        setTimeout(() => {
          see_more_container.style.maxHeight = "";
        }, 10);
      }
    });
  });
};

// Rater Js
const rater = () => {
  const elements = document.querySelectorAll("[data-rater]");

  elements.forEach((e) => {
    const value = parseInt(e.getAttribute("data-rater"));

    const rating = new raterJs({
      element: e,
      showToolTip: false,
      max: 5,
      starSize: 14,
      readOnly: true,
    });

    rating.setRating(value);
  });

  const element = document.querySelector("#rater");

  if (!element) {
    return;
  }

  let myRating = raterJs({
    element: element,
    rateCallback: function rateCallback(rating, done) {
      this.setRating(rating);
      done();
    },
    starSize: 32,
    step: 0.5,
  });

  const form_review = document.querySelector(".form-review");

  form_review &&
    form_review.addEventListener("submit", () => {
      const ratingValue = document.querySelector(".rating-value");

      if (ratingValue) {
        ratingValue.value = myRating.getRating();
      }
    });
};

// Email JS
const sendEmail = () => {
  const btn = document.querySelector("#submit-button");
  const element = document.querySelector("#contact-form");

  element &&
    element.addEventListener("submit", (e) => {
      e.preventDefault();

      if (btn) {
        btn.innerHTML = `<span class="relative z-[4] font-bold uppercase text-white">Sending...</span>`;
      }

      const serviceID = "YOUR_SERVICE_ID";
      const templateID = "YOUR_TEMPLATE_ID";

      emailjs.sendForm(serviceID, templateID, element).then(
        () => {
          if (btn) {
            btn.innerHTML = `<span class="relative z-[4] font-bold uppercase text-white">Send Message</span>`;
          }

          notifyMessage();
        },
        (err) => {
          if (btn) {
            btn.innerHTML = `<span class="relative z-[4] font-bold uppercase text-white">Send Message</span>`;
          }

          alert(JSON.stringify(err));
        }
      );
    });
};