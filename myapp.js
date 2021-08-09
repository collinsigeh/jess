function set() {

    var background = document.getElementById( 'background' ).value;
    var width      = document.getElementById( 'width' ).value;
    var height     = document.getElementById( 'height' ).value;

    var mydiv = document.getElementById( 'modify' );

    mydiv.style.cssText = 'background: ' + background + '; width: ' + width + '; height: ' + height + ';';
}

var setButton = document.getElementById( 'set' );

setButton.onclick = set();