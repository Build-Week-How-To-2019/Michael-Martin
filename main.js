

/* add the logic here for a switch that will toggle the theme of the site*/

document.addEventListener('DOMContentLoaded', function(){

  let bgCa= getComputedStyle(document.documentElement).getPropertyValue('--background-color-1');
  let bgC2a= getComputedStyle(document.documentElement).getPropertyValue('--background-color-2');
  let fontCa= getComputedStyle(document.documentElement).getPropertyValue('--font-color-active');
  let theme = 'unknown';

  if(fontCa === ' black'){
    theme = 'light';
    //console.log('here!');
  } else if (fontCa === ' #696e6d'){
    theme = 'dark';
  };

  //console.log(fontCa);
  //console.log(theme);

  var toggleSwitch = document.querySelector('input[type="checkbox"]');


  toggleSwitch.addEventListener('change', function(){
    if(toggleSwitch.checked && theme === 'light') {
      //console.log('switch is on');
      document.documentElement.style.setProperty('--background-color-1',' #000000');
      document.documentElement.style.setProperty('--background-color-2',' #1c1c1c');
      document.documentElement.style.setProperty('--font-color-active',' #696e6d');
      document.documentElement.style.setProperty('--searchbar-bg', ' white');
      document.documentElement.style.setProperty('--searchbar-f', 'black');
      document.documentElement.style.setProperty('--logo-dark', 'none');
      document.documentElement.style.setProperty('--logo-light', 'inline');
      theme = 'dark';

    } else {
      //console.log('switch is off');
      document.documentElement.style.setProperty('--background-color-1',' white');
      document.documentElement.style.setProperty('--background-color-2',' rgb(61, 126, 153)');
      document.documentElement.style.setProperty('--font-color-active',' black');
      document.documentElement.style.setProperty('--searchbar-bg', ' #000000');
      document.documentElement.style.setProperty('--searchbar-f', ' #696e6d');
      document.documentElement.style.setProperty('--logo-dark', 'inline');
      document.documentElement.style.setProperty('--logo-light', 'none');
      theme = 'light';
    }
  });




});
