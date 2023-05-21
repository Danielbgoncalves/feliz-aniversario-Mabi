
  document.getElementById("one").addEventListener("click", function() {
    var gifs = [
        "./gifs/wired-gradient-1103-confetti.gif",
        "./gifs/wired-gradient-261-emoji-smile.gif",
        "./gifs/wired-gradient-1103-confetti.gif",
        "./gifs/wired-gradient-261-emoji-smile.gif",
        "./gifs/wired-gradient-1103-confetti.gif",
        "./gifs/wired-gradient-261-emoji-smile.gif",
        "./gifs/wired-gradient-1103-confetti.gif",
        "./gifs/wired-gradient-261-emoji-smile.gif"
    ];
  
    var container = document.getElementById("containerGifs");
    container.innerHTML = "";

    gifs.forEach(function(gif) {
        var img = document.createElement("img");
        img.src = gif;
        container.appendChild(img);
  
        setTimeout(function() {
          container.innerHTML = "";
      }, 5000);

    
    });
  });
  
  /**/
  document.getElementById("two").addEventListener("mouseover", function() {
    var button = this;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
    
    var randomLeft = Math.random() * (windowWidth - buttonWidth);
    var randomTop = Math.random() * (windowHeight - buttonHeight);
    
    button.style.left = randomLeft + "px";
    button.style.top = randomTop + "px";
  });
  
  