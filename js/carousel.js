"use strict";

import { cardInput } from "./modal.js";

class Carousel {
  constructor(el) {
    this.el = el;
    this.carouselOptions = ["previous", "next"];
    this.carouselData = [
      {
        id: "1",
        src: "./img/축제사진/Jong-ro.jpg",
      },
      {
        id: "2",
        src: "./img/축제사진/Kangnam.jpg",
      },
      {
        id: "3",
        src: "./img/축제사진/Blossom.png",
      },
      {
        id: "4",
        src: "./img/축제사진/Namhae-beer.jpg",
      },
      {
        id: "5",
        src: "./img/축제사진/Namhae-galic.jpg",
      },
    ];
    this.carouselInView = [1, 2, 3, 4, 5];
    this.carouselContainer;
    this.carouselPlayState;
  }

  mounted() {
    this.setupCarousel();
  }

  // Build carousel html
  setupCarousel() {
    const container = document.createElement("div");
    const controls = document.createElement("div");

    const cardList = document.querySelectorAll(".card");
    cardList.forEach((data, index) => {
      const card = new cardInput(data.dataset.index, "seoul", data.dataset.src);
      container.append(card);
      card.className = `carousel-item carousel-item-${index + 1}`;
      card.setAttribute("loading", "lazy");
      card.setAttribute("data-index", `${index + 1}`);
    });

    // Add container for carousel items and controls
    // .append()	선택된 요소의 마지막에 새로운 요소나 콘텐츠를 추가한다.
    this.el.append(container, controls);
    container.className = "carousel-container";
    controls.className = "carousel-controls";

    this.carouselOptions.forEach((option) => {
      const btn = document.createElement("button");
      const axSpan = document.createElement("span");

      // Add accessibilty spans to button
      axSpan.innerText = option;
      axSpan.className = "ax-hidden";
      btn.append(axSpan);

      // Add button attributes
      btn.className = `carousel-control carousel-control-${option}`;
      btn.setAttribute("data-name", option);

      // Add carousel control options
      controls.append(btn);
    });

    // After rendering carousel to our DOM, setup carousel controls' event listeners
    this.setControls([...controls.children]);

    // Set container property
    this.carouselContainer = container;
  }

  setControls(controls) {
    controls.forEach((control) => {
      control.onclick = (event) => {
        event.preventDefault();

        // Manage control actions, update our carousel data first then with a callback update our DOM
        this.controlManager(control.dataset.name);
      };
    });
  }

  controlManager(control) {
    if (control === "previous") return this.previous();
    if (control === "next") return this.next();

    return;
  }

  previous() {
    // Update order of items in data array to be shown in carousel
    this.carouselData.unshift(this.carouselData.pop());

    // Push the first item to the end of the array so that the previous item is front and center
    this.carouselInView.push(this.carouselInView.shift());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[
        index
      ].className = `carousel-item carousel-item-${item}`;
    });

    // Using the first 5 items in data array update content of carousel items in view
    this.carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
    });
  }

  next() {
    // Update order of items in data array to be shown in carousel
    this.carouselData.push(this.carouselData.shift());

    // Take the last item and add it to the beginning of the array so that the next item is front and center
    this.carouselInView.unshift(this.carouselInView.pop());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[
        index
      ].className = `carousel-item carousel-item-${item}`;
    });

    // Using the first 5 items in data array update content of carousel items in view
    this.carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
    });
  }
}

// Refers to the carousel root element you want to target, use specific class selectors if using multiple carousels
const el = document.querySelector(".carousel");
// Create a new carousel object
const exampleCarousel = new Carousel(el);
// Setup carousel and methods
exampleCarousel.mounted();
