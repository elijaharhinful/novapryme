const COLORS = {
    white: '#ffffff',
    black: '#000000',
    green: '#49F2CC',
    lightGrey: '#777',
    grey: '#29363B',
    cyan: 'cyan',
    yellow: '#FFE202',
    hotpink: 'deeppink',
};

// ADD CUSTOM SHAPES
class N extends mojs.CustomShape {
    getShape() {
        return '<path id="n-2" data-name="n" d="M16.72-146.3v57H28.934v-44.786h15.39c9.364,0,15.553,5.863,15.553,14.657V-89.3H72.091v-30.617c0-15.8-11.074-26.383-27.686-26.383Z" transform="translate(5.28 163.3)" fill="#fff"/>';
    }
}
mojs.addShape('n', N);

class O extends mojs.CustomShape {
    getShape() {
        return '<path id="o-2" data-name="o" d="M22.071-119.415c0-10.193,6.742-16.935,16.935-16.935,10.113,0,16.775,6.742,16.775,16.855,0,10.193-6.742,16.855-16.935,16.855C28.733-102.64,22.071-109.3,22.071-119.415Zm-12.039,0C10.032-102,21.51-90.6,38.846-90.6c17.417,0,28.975-11.478,28.975-28.895,0-17.337-11.4-28.895-28.814-28.895S10.032-136.832,10.032-119.415Z" transform="translate(10.98 165.158)" fill="#fff"/>';
    }
}
mojs.addShape('o', O);

class V extends mojs.CustomShape {
    getShape() {
        return '<path id="v-2" data-name="v" d="M25.374-88.876H37.843L59.664-146.3H47.359L31.609-104.873,15.858-146.3H3.553Z" transform="translate(18.447 163.3)" fill="#fff"/>';
    }
}
mojs.addShape('v', V);

class A extends mojs.CustomShape {
    getShape() {
        return '<path id="a-2" data-name="a" d="M30.135-101.375c-4.493,0-7.433-2.042-7.433-5.064,0-3.1,2.941-5.146,7.27-5.146H49.9a24.5,24.5,0,0,0,7.106-.98v4.574c0,4-2.941,6.616-7.27,6.616Zm39.126-27.772c0-10.292-7.841-17.153-19.522-17.153H13.717v12.252H49.739c4.329,0,7.27,2.042,7.27,5.064,0,3.1-2.941,5.146-7.433,5.146H29.482c-11.435,0-19.032,7.025-19.032,17.48,0,10.374,7.76,17.235,19.359,17.235h19.93c11.681,0,19.522-6.78,19.522-16.908Z" transform="translate(10.55 163.3)" fill="#fff"/>';
    }
}
mojs.addShape('a', A);

class P extends mojs.CustomShape {
    getShape() {
        return '<path id="p-2" data-name="p" d="M25.947-119.968v-.405c0-8.264,6.806-13.774,16.934-13.774h6.968c5.266,0,8.831,2.674,8.831,6.968,0,4.375-3.565,7.211-8.994,7.211Zm24.064,12.153c12.478,0,20.823-7.616,20.823-19.364,0-11.586-8.183-19.121-20.5-19.121H42.4c-17.177,0-28.6,10.371-28.6,25.927v30.789H25.947v-18.23Z" transform="translate(7.206 163.3)" fill="#fff"/>';
    }
}
mojs.addShape('p', P);

class R extends mojs.CustomShape {
    getShape() {
        return '<path id="r-2" data-name="r" d="M25.5-89.723v-28.288c0-9.376,6.708-16.165,16.892-16.165H67.528V-146.3H41.907c-17.054,0-28.531,11.639-28.531,28.288v28.288Z" transform="translate(9.624 163.3)" fill="#fff"/>';
    }
}
mojs.addShape('r', R);

class Y extends mojs.CustomShape {
    getShape() {
        return '<path id="y-2" data-name="y" d="M40.918-117.817c-9.359,0-15.544-5.859-15.544-14.649V-146.3H13.167v14.323c0,15.788,11.068,26.367,27.669,26.367H52.8c-2.6,2.6-6.51,4.069-11.231,4.069H13.981v12.207H41.65c16.113,0,26.856-9.928,26.856-24.74V-146.3H56.3v28.483Z" transform="translate(8.833 163.3)" fill="#fff"/>';
    }
}
mojs.addShape('y', Y);

class M extends mojs.CustomShape {
    getShape() {
        return '<path id="m-2" data-name="m" d="M57.754-88.24H70.2v-45.619H85.871c9.538,0,15.842,5.972,15.842,14.93V-88.24h12.441v-31.187c0-16.091-11.28-26.874-28.2-26.874H41.995c-16.92,0-28.2,10.783-28.2,26.874V-88.24H26.235v-30.689c0-8.958,6.3-14.93,15.842-14.93H57.754Z" transform="translate(-14.155 162.773)" fill="#fff"/>';
    }
}
mojs.addShape('m', M);

class E extends mojs.CustomShape {
    getShape() {
        return '<path id="e-2" data-name="e" d="M64.473-89.2v-12.235h-25.2c-10.359,0-17.211-6.77-17.211-16.313,0-9.462,6.77-16.313,17.048-16.313H44c5.465,0,8.728,2.039,8.728,5.057,0,3.181-3.589,5.139-9.054,5.139h-9.38v12.235h9.38c12.806,0,21.289-6.036,21.289-16.966,0-10.767-8.157-17.7-20.881-17.7H38.616c-17.211,0-28.793,11.746-28.793,28.549,0,16.884,11.746,28.549,29.119,28.549Z" transform="translate(12.177 163.3)" fill="#fff"/>';
    }
}
mojs.addShape('e', E);

// class Logomark extends mojs.CustomShape {
//     getShape() {
//         return '<path id="e-2" data-name="e" d="M64.473-89.2v-12.235h-25.2c-10.359,0-17.211-6.77-17.211-16.313,0-9.462,6.77-16.313,17.048-16.313H44c5.465,0,8.728,2.039,8.728,5.057,0,3.181-3.589,5.139-9.054,5.139h-9.38v12.235h9.38c12.806,0,21.289-6.036,21.289-16.966,0-10.767-8.157-17.7-20.881-17.7H38.616c-17.211,0-28.793,11.746-28.793,28.549,0,16.884,11.746,28.549,29.119,28.549Z" transform="translate(12.177 163.3)" fill="#fff"/>';
//     }
// }
// mojs.addShape('logomark', Logomark);

// VARIABLES
const { approximate } = mojs.easing,
    shiftCurve = approximate(mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0')),
    scaleCurve = approximate(mojs.easing.path('M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100')),
    defaultCharSize = 25,
    mobileCharSize = 12,
    leftStep = 10,
    logo = document.querySelector('#js-logo');

const isMobile = () => window.innerWidth < 600;

let charSize = isMobile() ? mobileCharSize : defaultCharSize

const CHAR_OPTS = {
    parent: logo,
    isForce3d: true,
    fill: 'white',
    radius: charSize * 1.3,
}

const CHAR_HIDE_THEN = {
    delay: 930,
    isShowEnd: false
}

// HELPERS
const scale = function (curve, n) {
    return (p) => { return n * curve(p); }
}
const increase = function (curve, n) {
    return (p) => { return n + curve(p); }
}

// CURVES
const scaleC = approximate(increase(scaleCurve, 1)),
    scaledCurve = (amount) => {
        return increase(scale(scaleCurve, amount), 1);
    },
    scaleCShort = approximate(scaledCurve(.75));


// SHAPES
const nCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'n',
    left: leftStep + '%',
    x: -7,
    y: { [350]: 150, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleCShort },
    origin: { '50% 100%': '50% 0%', easing: shiftCurve },
    delay: 232,
    duration: 680,
}).then({
    delay: 115,
    y: { to: 0, easing: shiftCurve },
    x: isMobile() ? { to: -9, easing: shiftCurve } : { to: -4, easing: shiftCurve },
    scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
    origin: { '50% 100%': '50% 0%', easing: shiftCurve }
}).then(CHAR_HIDE_THEN);

const oCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'o',
    left: 2 * leftStep + '%',
    delay: 350,
    duration: 465,
    x: 200,
    y: { [-100]: 250, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleC },
    origin: { '50% 0%': '50% 100%', easing: shiftCurve }
}).then({
    duration: 407,
    x: { to: 0, easing: shiftCurve },
    scaleX: { 1: 1, curve: scaleCShort },
    origin: { '100% 50%': '0% 50%', easing: shiftCurve }
}).then({
    duration: 700,
    y: { to: 0, easing: shiftCurve },
    x: isMobile() ? { to: -9, easing: shiftCurve } : { to: -6, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleCShort },
    origin: { '50% 100%': '50% 0%', easing: shiftCurve }
}).then(CHAR_HIDE_THEN);

const vCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'v',
    left: 3 * leftStep + '%',
    delay: 40,
    duration: 580,
    x: -200,
    y: { [250]: -100, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleC },
    origin: { '50% 100%': '50% 0%', easing: shiftCurve }
})
    .then({
        duration: 523,
        x: { to: 0, easing: shiftCurve },
        scaleX: { 1: 1, curve: scaleCShort },
        origin: { '0% 50%': '100% 50%', easing: shiftCurve }
    })
    .then({
        y: { to: 0, easing: shiftCurve },
        x: isMobile() ? { to: -9, easing: shiftCurve } : { to: -10, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '50% 0%': '50% 100%', easing: shiftCurve }
    }).then(CHAR_HIDE_THEN);

const aCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'a',
    left: 4 * leftStep + '%',
    delay: 116,
    duration: 523,
    x: { 500: 0, easing: shiftCurve },
    y: 200,
    scaleX: { 1: 1, curve: scaleC },
    origin: { '100% 50%': '0% 100%', easing: shiftCurve }
})
    .then({
        delay: 116,
        y: { to: 0, easing: shiftCurve },
        x: isMobile() ? { to: -9, easing: shiftCurve } : { to: -13, easing: shiftCurve },
        scaleY: { 1: 1, curve: scaleCShort },
        origin: { '50% 100%': '50% 0%', easing: shiftCurve }
    }).then({ ...CHAR_HIDE_THEN, delay: 1280 });

const pCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'p',
    left: 5 * leftStep + '%',
    x: 300,
    y: { [-100]: 250, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleC },
    origin: { '50% 0%': '50% 100%', easing: shiftCurve },
    delay: 350,
    duration: 465,
}).then({
    duration: 407,
    x: { to: 0, easing: shiftCurve },
    scaleX: { 1: 1, curve: scaleCShort },
    origin: { '100% 50%': '0% 50%', easing: shiftCurve }
}).then({
    duration: 710,
    y: { to: 0, easing: shiftCurve },
    x: isMobile() ? { to: -7, easing: shiftCurve } : { to: -13, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleCShort },
    origin: { '50% 100%': '50% 0%', easing: shiftCurve }
}).then(CHAR_HIDE_THEN);

const rCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'r',
    left: 6 * leftStep + '%',
    delay: 50,
    duration: 680,
    x: -400,
    y: { [250]: -100, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleC },
    origin: { '50% 100%': '50% 0%', easing: shiftCurve }
})
    .then({
        duration: 523,
        x: { to: 0, easing: shiftCurve },
        scaleX: { 1: 1, curve: scaleCShort },
        origin: { '0% 50%': '100% 50%', easing: shiftCurve }
    })
    .then({
        y: { to: 0, easing: shiftCurve },
        x: isMobile() ? { to: -7, easing: shiftCurve } : { to: -13, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '50% 0%': '50% 100%', easing: shiftCurve }
    }).then(CHAR_HIDE_THEN);

const yCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'y',
    left: 7 * leftStep + '%',
    delay: 40,
    duration: 580,
    x: -200,
    y: { [-100]: 250, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleC },
    origin: { '50% 0%': '50% 100%', easing: shiftCurve }
})
    .then({
        duration: 523,
        x: { to: 0, easing: shiftCurve },
        scaleX: { 1: 1, curve: scaleCShort },
        origin: { '100% 50%': '0% 50%', easing: shiftCurve }
    })
    .then({
        y: { to: 0, easing: shiftCurve },
        x: isMobile() ? { to: -8, easing: shiftCurve } : { to: -13, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '50% 100%': '50% 0%', easing: shiftCurve }
    }).then(CHAR_HIDE_THEN);

const mCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'm',
    left: 8 * leftStep + '%',
    delay: 40,
    duration: 580,
    x: -200,
    y: { [250]: -100, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleC },
    origin: { '50% 100%': '50% 0%', easing: shiftCurve }
})
    .then({
        duration: 523,
        x: { to: 0, easing: shiftCurve },
        scaleX: { 1: 1, curve: scaleCShort },
        origin: { '0% 50%': '100% 50%', easing: shiftCurve }
    })
    .then({
        y: { to: 0, easing: shiftCurve },
        x: isMobile() ? { to: 0, easing: shiftCurve } : { to: 1, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '50% 0%': '50% 100%', easing: shiftCurve }
    }).then(CHAR_HIDE_THEN);


const eCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'e',
    left: 9 * leftStep + '%',
    delay: 340,
    duration: 580,
    x: -200,
    y: { [350]: 100, easing: shiftCurve },
    scaleY: { 1: 1, curve: scaleCShort },
    origin: { '50% 100%': '50% 0%', easing: shiftCurve }
})
    .then({
        delay: 54,
        x: { to: 0, easing: shiftCurve },
        scaleX: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '50% 100%': '50% 0%', easing: shiftCurve }
    })
    .then({
        y: { to: 0, easing: shiftCurve },
        x: isMobile() ? { to: 9, easing: shiftCurve } : { to: 15, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '50% 0%': '50% 100%', easing: shiftCurve }
    }).then(CHAR_HIDE_THEN);



// LINES

let LINE_OPTS = {
    shape: 'line',
    strokeWidth: { 10: 0 },
    stroke: COLORS.cyan,
    radius: 44,
    parent: logo,
    angle: 90,
    duration: 465,
    delay: 495,
    radiusY: 0,
    strokeDasharray: '100% 100%',
    strokeDashoffset: { '100%': '-100%' }
};

let line1 = new mojs.Shape({
    ...LINE_OPTS,
    x: 189,
    y: { [-20]: 160 },
});

let line2 = new mojs.Shape({
    ...LINE_OPTS,
    x: -175,
    y: { 200: -20 },
    stroke: COLORS.hotpink,
    strokeDashoffset: { '-100%': '100%' },
    delay: 290
});

let line3 = new mojs.Shape({
    ...LINE_OPTS,
    radius: 53,
    y: 30,
    stroke: COLORS.yellow,
    strokeDashoffset: { '-100%': '100%' },
    delay: 804,
    angle: 0
});

let StaggerShape = new mojs.stagger(mojs.Shape);

let underlines = new StaggerShape({
    ...LINE_OPTS,
    radius: isMobile() ? 80 : 120,
    angle: 0,
    radiusY: 0,
    y: 30,
    strokeWidth: 2,
    stroke: [COLORS.hotpink, COLORS.yellow, COLORS.cyan, COLORS.white],
    duration: 581,
    delay: 'stagger(1686, 145)',
    strokeDasharray: null,
    strokeDashoffset: null,
    scaleX: { 0: 1 },
    origin: '0 50%',
    quantifier: 'stroke',
    easing: 'expo.out',
    x: 1,
    isForce3d: true
});



// SHAPES
let shapes = new StaggerShape({
    parent: logo,
    left: '100%',
    x: [-20, 10, 0],
    y: [-25, -5, -35],
    quantifier: 'shape',
    shape: ['circle', 'polygon', 'rect'],
    radius: 7,
    fill: 'none',
    stroke: ['deeppink', COLORS.cyan, COLORS.yellow],
    strokeWidth: { 5: 0 },
    scale: { .75: 1 },
    delay: 'stagger(1860, 58)',
    isTimelineLess: true
});

// LOGO SHIFT
let yShift = 0;
const getYShift = () => {
    const w = window;
    const height = w.innerHeight || e.clientHeight || g.clientHeight;
    yShift = height / 1.5;
}

getYShift();
window.addEventListener('resize', getYShift);


let logoShift = new mojs.Tween({
    duration: 349,
    delay: 2790,
    onUpdate(p) {
        var shiftP = mojs.easing.cubic.in(p);
        var scaleP = mojs.easing.quad.in(p);

        mojs.h.setPrefixedStyle(logo, 'transform',
            `translate(0px, ${yShift * shiftP}px)
        scaleY(${1 + 25 * scaleP})`
        );
    }
})

const timeline = new mojs.Timeline({
    onStart() {
        mojs.h.setPrefixedStyle(logo, 'transform', 'none');
    },
    onComplete() {
        let modules = underlines.childModules;
        for (var i = 0; i < modules.length; i++) {
            modules[i]._hide();
        }
    }
});
timeline
    .add(
        nCharacter, oCharacter, vCharacter, aCharacter, pCharacter, rCharacter, yCharacter, mCharacter, eCharacter,
        underlines, line1, line2, line3,
        shapes
    );

new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true, isHidden: true });
