import { processElButton } from "./methods";
const Perssion = {
  install(app) {
    app.mixin({
      beforeMount() {
        const oriRender = this.$.render;
        let _ctx_uid;
        this.$.render = (...args) => {
          const result = oriRender(...args);
          if (Array.isArray(result?.children)) {
            result.children &&
              result.children.forEach((item, index) => {
                const { shapeFlag } = item;
                // console.log("_ctx_uid", _ctx_uid);
                console.log("item", item);

                if (shapeFlag != 16 && shapeFlag != 8) {
                  // if (item?.type?.name == "ElButton") {
                  if (item.type) {
                    switch (item.type) {
                      case "button":
                        processElButton(result.children, item, index);
                        break;
                      case "ElButton":
                        _ctx_uid = processElButton(
                          result.children,
                          item,
                          index
                        );
                        break;
                      case "ElSelect":
                        // processElSelect(item, index);
                        break;
                      default:
                        //   if (shapeFlag == 4) {
                        //     processComponent(item);
                        //   }
                        break;
                    }
                  }
                  // }
                }
              });
          }
          return result;
        };
      },
    });
  },
};

export default Perssion;
