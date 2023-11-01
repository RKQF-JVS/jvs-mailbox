import request from "@/router/axios";

const base = "/mgr";

// 通过code置换用户信息
export function codeGetUserInfo(data) {
  return request({
    url: `/mgr/jvs-auth/oauth/${data.code}`,
    method: "get"
  });
}

// 获取当前用户信息
export function getUserInfo() {
  return request({
    url: "/mgr/jvs-auth/index/user/info",
    method: "get"
  });
}

// 获取当前登录用户所在租户信息
export function getUserTenantInfo() {
  return request({
    url: "/mgr/jvs-auth/index/this/tenant",
    method: "get"
  });
}

// 我的组织
export function getMyTenantList() {
  return request({
    url: "/mgr/jvs-auth/index/my/tenants",
    method: "get"
  });
}

// 解散我的组织
export function delMyTenantList(tenantId) {
  return request({
    url: `/mgr/jvs-auth/index/my/tenant/${tenantId}`,
    method: "delete"
  });
}

// 已经加入的组织
export function getJoinTenantList() {
  return request({
    url: "/mgr/jvs-auth/index/tenants",
    method: "get"
  });
}

// 退出组织
export function delJoinTenantList(tenantId) {
  return request({
    url: `/mgr/jvs-auth//index/tenant/${tenantId}`,
    method: "get"
  });
}

// 绑定邮箱
export function bindEmail(data) {
  return request({
    url: "/mgr/jvs-auth/index/bind/email",
    method: "put",
    params: data
  });
}

// 解绑邮箱
export function unbindEmail() {
  return request({
    url: "/mgr/jvs-auth/index/bind/email",
    method: "delete"
  });
}

// 发送邮箱验证码
export function sendEmailCode(params) {
  return request({
    url: "/mgr/jvs-auth/index/send/email/code",
    method: "get",
    params: params
  });
}

// 绑定手机
export function bindPhone(data) {
  return request({
    url: "/mgr/jvs-auth/index/bind/phone",
    method: "put",
    params: data
  });
}

// 解除手机绑定
export function unbindPhone() {
  return request({
    url: "/mgr/jvs-auth/index/bind/phone",
    method: "delete"
  });
}

// 发送手机验证码
export function sendPhoneCode(phone) {
  return request({
    url: `/auth/phone/sms/bind/${phone}`, // `/auth/phone/sms/verification/${phone}`,
    method: "get",
  });
}

// 绑定微信
export function bindWX(params) {
  return request({
    url: "/mgr/jvs-auth/index/bind/wx",
    method: "put",
    params: params
  });
}

// 解除微信绑定
export function unbindWX() {
  return request({
    url: "/mgr/jvs-auth/index/bind/wx",
    method: "delete"
  });
}

// 修改密码
export function setPassWord(data) {
  return request({
    url: "/mgr/jvs-auth/index/user/change/password",
    method: "post",
    data: data
  });
}

// 修改账号头像
export function updateAccountHead(key, value) {
  let url = `/mgr/jvs-auth/index/update/account?${key}=${value}`
  if(key == 'headImg') {
    url = `/mgr/jvs-auth/index/bind/headImg?${key}=${value}`
  }
  return request({
    url: url,
    method: "put"
  });
}

// 注销帐号
export function loginOff() {
  return request({
    url: "/mgr/jvs-auth/index/logoff",
    method: "put",
  });
}

// 企业微信绑定
export function bindQW(params) {
  return request({
    url: `/mgr/jvs-auth/index/bind/wxenterprise`,
    method: "put",
    params: params
  });
}

// 解除企业微信绑定
export function unbindQW() {
  return request({
    url: "/mgr/jvs-auth/index/bind/wxenterprise",
    method: "delete"
  });
}

// 绑定钉钉
export function bindDD (params) {
  return request({
    url: "/mgr/jvs-auth/index/bind/ding",
    method: "put",
    params: params
  });
}

// 解除钉钉绑定
export function unbindDD () {
  return request({
    url: "/mgr/jvs-auth/index/bind/ding",
    method: "delete"
  });
}

// 绑定LDAP
export function bindLDAP (params) {
  return request({
    url: "/mgr/jvs-auth/index/bind/ldap",
    method: "put",
    params: params
  });
}

// 解除LDAP绑定
export function unbindLDAP () {
  return request({
    url: "/mgr/jvs-auth/index/bind/ldap",
    method: "delete"
  });
}