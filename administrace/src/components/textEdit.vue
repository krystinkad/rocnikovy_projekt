<template>
    <ckeditor
        v-if="editor"
        v-model="localEditorData"
        :editor="editor"
        :config="config"
        @input="updateValue"
    />
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { Ckeditor, useCKEditorCloud  } from '@ckeditor/ckeditor5-vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const cloud = useCKEditorCloud( {
    version: '44.0.0',
    premium: false
} );

const localEditorData = ref(props.modelValue);
watch(() => props.modelValue, (newValue) => {
    localEditorData.value = newValue;
});

const updateValue = (data) => {
    emit('update:modelValue', localEditorData.value);
};
const editor = computed( () => {
    if ( !cloud.data.value ) {
        return null;
    }

    return cloud.data.value.CKEditor.ClassicEditor;
} );

const config = computed( () => {
        if ( !cloud.data.value ) {
        return null;
    }

    const { Essentials, Paragraph, Bold, Italic, Code, FontSize, Highlight, HtmlEmbed } = cloud.data.value.CKEditor;

    return {
        licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE4MDc1NzQzOTksImp0aSI6ImIxYmRkNzRlLWQ2NjMtNGEwMS1iOGRiLThiYjI4YTVhYjJhZCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiI3ZWEyMjI5MiJ9.7lnALpNZru3Ep7xMrFkeRX22Y37jnDTmVo3e5WFMzMeWk1H62dyj348iI0uaf_Jicva_9sRc5b2H4k5OaXmx9A',
        plugins: [ Essentials, Paragraph, Bold, Italic, Code, FontSize, Highlight, HtmlEmbed],
        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'code', 'fontSize', 'highlight', 'HtmlEmbed']
    };
} );
</script>
