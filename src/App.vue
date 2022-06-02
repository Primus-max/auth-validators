<template>
    <div class="container">
        <form class="card" @submit.prevent="submit">
            <h1>Auth</h1>

            <pre>
                {{ form.form.email }}
                {{ form.form.password }}
            </pre>

            <div class="form-control " :class="{invalid: !form.form.email.valid}">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.form.email.value">
                <small v-if="form.form.email.errors.required">Введите почту</small>
            </div>

            <div class="form-control" :class="{invalid: !form.form.password.valid}">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.form.password.value">
                <small v-if="form.form.password.errors.required">Введите пароль</small>
                <small v-else-if="form.form.password.errors.minLength">
                    Минимальное коллличество символов не может быть меньша 8 сейчас символов: {{form.form.password.value.length}}
                </small>
            </div>

            <button class="btn primary" type="submit">Submit</button>
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
                    value: 'email@mail.ru',
                    validators: {required}
                },
                password: {
                    value: 'myPassword',
                    validators: {required, minLength: minLength(5)}
                }
            })



            function submit() {}

            return {
                form, submit,minLength
            }
        }

    }
</script>

