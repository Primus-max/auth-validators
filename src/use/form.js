import {computed, reactive} from 'vue'
import {useField} from "./field";

export function useForm(init) {
    const form = reactive({})
    const validKey = 'valid'

    for (const [key, value] of Object.entries(init)) {
        form[key] = useField(value)
    }

    const filteredValidKey = k => k !== validKey

    form[validKey] = computed(()=> {
        return Object.keys(form).filter(filteredValidKey).reduce((acc, k) => {
            acc = form[k].valid
            return acc
        }, true)
    })

    return {
        form
    }
}