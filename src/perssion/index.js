const Perssion = {
  install(app) {
    app.mixin({
      beforeMount() {
        let _ctx_uid = 0;
        const oriRender = this.$.render;
        this.$.render = (...args) => {
          const processElButton = (item, index) => {
            console.log("item", item);
            if (_ctx_uid == item.ctx.uid && item.props?.name === "Edit") {
              result.children.splice(index, 1);
            } else if (
              _ctx_uid == item.ctx.uid &&
              item.props?.name === "HelloEdit"
            ) {
              result.children.splice(index, 1);
            }
          };
          const processElSelect = (item, index) => {
            if (item.props?.name === "Edit") {
              result.children.splice(index, 1);
            }
          };
          const processComponent = (item) => {
            // 例如当前是 uid 3 所以后续 ctx 中 uid 是 3 都是这个组件内部的组件
            // _ctx_uid = item?.component?.uid;
            // console.log("_ctx_uid", item);
            // console.log("_ctx_uid", item.component);
          };
          const result = oriRender(...args);
          if (Array.isArray(result.children)) {
            // console.log(result, "==========");
            result.children.forEach((item, index) => {
              const { type, shapeFlag } = item;
              const { name } = type;
              switch (name) {
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
