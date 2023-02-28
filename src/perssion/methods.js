import { markRaw } from "vue";
import { useRoute } from "vue-router";

// const route = useRoute();
export const processElButton = (res, item, index) => {
  if (window.history.state.current.includes("first")) {
    if (item.props?.name === "Edit") {
      console.log("first router", item);
      console.log("item.children.default", item.children.default);
      // item.children = null;
      // const oriRender = item.children.default;
      // item.children.default= (...args) => {

      // }
      res.splice(index, 1);

      console.log('res',res);
      
    }
  }
};
export const processElSelect = (item, index) => {
  // if (item.props?.name === "Edit") {
  //   result.children.splice(index, 1);
  // }
};
export const processComponent = (item) => {
  // 例如当前是 uid 3 所以后续 ctx 中 uid 是 3 都是这个组件内部的组件
  // _ctx_uid = item?.component?.uid;
  // console.log("_ctx_uid", item);
  // console.log("_ctx_uid", item.component);
};
