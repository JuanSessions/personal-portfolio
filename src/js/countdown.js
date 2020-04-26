//const countdown = () => {
export default (() => {
    let circleOuter = document.querySelector('.circle-outer');
    console.log("circleOuter:", circleOuter)

    /*
    let circleInner = document.querySelector('.circle-inner'),
        lineH = document.querySelector('.line-h'),
        lineV = document.querySelector('.line-v'),
        numbers = document.querySelector('.numbers'),
        nCircleCx = +circleOuter.getAttribute('cx'),
        nCircleCy = +circleOuter.getAttribute('cy'),
        nLineY = +lineH.getAttribute('y1'),
        nLineX = +lineV.getAttribute('x1'),
        nFps = 12, // Just like vintage silent films :]
        nJitterLevel = 2.5, // How shaky is the projector?
        nTick = 0;
*/


    //(function() {
    /*

    function main() {
        if (!window.requestAnimationFrame) {
            let nLastTime = 0,
                aVendors = ['moz', 'ms', 'o', 'webkit'];
            for (let i = 0; i < aVendors.length; ++i) {
                window.requestAnimationFrame = window[aVendors[i] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[aVendors[i] + 'CancelAnimationFrame'] || window[aVendors[i] + 'CancelRequestAnimationFrame'];
            }
            window.requestAnimationFrame = function(callback, element) {
                let nCurrentTime = new Date().getTime(),
                    nTimeToCall = Math.max(0, 16 - (nCurrentTime - nLastTime)),
                    nTimer = window.setTimeout(function() {
                        callback(nCurrentTime + nTimeToCall);
                    }, nTimeToCall);
                nLastTime = nCurrentTime + nTimeToCall;
                return nTimer;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(nTimer) {
                clearTimeout(nTimer);
            };
        }

        //}());
    }
    main()


    function jitter() {
        setTimeout(function() {
            if (nTick === nFps * 9) {
                // Reset position
                circleOuter.setAttribute('cx', nCircleCx);
                circleInner.setAttribute('cx', nCircleCx);
                circleOuter.setAttribute('cy', nCircleCy);
                circleInner.setAttribute('cy', nCircleCy);
                lineH.setAttribute('y1', nLineY);
                lineH.setAttribute('y2', nLineY);
                lineV.setAttribute('x1', nLineX);
                lineV.setAttribute('x2', nLineX);
                numbers.style.transform = '';
                // Transition after countdown
                document.body.className = 'message';
                return;
            }
            // Use rAF for improved performance
            requestAnimationFrame(jitter);
            // Repaint!
            let nOffsetX = Math.random() * nJitterLevel * ((Math.random() >= 0.5) ? 1 : -1),
                nOffsetY = Math.random() * nJitterLevel * ((Math.random() >= 0.5) ? 1 : -1);
            circleOuter.setAttribute('cx', nCircleCx + nOffsetX);
            circleInner.setAttribute('cx', nCircleCx + nOffsetX);
            circleOuter.setAttribute('cy', nCircleCy + nOffsetY);
            circleInner.setAttribute('cy', nCircleCy + nOffsetY);
            lineH.setAttribute('y1', nLineY + nOffsetY);
            lineH.setAttribute('y2', nLineY + nOffsetY);
            lineV.setAttribute('x1', nLineX + nOffsetX);
            lineV.setAttribute('x2', nLineX + nOffsetX);
            numbers.style.transform = 'translate3d(' + nOffsetX + 'px, ' + nOffsetY + 'px, 0)';
            ++nTick;
        }, 1000 / nFps);
    }

    jitter();
    
    */

})();
//export default countdown;