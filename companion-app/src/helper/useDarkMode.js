import { ref } from 'vue';

const darkModeActive = ref(false);

const useDarkMode = () => {
    const toggleDarkMode = () => {
        darkModeActive.value = !darkModeActive.value;
    }

    return {
        darkMode: darkModeActive,
        toggleDarkMode
    }
}

export default useDarkMode;