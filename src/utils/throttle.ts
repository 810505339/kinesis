export default function throttle(cb: Function, delay: number) {
    let last = 0
    return function (...arg: any[]) {
        const now = +new Date()
        if (now - last > delay) {
            last = now
            // @ts-ignore
            cb.apply(this, arg)
        }
    }
}