import { ref, defineEmits } from "vue";

export default function useInteractiveInput(inputVals){
    function setInputValue(name, value){
        inputVals.value[name].value = value
    }
    function setInputErrors(errors){
        if(errors){
            for(let key in errors){
                inputVals.value[key].error = errors[key][0];
            }
        }
    }
    return {
        setInputValue,
        setInputErrors
    }
}