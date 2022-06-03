<template>
    <div class="container">
        <form class="card" @submit.prevent="submit">
            <h1>Auth</h1>

            <h2 v-if="error">{{error}}</h2>

            <div class="form-control" :class="{invalid: !form.form.email.valid && form.form.email.touched}">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.form.email.value" @blur="form.form.email.blur">
                <small v-if="form.form.email.errors.required && form.form.email.touched">Введите почту</small>
            </div>

            <div class="form-control" :class="{invalid: !form.form.password.valid && form.form.password.touched}">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.form.password.value" @blur="form.form.password.blur">
                <small v-if="form.form.password.errors.required &&  form.form.password.touched">Введите пароль</small>
                <small v-else-if="form.form.password.errors.minLength &&  form.form.password.touched">
                    Минимальное коллличество символов не может быть меньша 8 сейчас символов:
                    {{form.form.password.value.length}}
                </small>
            </div>

            <button class="btn primary" type="submit" :disabled="!form.form.valid">Submit</button>
        </form>

        <Suspense v-if="submitted">
            <UsersList/>
            <template #fallback>
                <div class="loader"></div>
            </template>
        </Suspense>
    </div>


</template>

<script>
    import UsersList from "./components/UsersList";
    import {useForm} from "@/use/form";

    import {ref, onErrorCaptured} from 'vue'


    const required = val => !!val
    const minLength = num => val => val.length > num
    export default {
        components: {UsersList},
        setup() {
            const submitted = ref(false)
            const error = ref()

            const form = useForm({
                email: {
                    value: '',
                    validators: {required}
                },
                password: {
                    value: '',
                    validators: {required, minLength: minLength(5)}
                }
            })

            onErrorCaptured(e => {
                error.value = e.message
            })

            function submit() {
                console.log('Email:', form.form.email.value)
                console.log('Password:', form.form.password.value)
                submitted.value = true
            }

            return {form, submit, minLength, submitted, error}
        }

    }
</script>

