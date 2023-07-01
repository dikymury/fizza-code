<template>
  <div
    :class="{ 'switch-view-right': props.modelValue }"
    class="flex p-0.5 relative bg-gray-5 rounded-full h-35 switch-view"
  >
    <div
      class="w-[95px] h-[31px] flex items-center gap-x-2 justify-center switch-view-item"
      @click="onChange(false)"
    >
      <IconSVG
        icon="IconGrid"
        :color="!props.modelValue ? 'primary' : 'disabled'"
        width="22"
        height="22"
      />
      <div
        :class="!props.modelValue ? 'text-black' : 'text-disabled'"
        class="text-sm font-medium"
      >
        Grid
      </div>
    </div>
    <div
      class="w-[95px] h-[31px] flex items-center gap-x-2 justify-center switch-view-item"
      @click="onChange(true)"
    >
      <IconSVG
        width="18"
        height="18"
        icon="IconTable"
        :color="props.modelValue ? 'primary' : 'disabled'"
      />
      <div
        :class="props.modelValue ? 'text-black' : 'text-disabled'"
        class="text-sm font-medium"
      >
        Row
      </div>
    </div>
  </div>
</template>

<script setup>
import IconSVG from "./icons/IconSvg.vue";
defineOptions({
  name: "SwitchView",
});
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
  },
});
const emit = defineEmits(["update:modelValue"]);
const onChange = (val) => {
  emit("update:modelValue", val);
};
</script>

<style lang="scss">
.switch-view {
  & .switch-view-item {
    z-index: 2;
    cursor: pointer;
    user-select: none;
  }
  &::after {
    position: absolute;
    content: "";
    border-radius: 99px;
    width: 95px;
    height: 31px;
    background: #fefefe;
    z-index: 1;
    top: 2px;
    left: 3px;
    transition: left 500ms ease;
  }
}
.switch-view-right {
  &::after {
    left: 96px;
  }
}
</style>
