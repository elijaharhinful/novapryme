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
        return '<path id="n-2" data-name="n" d="M16.72-146.3V-46.02H38.209v-78.792H65.284c16.475,0,27.362,10.315,27.362,25.786V-46.02h21.489V-99.885c0-27.792-19.483-46.415-48.708-46.415Z" transform="translate(-16.43 146.02)" fill="#707070"/>';
    }
}
mojs.addShape('n', N);

class O extends mojs.CustomShape {
    getShape() {
        return '<<path id="o-2" data-name="o" d="M30.863-98.257c0-17.637,11.665-29.3,29.3-29.3,17.5,0,29.024,11.665,29.024,29.163,0,17.637-11.665,29.163-29.3,29.163C42.389-69.233,30.863-80.759,30.863-98.257Zm-20.831,0c0,30.135,19.859,49.855,49.855,49.855,30.135,0,50.133-19.859,50.133-49.994,0-30-19.72-49.994-49.855-49.994S10.032-128.392,10.032-98.257Z" transform="translate(-10.02 148)" fill="#707070"/>';
    }
}
mojs.addShape('o', O);

class V extends mojs.CustomShape {
    getShape() {
        return '<path id="v-2" data-name="v" d="M41.659-46.02H63.435L101.541-146.3H80.052L52.547-73.955,25.042-146.3H3.553Z" transform="translate(-2.553 146.02)" fill="#707070"/>';
    }
}
mojs.addShape('v', V);

class A extends mojs.CustomShape {
    getShape() {
        return '<path id="a-2" data-name="a" d="M44.087-69.534c-7.677,0-12.7-3.489-12.7-8.654,0-5.3,5.025-8.793,12.422-8.793H77.864a41.867,41.867,0,0,0,12.143-1.675v7.816c0,6.839-5.025,11.306-12.422,11.306Zm66.856-47.455c0-17.586-13.4-29.311-33.358-29.311H16.033v20.936H77.585c7.4,0,12.422,3.489,12.422,8.654,0,5.3-5.025,8.793-12.7,8.793H42.971c-19.54,0-32.521,12-32.521,29.869,0,17.726,13.26,29.45,33.079,29.45H77.585c19.959,0,33.358-11.585,33.358-28.892Z" transform="translate(-10.944 147.3)" fill="#707070"/>';
    }
}
mojs.addShape('a', A);

class P extends mojs.CustomShape {
    getShape() {
        return '<path id="p-2" data-name="p" d="M35.182-99.959v-.713c0-14.544,11.977-24.24,29.8-24.24H77.246c9.268,0,15.542,4.705,15.542,12.263,0,7.7-6.274,12.69-15.827,12.69ZM77.531-78.571c21.959,0,36.645-13.4,36.645-34.079,0-20.39-14.4-33.651-36.075-33.651H64.128c-30.229,0-50.334,18.251-50.334,45.628v54.183H35.182V-78.571Z" transform="translate(-13.794 146.3)" fill="#707070"';
    }
}
mojs.addShape('p', P);

class R extends mojs.CustomShape {
    getShape() {
        return '<path id="r-2" data-name="r" d="M34.8-46.3v-50c0-16.571,11.857-28.571,29.857-28.571H109.09V-146.3H63.8c-30.143,0-50.429,20.571-50.429,50v50Z" transform="translate(-11.376 146.3)" fill="#707070"';
    }
}
mojs.addShape('r', R);

class Y extends mojs.CustomShape {
    getShape() {
        return '<path id="y-2" data-name="y" d="M62.018-96.16c-16.475,0-27.362-10.315-27.362-25.786V-146.3H13.167v25.213c0,27.792,19.483,46.415,48.708,46.415H82.933c-4.584,4.584-11.461,7.163-19.77,7.163H14.6V-46.02H63.307c28.365,0,47.275-17.477,47.275-43.55V-146.3H89.093v50.14Z" transform="translate(-12.167 146.3)" fill="#707070"/>';
    }
}
mojs.addShape('y', Y);

class M extends mojs.CustomShape {
    getShape() {
        return '<path id="m-2" data-name="m" d="M57.754-88.24H70.2v-45.619H85.871c9.538,0,15.842,5.972,15.842,14.93V-88.24h12.441v-31.187c0-16.091-11.28-26.874-28.2-26.874H41.995c-16.92,0-28.2,10.783-28.2,26.874V-88.24H26.235v-30.689c0-8.958,6.3-14.93,15.842-14.93H57.754Z" transform="translate(-14.155 162.773)" fill="#707070"/>';
    }
}
mojs.addShape('m', M);

class E extends mojs.CustomShape {
    getShape() {
        return '<path id="e-2" data-name="e" d="M105.735-46.093V-67.566H61.5C43.321-67.566,31.3-79.448,31.3-96.2c0-16.606,11.882-28.631,29.919-28.631H69.8c9.591,0,15.317,3.579,15.317,8.875,0,5.583-6.3,9.019-15.89,9.019H52.769V-85.46H69.231c22.475,0,37.363-10.593,37.363-29.776,0-18.9-14.315-31.064-36.647-31.064H60.356c-30.205,0-50.533,20.614-50.533,50.1,0,29.633,20.614,50.1,51.105,50.1Z" transform="translate(-9.636 146.093)" fill="#707070"/>';
    }
}
mojs.addShape('e', E);

// VARIABLES
const { approximate } = mojs.easing,
    shiftCurve = approximate(mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0')),
    scaleCurve = approximate(mojs.easing.path('M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100')),
    charSize = 30,
    leftStep = 10,
    logo = document.querySelector('#js-logo');

const CHAR_OPTS = {
    parent: logo,
    isForce3d: true,
    fill: 'white',
    radius: charSize / 2,
    stroke: 'white',
    strokeWidth: 2
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
        // x:          { to: charSize, easing: shiftCurve },
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
    scaleY: { 1: 1, curve: scaleCShort },
    origin: { '50% 100%': '50% 0%', easing: shiftCurve }
}).then(CHAR_HIDE_THEN);

const rCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'r',
    left: 6 * leftStep + '%',
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
        // x:          { to: charSize, easing: shiftCurve },
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
        // x:          { to: charSize, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '50% 0%': '50% 100%', easing: shiftCurve }
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
        // x:          { to: charSize, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '50% 0%': '50% 100%', easing: shiftCurve }
    }).then(CHAR_HIDE_THEN);


const eCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape: 'e',
    left: 9 * leftStep + '%',
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
        // x:          { to: charSize, easing: shiftCurve },
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
    radius: 120,
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
        shapes,
        logoShift
    );

new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });
