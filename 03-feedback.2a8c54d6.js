var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("kEUo3");const a={form:document.querySelector("form"),textarea:document.querySelector("textarea"),input:document.querySelector("input")},l=JSON.parse(localStorage.getItem("feedback-form-state"));var i;const f=null!==(i=u())&&void 0!==i?i:{};function u(){l&&(a.form.elements.email.value=l.email,a.form.elements.message.value=l.message)}a.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(f),localStorage.removeItem("feedback-form-state")})),a.form.addEventListener("input",(0,n.throttle)((function(e){f[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(f))}),500)),u();
//# sourceMappingURL=03-feedback.2a8c54d6.js.map
