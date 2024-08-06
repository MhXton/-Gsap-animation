function ShowSidebar() {
    const sidebar = document.querySelector('.menu-mobail');
    gsap.to(sidebar, {
        duration: 0.5,
        x: 0,
        display: 'flex'
    });
}

function hideSidebar() {
    const sidebar = document.querySelector('.menu-mobail');
    gsap.to(sidebar, {
        duration: 0.5,
        x: '100%',
        onComplete: () => {
            sidebar.style.display = 'none';
        }
    });
}



function page1Animation() {
    var tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        opacity: 0,
        delay: 0.7,
        duration: 1,
        stagger: 0.2
    });

    tl.from(".hero-left h1", {
        x: -300,
        opacity: 0,
        duration: 0.5
    });

    tl.from(".hero-left p", {
        x: -300,
        opacity: 0,
        duration: 0.5
    });

    tl.from(".hero-left button", {
        opacity: 0,
        duration: 0.4
    });

    tl.from(".hero-right img", {
        x: 300,
        opacity: 0,
        duration: 0.5
    }, "-=1");

    tl.from(".brand-logo img", {
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.2
    });
}

page1Animation()

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        scroller: "body",
        start: "top 90%",
        end: "top 0",
        scrub: 1,
        
    }
});

tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration:1.9,
});

tl2.from(".cont.left1",{
    x:-500,
    opacity:0,
    duration:1.9,
})

tl2.from(".cont2.right2",{
    x:500,
    opacity:0,
    duration:1.9,
})

tl2.from(".cont2.left3",{
    x:-600,
    opacity:0,
    duration:1.5,
})

tl2.from(".cont.right4",{
    x:600,
    opacity:0,
    duration:1.9,
})

