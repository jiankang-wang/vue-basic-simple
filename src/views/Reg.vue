<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{name: 'login'}">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <validation-provider rules="ruleUser" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="name"
                        autocomplete="off"
                        class="layui-input"
                        placeholder="请输入用户名"
                        v-model="user"
                      />
                    </div>
                    <div class="layui-form-mid error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <validation-provider rules="ruleNickName" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="username"
                        autocomplete="off"
                        class="layui-input"
                        placeholder="请输入昵称"
                        v-model="nickName"
                      />
                    </div>
                    <div class="layui-form-mid error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <validation-provider rules="rulePassword" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="password"
                        autocomplete="off"
                        class="layui-input"
                        placeholder="请输入密码"
                        v-model="password"
                      />
                    </div>
                    <div class="layui-form-mid error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <validation-provider rules="ruleConfirmPassword" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="repass"
                        autocomplete="off"
                        class="layui-input"
                        placeholder="请输入确认密码"
                        v-model="confirmPassword"
                      />
                    </div>
                    <div class="layui-form-mid error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <validation-provider rules="ruleCode" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="code"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                        v-model="code"
                      />
                    </div>
                    <div class="layui-form-mid">
                      <span @click="() => getCode()" style="color: #c00;" class="svg" v-html="svg"></span>
                    </div>
                    <div class="layui-form-mid error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" lay-submit>立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a
                    href
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCaptcha } from '@/api/login'
export default {
  name: 'Reg',
  data () {
    return {
      user: '',
      nickName: '',
      password: '',
      confirmPassword: '',
      code: '',
      svg: ''
    }
  },
  mounted () {
    this.getCode()
  },
  methods: {
    getCode () {
      getCaptcha().then(res => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layui-container {
  .svg {
    position: relative;
    top: -15px
  }
  .error {
    color: red;
  }
}
</style>
