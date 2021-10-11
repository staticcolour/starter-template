(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${125 - (_mouseX - _w) * 0.02}% ${25 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${100 - (_mouseX - _w) * 0.045}% ${80 - (_mouseY - _h) * 0.045}%`;
        let _depth4 = `${100 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.05}%`;
        let _depth5 = `${50 - (_mouseX - _w) * 0.00}% ${50 - (_mouseY - _h) * 0.00}%`;
        let x = `${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})(); 