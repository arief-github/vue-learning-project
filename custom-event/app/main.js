const emitter = mitt();

const inputComponent = {
    template: `<input :placeholder="placeholder" 
        v-model="input"
        class="input is-small"
        @keyup.enter="monitorEnterKey" 
        type="text"/>`,
    props: ["placeholder"],
    emits: ["add-note"],
    data() {
        return {
            input: ''
        }
    },
    methods : {
        monitorEnterKey() {
            emitter.emit("add-note", {
                note: this.input,
                timestamp: new Date().toLocaleString(),
            });
            this.input = "";
        },
    }    

};

const noteCountComponent = {
    template: `<div class="note-count">Note count: <strong>{{ noteCount }}</strong></d\
    iv>`,
    data() {
        return {
            noteCount: 0
        }
    },
    created() {
        emitter.on("add-note", event => this.noteCount++);
    }
}

const app = {
    data() {
        return {
            notes: [],
            timestamps: [],
            placeholder: "Enter a note"
        }
    },
    created() {
      emitter.on("add-note", (event) => this.addNote(event));  
    },
    components : {
        'input-component': inputComponent,
        'note-count-component': noteCountComponent
    },
    methods: {
        addNote(event) {
            this.notes.push(event.note);
            this.timestamps.push(event.timestamp);
        }
    }
};

Vue.createApp(app).mount("#app");