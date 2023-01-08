// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

var toggle = 'True'

function toggleTheme() {
    if (toggle == 'True') {
        r.style.setProperty('--main-bg-color', '#c8c8c8');
        r.style.setProperty('--main-content-color', '#313131');
        r.style.setProperty('--main-title-color', '#313131');
        r.style.setProperty('--main-hovered-color', '#000000');
        r.style.setProperty('--secondary-hovered-color', '#444444');
        toggle = 'False'
    } else {
        r.style.setProperty('--main-bg-color', '#313131');
        r.style.setProperty('--main-content-color', '#e9e9e9');
        r.style.setProperty('--main-title-color', '#e9e9e9');
        r.style.setProperty('--main-hovered-color', '#c1c1c1');
        r.style.setProperty('--secondary-hovered-color', '#a1a1a1');
        toggle = 'True'
    }
}
