<template>
    <div class="input-form">
        <form class="ui form" @submit="submitForm">
            <div class="field">
                <input 
                    v-model="fields.newItem" 
                    type="text" 
                    placeholder="Add an Item!"
                />
                <span style="float: right;">{{ fields.newItem.length }}/20</span>
                <span style="color: red;">{{ fieldErrors.newItem }}</span>
                <span v-if="isNewItemInputLimitExceeded"
                    style="color: red; display: block;"
                >
                    Must be under 20 characters
                </span>
            </div>
            <div class="field">
                <input v-model="fields.email" type="email" placeholder="What's your email?"/>
                <span style="color: red;">{{ fieldErrors.email }}</span>
            </div>
            <div class="field">
                <label>Urgency</label>
                <select v-model="fields.urgency" class="ui fluid search dropdown">
                    <option value="" disabled>Please Select One</option>
                    <option>NonEssential</option>
                    <option>Moderate</option>
                    <option>Urgent</option>
                </select>
                <span style="color: red;">{{ fieldErrors.urgency }}</span>
                <span v-if="isNotUrgent"
                    style="color: red; display: block;"
                >
                    Must be moderate to urgent
                </span>
            </div>
            <div class="field">
                <div class="ui checkbox">
                    <input type="checkbox" v-model="fields.termsAndConditions"/>
                    <label>I accept the terms and conditions</label>
                    <span style="color: red;">{{ fieldErrors.termsAndConditions }}</span>
                </div>
            </div>
            <button v-if="saveStatus === 'SAVING'" disabled class="ui button">
                Saving...
            </button>
            <button v-if="saveStatus === 'SUCCESS'" :disabled="isNewItemInputLimitExceeded || isNotUrgent" class="ui button">
                Saved! Submit another
            </button>
            <button v-if="saveStatus === 'ERROR'" :disabled="isNewItemInputLimitExceeded || isNotUrgent" class="ui button">
                Save Failed! Retry?
            </button>
            <button v-if="saveStatus === 'READY'" class="ui button" :disabled="isNewItemInputLimitExceeded || isNotUrgent">Submit</button>
        </form>
    </div>
    <data-list :items="items" :loading="loading"></data-list>
</template>

<script>
    import DataList from './DataList.vue';

    // persistent status and save data or load data
    let apiClient = {
        loadItems: function() {
            return {
                then: function(cb) {
                    let timeout = 1000;
                    setTimeout(() => {
                        cb(JSON.parse(localStorage.items || '[]'))
                    }, timeout);
                }
            }
        },
        saveItems: function(items) {
            const success = !!(this.count++ % 2);
            let timeout = 1000;

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(!success) return reject({ success });

                    localStorage.items = JSON.stringify(items);
                    return resolve({ success });
                }, timeout);
            })
        },
        count: 1,
    }

    export default {
        name: 'InputForm',
        data() {
            return {
                fields: {
                    email: '',
                    newItem: '',
                    urgency: '',
                    termsAndConditions: false
                },
                fieldErrors: {
                    newItem: undefined,
                    email: undefined,
                    urgency: undefined,
                    termsAndConditions: undefined
                },
                items: [],
                loading: false,
                saveStatus: 'READY'
            }
        },
        created() {
            this.loading = true;
            apiClient.loadItems().then((items) => {
                this.items = items;
                this.loading = false;
            })
        },
        methods : {
            submitForm(evt) {
                evt.preventDefault();

                // showing value on text field into a list
                // this.items.push(this.fields.newItem);
                
                // validation purpose
                this.fieldErrors = this.validateForm(this.fields);
                if(Object.keys(this.fieldErrors).length) return;
                
                const items = [...this.items, this.fields.newItem];

                this.saveStatus = 'SAVING';
                apiClient.saveItems(items)
                    .then(() => {
                        this.items = items;
                        // clearing form when submit has clicked
                        this.fields.newItem = '';
                        this.fields.email = '';
                        this.fields.urgency = '';
                        this.fields.termsAndConditions = false;
                        // persist status success
                        this.saveStatus = 'SUCCESS';
                    })
                    .catch((err) => {
                        console.error(err);
                        this.saveStatus = 'ERROR';
                    });
            },
            validateForm(fields) {
                const errors = {};

                if(!fields.newItem) errors.newItem = "New Item Required!";
                if(!fields.email) errors.email = "Email Required!";
                if(!fields.urgency) errors.urgency = "Urgency Required!";
                if(!fields.termsAndConditions) errors.termsAndConditions = "Terms and condition have to be approved";
                
                // email validation test
                if(fields.email && !this.isEmail(fields.email)) {
                    errors.email = "Invalid Email";
                }

                return errors;
            },
            isEmail(email) {
                const regxpEmail = /\S+@\S+\.\S+/;

                return regxpEmail.test(email);
            }
        },
        computed: {
            isNewItemInputLimitExceeded() {
                return this.fields.newItem.length >= 20;
            },
            isNotUrgent() {
                return this.fields.urgency === "NonEssential";
            }
        },
        components: {
            'data-list': DataList
        }
    }
</script>