<template>
    <div class="container">
        <form class="card" @submit.prevent="submit">
            <h1>Auth</h1>


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
                    Минимальное коллличество символов не может быть меньша 8 сейчас символов: {{form.form.password.value.length}}
                </small>
            </div>

            <button class="btn primary" type="submit" :disabled="!form.form.valid">Submit</button>
        </form>
    </div>

</template>

<script>
    import {useForm} from "@/use/form";


    const required = val => !!val
    const minLength = num => val => val.length > num
    export default {
        setup() {
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


            function submit() {
                console.log('Email:', form.form.email.value)
                console.log('Password:', form.form.password.value)
            }

            return {
                form, submit,minLength
            }
        }

    }
</script>

