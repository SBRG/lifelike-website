import{f as r}from"./vendor.1fb6911b.js";const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};u();const a="2w3znEmvoB9e9YMcFjDef3",d="https://flagsmith.apps.lifelike.cloud/api/v1/";var c;const f=!!((c={}.VITE_FLAGSMITH_CACHE_FLAGS)==null||c);r.init({environmentID:a,api:d,cacheFlags:f,onChange:()=>{m(),p(),g()}});const m=()=>{const n=r.getValue("login_url"),t=document.getElementById("login-nav-item");t.classList.toggle("d-none",!n),n&&(t.querySelector("a").href=n)},g=()=>{const n=r.hasFeature("opensource_released"),t=r.getValue("github_url"),i=document.getElementById("github-nav-item");i.classList.toggle("d-none",!n||!t),t&&(i.querySelector("a").href=t)},p=()=>{const n=r.getValue("contact_email"),t=document.getElementById("demo-request-link");t.classList.toggle("d-none",!n),n&&(t.href=`mailto:${n}?body=${encodeURIComponent("I am interested in demoing Lifelike.")}`)};
