<template>
  <A1_Template_Syntax />
  <A2_reactive_composition />
  <A2_ref_composition />
  <A3_computed_props_composition />
  <A4_class_style_binding_composition />
  <A7_event_handler_composition />
</template>

<script>
import A1_Template_Syntax from './components/A1_Template_Syntax.vue'
import A2_reactive_composition from './components/A2_reactive_composition.vue';
import A2_ref_composition from './components/A2_ref_composition.vue';
import A3_computed_props_composition from './components/A3_computed_props_composition.vue';
import A4_class_style_binding_composition from './components/A4_class_style_binding_composition.vue';
import A7_event_handler_composition from './components/A7_event_handler_composition.vue';

export default {
  components: {
    A1_Template_Syntax,
    A2_reactive_composition,
    A2_ref_composition,
    A3_computed_props_composition,
    A4_class_style_binding_composition,
    A7_event_handler_composition
  }
}
</script>
