<script lang="tsx">
import { defineComponent, PropType } from "vue";

import { ButtonType } from "../types";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: "default",
    },
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    return () => (
      <div
        class={{
          "q-btn": true,
          [`q-btn-${props.type}`]: true,
        }}
        onClick={() => {
          emit("click");
        }}
      >
        {slots.default ? slots.default() : "button"}
      </div>
    );
  },
});
</script>

<style scoped lang="scss">
.q-btn {
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 15px;
  border: 1px solid #eee;
  color: #666;
  &:active {
    transform: translate(0, 1px);
  }
  &-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  &-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
}
</style>
