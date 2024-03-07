/*
 * @Author: rk
 * @Description:
 * @Date: 2024-03-01 09:38:50
 * @LastEditors: rk
 * @LastEditTime: 2024-03-01 09:41:27
 */
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import "./custom.css";
import Layout from "./layout.vue";

export default {
  ...DefaultTheme,
  Layout() {
    return h(Layout, null);
  },
};
