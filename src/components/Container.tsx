import {defineComponent, ref, provide, reactive} from 'vue'
import inViewport from '../utils/inViewport'
import isTouch from "@/utils/isTouch";
import mouseMovement from "@/utils/mouseMovement";
import throttle from "@/utils/throttle";
import getCoordinates from "@/utils/getCoordinates";

export default defineComponent({
    props: {
        event: {
            type: String,
            default: 'move'
        },
        duration: {
            type: Number,
            default: 1000
        },
        easing: {
            type: String,
            default: 'cubic-bezier(0.23, 1, 0.32, 1)',
        },
        tag: {
            type: String,
            default: 'div',
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    setup(props, {slots}) {
        const isMoving = ref(false) //是否正在移动
        const dom = ref<HTMLElement>() //渲染的dom
        const movement = ref({
            x: 0,
            y: 0
        }) //元素的移动
        const eventData = ref({
            x: 0,
            y: 0
        })  //鼠标的移动
        const {duration, event, easing, active} = props
        provide('context', {
            duration,
            event,
            easing,
            active,
            movement,
            eventData
        })
        const handleMovement = throttle((event: MouseEvent) => {
            if (!props.active) return;
            const shape = dom.value!.getBoundingClientRect()
            const isInViewport = inViewport(shape) //是否处于可是区域
            /*不是移动端并且在移动的时候*/
            if (props.event === 'move' && isMoving.value && !isTouch()) {
                movement.value = mouseMovement({target: shape, event})
                eventData.value = getCoordinates(event.clientX, event.clientY);
                getCoordinates(event.clientX, event.clientY);
            } else if (props.event === 'scroll'
                && isInViewport
                && !!shape.height) {
                //这里先不实现 先实现ele

            }
        }, 100)
        const handleMovementStart = () => {
            isMoving.value = true
        }
        const handleMovementStop = () => {
            isMoving.value = false
        }

        return () => (
            <div onMousemove={handleMovement} onMouseenter={handleMovementStart}
                 onMouseleave={handleMovementStop} ref={dom}>
                {slots.default?.()}
            </div>)
    }
})
