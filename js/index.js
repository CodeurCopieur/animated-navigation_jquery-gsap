var t1 = new TimelineMax({ paused: true});

t1.to(".menu-container", 0.4, {
  right: "0%"
});


t1.staggerFrom(".link", 0.4, { opacity: 0 }, 0.1, "-=0.2");


t1.reverse();

$(document).on("click", ".open-menu", ()=> {
  t1.reversed(!t1.reversed());
});


$(document).on("click", ".close-menu", ()=> {
  t1.reversed(!t1.reversed());
})