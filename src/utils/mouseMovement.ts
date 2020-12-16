import getCoordinates from "@/utils/getCoordinates";
import getCenter from "@/utils/getCenter";

interface IAction {
    target: DOMRect,
    event: MouseEvent
}

/*
* 获取鼠标对于元素的x,y
* */
export default function mouseMovement(action: IAction) {
    const {target, event} = action
    const relativeX = event.clientX - target.left  //鼠标在元素中的相对位置
    const relativeY = event.clientY - target.top //鼠标在元素中的相对位置
    const center = getCenter(target)
    const mouseMovementX = relativeX / center.x  //鼠标移动对于元素来讲的位置
    const mouseMovementY = relativeY / center.y  //鼠标移动对于元素来讲的位置

    return {
        ...getCoordinates(mouseMovementX, mouseMovementY),
        target
    }

}