(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".parallax");
    // Magic happens here
  
    function parallax(e) {
      if ( $(window).width() > 992 ) {  
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.00}% ${50 - (_mouseY - _h) * 0.00}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.002}%`;
        let _depth3 = `${125 - (_mouseX - _w) * 0.005}% ${25 - (_mouseY - _h) * 0.005}%`;
        let _depth4 = `${110 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.1}%`;
        let _depth5 = `${110 - (_mouseX - _w) * 0.05}% ${60 - (_mouseY - _h) * 0.02}%`;
        let x = `${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
  }   
})();

jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 991) {
        $('.parallax').removeClass('desktop');
      } else if (ww >= 992) {
        $('.parallax').addClass('desktop');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });

//mait to

$(document).ready(function() {
	
	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[href^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');
	var messageCopy = 'Click to copy email address';
	var messageSuccess = 'Email address copied to clipboard';
	
	mailto.append('<span class="mailto-message"></span>');
	$('.mailto-message').append(messageCopy);
	
	// Disable opening your email client. yuk.
	$('a[href^=mailto]').click(function() {
		return false; 
	})
	
	// On click, get href and remove 'mailto:' from value
	// Store email address in a variable.
	mailto.click(function() {
		var href = $(this).attr('href');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-message').empty().append(messageSuccess);
		setTimeout(function() {
			$('.mailto-message').empty().append(messageCopy);}, 2000); 
	});
	
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}



// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function closeMenu() {
  closeModal()
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


