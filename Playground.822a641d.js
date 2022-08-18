import{p as m,y as d}from"./chunks/preact.module.8af602d9.js";import{_ as g,e as c}from"./chunks/jsxRuntime.module.1ac67d77.js";/* empty css                        */const y=["<style>","  body {","    background-color: var(--md-sys-color-background);","    color: var(--md-sys-color-on-background);","  }","</style>","<script>","  console.log('Welcome to MDL for M3!');","<\/script>",'<button class="button filled">','  <i class="material-icons">add</i>',"  <span>Button</span>","</button>"],b=({source:i=y.join(`
`)})=>{const o=d(),a=()=>{const p=o.current,l=i.match(/<style>[\s\S]*?<\/style>/g),n=i.match(/<script>[\s\S]*?<\/script>/g),r=i.replace(/<style>[\s\S]*?<\/style>/g,"").replace(/<script>[\s\S]*?<\/script>/g,""),e={files:{}};if(r){let t=r;t=t.trim(),t=["<!DOCTYPE html>",'<html lang="en">',"<head>",'  <meta charset="utf-8">','  <link rel="stylesheet" href="https://rodydavis.github.io/material-design-lite/css/mdl.min.css">','  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">','  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">',"  <title>Material Design Lite</title>",...l?['  <link rel="stylesheet" href="./style.css">']:[],"</head>","<body>",`${t.split(`
`).map(s=>`  ${s}`).join(`
`)}`,...l?['  <script src="./main.ts"><\/script>']:[],"</body>","</html>"].join(`
`),e.files["index.html"]={content:t}}if(l){let t=l.join(`
`);t=t.replace(/<style>/g,""),t=t.replace(/<\/style>/g,""),t=t.split(`
`).map(s=>s.replace(/^  /,"")).join(`
`),t=t.trim(),e.files["style.css"]={content:t}}if(n){let t=n.join(`
`);t=t.replace(/<script>/g,""),t=t.replace(/<\/script>/g,""),t=t.split(`
`).map(s=>s.replace(/^  /,"")).join(`
`),t=t.trim(),e.files["main.ts"]={content:t}}p.config=e,console.log(e)};return g(()=>{a()},[]),c(m,{children:c("playground-ide",{id:"playground",class:"playground-theme-material",ref:o,"editable-file-system":!0,"line-numbers":!0,resizable:!0,style:{height:"100%",width:"100%","--playground-preview-width":"50%"}})})};export{b as default};
