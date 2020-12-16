import {defineComponent, ref, getCurrentInstance, ComponentInternalInstance} from 'vue'
import inViewport from '../utils/inViewport'
import isTouch from "@/utils/isTouch";
import mouseMovement from "@/utils/mouseMovement";
import throttle from "@/utils/throttle";

export default defineComponent({
    props: {
        event: {
            type: String,
            default: 'move'
        }
    },
    setup(props, {slots}) {
        const isMoving = ref(false)
        const dom = ref<HTMLElement>()
        const handleMovement = throttle((event: MouseEvent) => {

            const shape = dom.value!.getBoundingClientRect()
            const isInViewport = inViewport(shape) //是否处于可是区域
            /*不是移动端并且在移动的时候*/
            if (props.event === 'move' && isMoving.value && !isTouch()) {
                console.log(isMoving.value)
                const {x, y} = mouseMovement({target: shape, event})
                console.log(x, y)
            } else if (props.event === 'scroll'
                && isInViewport
                && !!shape.height) {


            }
        }, 100)
        const handleMovementStart = () => {
            isMoving.value = true
        }
        const handleMovementStop = () => {
            isMoving.value = false
        }

        return () => (
            <div onMousemove={handleMovement} onMouseenter={handleMovementStart} onMouseleave={handleMovementStop}
                 ref={dom}>
                {slots.default?.()}
                测试
            </div>)
    }
})
