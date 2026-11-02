import { onRequestPost as __api_send_order_js_onRequestPost } from "C:\\Users\\franc\\OneDrive\\Desktop\\ICM\\React-Tutorial-1\\my-project\\functions\\api\\send-order.js"

export const routes = [
    {
      routePath: "/api/send-order",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_send_order_js_onRequestPost],
    },
  ]