import router from "@/router";
import { useUser } from "@/store/user.js";

// 白名单路由
router.beforeEach(async (to, from, next) => {
  const user = useUser();
  const hasToken = user.token;

  if (hasToken) {
    const noGoArr = ["/login", "/register", "/fogetPassword"];
    // 登录成功，跳转到首页
    if (noGoArr.includes(to.path)) {
      next({ path: "/" });
    } else {
      const hasGetUserInfo = user.userInfo?.UUID;
      if (hasGetUserInfo) {
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next("/");
        } else {
          next();
        }
      } else {
        try {
          let res = await user.getUserInfo(); // 加载路由
          next({ ...to, replace: true });
        } catch (error) {
          await user.resetToken(); // 移除 token 并跳转登录页
          toLogin();
          next("/login");
        }
      }
    }
  } else {
    // await user.resetToken();
    // toLogin();
    // if (whiteList.indexOf(to.path) !== -1) {
    //   next();
    // } else {
    //   await user.resetToken();
    //   toLogin();
    // }
  }
});
