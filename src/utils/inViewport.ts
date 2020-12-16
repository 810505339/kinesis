/*
* 判断是否处于可视区域*/
export default function (element: DOMRect) {

    return element.bottom >= 0
        && element.right >= 0
        && element.top <= (window.innerHeight ?? document.documentElement.clientHeight)
        && element.left <= (window.innerWidth ?? document.documentElement.clientWidth)
}