import {defineComponent} from 'vue'
import Container from "@/components/Container";
import Element from "@/components/Element";


const App = defineComponent(() => {

    return () => (<Container>
            <Element/>
        </Container>
    )
})

export default App