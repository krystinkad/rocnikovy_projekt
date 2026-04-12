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
        licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE4MDc1NzQzOTksImp0aSI6IjVjOTBmODVhLWM5ZmEtNDc2YS1hNmFkLTA3MTM5ZGI3NTE5OCIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIiwiRTJQIiwiRTJXIl0sInJlbW92ZUZlYXR1cmVzIjpbIlBCIiwiUkYiLCJTQ0giLCJUQ1AiLCJUTCIsIlRDUiIsIklSIiwiU1VBIiwiQjY0QSIsIkxQIiwiSEUiLCJSRUQiLCJQRk8iLCJXQyIsIkZBUiIsIkJLTSIsIkZQSCIsIk1SRSJdLCJ2YyI6IjJiYjRkYzQ5In0.4WsP1yHb_M7Tw9h-DMgt0aJKXsxdAO-ez9gz2JpVSGXeME1R0et4xmpJVprhmMhJVMP70oJk6prOBrmsTAS7rA',
        plugins: [ Essentials, Paragraph, Bold, Italic, Code, FontSize, Highlight, HtmlEmbed],
        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'code', 'fontSize', 'highlight', 'HtmlEmbed']
    };
} );
</script>
