<template>
    <div class="container">
        <form class="card" @submit.prevent="submit">
            <h1>Auth</h1>

            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email">
            </div>

            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password">
            </div>

            <button class="btn primary" type="submit">Submit</button>
        </form>
    </div>

</template>

<script>
    import {useForm} from "./use/form";

    export default {
        setup() {
            const form = useForm({
                email: {
                    value: 'email@mail.ru',
                    validators: {},
                },
                password:{
                    value: 'myPassword',
                    validators: {},
                },
            })
            function submit() {

            }

            return {
                form, submit
            }
        }

    }
</script>

