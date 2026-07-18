/**
 * Map of artwork
 * key -- string: art name
 * value -- map
 *  title, url, alt
 */
const artworks = new Map();

artworks.set(1, {
  title: "Starweaver",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--starweaver--fantasy-illustration-character-concept-art.jpg",
  alt: "Starweaver. A blue woman surrounded by stars.",
});
artworks.set(2, {
  title: "Family of Travellers",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--family-of-travelers--illustration-fanart-final-fantasy-ffxiv.jpg",
  alt: "From Final Fantasy 14. A family riding a carriage.",
});
artworks.set(3, {
  title: "Our Place in Space",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--our-place-in-space--illustration-poster-hr-macmillan-space-centre.jpg",
  alt: "A girl standing on an open glass box holding a star.",
});
artworks.set(4, {
  title: "Boat Adventure",
  url: "./image-assets/home-thumbnails/staticcolour-tin-trinh--boat-adventure--illustration-fantasy-ocean-thumbnail.jpg",
  alt: "A boat carrying three people in a green sea.",
});
artworks.set(5, {
  title: "Hyacinthus",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--hyacinthus--illustration-greek-mythology-flower.jpg",
  alt: "Portrait of Hyacinthus holding flowers.",
});
artworks.set(6, {
  title: "Mercenary",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--pay-up--illustration-character-video-game-mercenary-concept-art.jpg",
  alt: "A man leaning on a motorcycle holding a coin in one hand and a bag in the other.",
});
artworks.set(7, {
  title: "Identity",
  url: "/image-assets/portfolio/staticcolour-tin-trinh--identity--illustration-flower-eyes-poster.jpg",
  alt: "Three figures drawn overlapping and mashed together with leaves and flowers.",
});
artworks.set(8, {
  title: "Rose",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--rose--illustration-fanart-final-fantasy-ffxiv-elezen.jpg",
  alt: "An elf with dark skin and white hair wearing a rose eye.",
});
artworks.set(9, {
  title: "Urianger",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--astral-stasis--illustration-fanart-urianger-final-fantasy-ffxiv-elezen.jpg",
  alt: "Urianger from Final Fantasy 14.",
});
artworks.set(10, {
  title: "Aurelia",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--Aurelia--illustration-character-portrait.jpg",
  alt: "A girl with pink hair",
});
artworks.set(11, {
  title: "Forget-me-not",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--forget-me-not--illustration-character-flowers.jpg",
  alt: "A boy half submerged in water surrounded by forget-me-nots.",
});
artworks.set(12, {
  title: "The Swamp",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--swamp--illustration-fantasy-concept-art.jpg",
  alt: "A cloaked figure holding a lantern walking through a swamp.",
});
artworks.set(13, {
  title: "Akadaemia Anyder",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--akadaemia-anyder--illustration-fanart-shadowbringers-final-fantasy-ffxiv-background.jpg",
  alt: "Akadaemia Anyder from Final Fantasy 14",
});
artworks.set(14, {
  title: "Wren",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--wren--illustration-portrait-digital-painting.jpg",
  alt: "A man with blond hair blowing in the wind.",
});
artworks.set(15, {
  title: "Kiss the Sun Goodnight",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--kiss-the-sun-goodnight--fantasy-illustration-character-painting.jpg",
  alt: "Two vaguely shaped women kissing. One is bright pink and yellow, the other is a darker blue.",
});
artworks.set(16, {
  title: "Ocean Lace",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--ocean-lace--fantasy-illustration-character-portrait-ffxiv-painting.jpg",
  alt: "An Au Ra from Final Fantasy 14 wearing a lace veil.",
});
artworks.set(17, {
  title: "Together Bright",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--together-bright--illustration-character-art-digital.jpg",
  alt: "Two brightly coloured figures looking away.",
});
artworks.set(18, {
  title: "Lightning",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--lightning--illustration-character-art-digital-portrait.jpg",
  alt: "A portrait of a person surrounded by lightning.",
});
artworks.set(19, {
  title: "Sitting at a Desk",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--eclipse--illustration-character-art-digital-fantasy-ffxiv.jpg",
  alt: "A person sitting at their desk.",
});
artworks.set(20, {
  title: "Eclipse",
  url: "./image-assets/portfolio/staticcolour-tin-trinh--sitting-at-a-desk--illustration-character-art-digital.jpg",
  alt: "A portrait of an Au Ra from Final Fantasy 14 in front of an eclipse, bright colourful light peaking from behind.",
});

/**
 * FUNCTIONS
 */

function populateArt(numberList) {
  let artworkBox = document.getElementById("artworkBox");
  let modalBox = document.getElementById("modalBox");
  let resultArt = ``;
  let resultModal = ``;

  for (let i = 0; i < numberList.length; i++) {
    var art = `
        <li>
            <figure class="home-gallery brick">
                <img src="${artworks.get(numberList[i]).url}"
                    class="masonry-content"
                    alt="${artworks.get(numberList[i]).alt}"
                    draggable="false"
                    onclick="openModal();
                    currentSlide(${i + 1});"
                />
            </figure>
        </li>
    `;

    var modal = `
        <div class="mySlides">
            <img
                class="modalimg"
                src="${artworks.get(numberList[i]).url}"
                alt="${artworks.get(numberList[i]).alt}"
                style="width: 100%"
                draggable="false"
            />
        </div>
    `;

    resultArt += art;
    resultModal += modal;
  }

  artworkBox.innerHTML = resultArt;
  modalBox.innerHTML = resultModal;
}

/**
 * Makes a list of random numbers of a specific size
 * @param {*} sampleSize
 * @param {*} targetSize
 * @returns
 */
function randomNumbers(sampleSize, targetSize) {
  let result = new Array();
  while (result.length < targetSize) {
    var numberToAdd = Math.floor(Math.random() * sampleSize) + 1;
    if (!result.includes(numberToAdd)) result.push(numberToAdd);
  }
  return result;
}

/**
 * MODALS
 */

// // Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// // Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// // Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// // Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function closeMenu() {
  closeModal();
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var modal = document.getElementById("myModal");
  modal.focus();
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (modal.style.display === "block")
    slides[slideIndex - 1].style.display = "flex";
}
function addKeybindsToModal() {
  let modal = document.getElementById("myModal");
  modal.addEventListener("keydown", function (event) {
    if (event.code === "ArrowLeft") {
      plusSlides(-1);
    } else if (event.code === "ArrowRight") {
      plusSlides(1);
    } else if (event.code === "Escape") {
      closeModal();
    }
  });
}
addKeybindsToModal();
