function set() {

    let background = document.getElementById( 'background' ).value;
    let width      = document.getElementById( 'width' ).value;
    let height     = document.getElementById( 'height' ).value;

    document.getElementById( 'modify' ).style.cssText = 'background: ' + background + '; width: ' + width + '; height: ' + height + ';';
}

document.getElementById( 'set' ).addEventListener( 'click', set);