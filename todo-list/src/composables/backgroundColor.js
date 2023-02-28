import { computed } from 'vue';

function useBackgroundColor( props ) {
    return computed(() => {
        const options = {
            danger: "var(--danger-color)",
            info: "var(--info-color)",
            warning: "var(--warning-color)",
            succes: "var(--accent-color)",
            secondary: "var(--secondary-color)",
        };

        return options[props.variant];
    });
}

const backgroundColorProps = {
    variant: {
        required: false,
        default: "succes",
        valedator(value) {
            const options = ["danger", "warning", "info", "succes", "secondary"];
            return options.includes(value);
        },
    },
};

export { useBackgroundColor, backgroundColorProps };