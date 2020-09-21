// side nav
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
});

// paralax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// material boxed
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox, {
    inDuration: 500,
    outDuration: 500
});

// scroll
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});


