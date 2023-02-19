import { useRoute } from "vue-router";
const Perssion = {
  install(app) {
    app.mixin({
      beforeMount() {
        const route = useRoute();
        let _ctx_uid = 0;
        const oriRender = this.$.render;
        this.$.render = (...args) => {
          const processElButton = (item, index) => {
            console.log("item", result.children);
            // if (route.path.includes("first")) {
            //   if (item.props?.name === "Edit") {
            //     item.props.style = "display:none";
            //     // result.children.splice(index, 1);
            //   } else if (item.props?.name === "HelloEdit") {
            //     item.props.style = "display:none";
            //     // result.children.splice(index, 1);
            //   }
            // }
            console.log("item end", result.children);
          };
          const processElSelect = (item, index) => {
            // if (item.props?.name === "Edit") {
            //   result.children.splice(index, 1);
            // }
          };
          const processComponent = (item) => {
            // 例如当前是 uid 3 所以后续 ctx 中 uid 是 3 都是这个组件内部的组件
            // _ctx_uid = item?.component?.uid;
            // console.log("_ctx_uid", item);
            // console.log("_ctx_uid", item.component);
          };
          const result = oriRender(...args);
          if (Array.isArray(result?.children)) {
            result.children &&
              result.children.forEach((item, index) => {
                const { shapeFlag } = item;
                console.log("shapeFlag", shapeFlag);
                if (shapeFlag != 16 && shapeFlag != 8) {
                  console.log("item", item);
                  if (item?.type?.name == "ElButton") {
                    if (item.type) {
                      switch (item.type.name) {
                        case "ElButton":
                          processElButton(item, index);
                          break;
                        case "ElSelect":
                          processElSelect(item, index);
                          break;
                        default:
                          //   if (shapeFlag == 4) {
                          //     processComponent(item);
                          //   }
                          break;
                      }
                    }
                  }
                }

                _ctx_uid++;
              });
          }
          return result;
        };
      },
    });
  },
};

export default Perssion;
