import {defineComponent} from 'vue';


const ele = defineComponent({
    props: {},
    setup() {


        return () => (
            <div style={{
                transform: 'translate3d(0,0,0)',
                transitionProperty: 'transform',
                transitionDuration: '1000ms',
                transformOrigin: 'center',
                transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)'
            }}>
                Element
            </div>)
    }
})

export default ele