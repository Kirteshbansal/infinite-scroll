export default function throttle(func, limit) {
    let isThrottle = true;
    return function () {
        if (isThrottle) {
            let context = this;
            let args = arguments;
            func.apply(context, args);
            isThrottle = false;
            setTimeout(() => (isThrottle = true), limit);
        }
    };
}
