import{p as m,y as h}from"./chunks/preact.module.8af602d9.js";import{_ as g}from"./chunks/hooks.module.5be5d437.js";/* empty css                        */import{e as o}from"./chunks/jsxRuntime.module.f6a58cef.js";const b=({source:l=""})=>{const r=h(),c=()=>{const p=r.current,s=l.match(/<style>[\s\S]*?<\/style>/g),n=l.match(/<script>[\s\S]*?<\/script>/g),a=l.replace(/<style>[\s\S]*?<\/style>/g,"").replace(/<script>[\s\S]*?<\/script>/g,""),i={files:{}};if(a){let e=a;e=e.trim(),e=["<!DOCTYPE html> ",'<html lang="en"> ',"<head>",'  <meta charset="utf-8"> ','  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> ','  <link rel="stylesheet" href="https://rodydavis.github.io/material-design-lite/css/mdl.min.css"> ','  <link rel="stylesheet" href="https://rodydavis.github.io/material-design-lite/css/icons.module.css"> ',"  <title>Material Design Lite</title> ",...s?['  <link rel="stylesheet" href="./style.css"> ']:[],"</head> ",'<body class="light-theme">',`${e.split(`
`).map(t=>`  ${t}`).join(`
`)}`,...s?['  <script src="./main.js"><\/script> ']:[],"</body> ","</html> "].join(`
`),i.files["index.html"]={content:e}}if(s){let e=s.join(`
`);e=e.replace(/<style>/g,""),e=e.replace(/<\/style>/g,""),e=e.split(`
`).map(t=>t.replace(/^    /,"")).join(`
`),e=e.trim(),i.files["style.css"]={content:e}}if(n){let e=n.join(`
`);e=e.replace(/<script>/g,""),e=e.replace(/<\/script>/g,""),e=e.split(`
`).map(t=>t.replace(/^    /,"")).join(`
`),e=e.trim(),i.files["main.ts"]={content:e}}p.config=i};return g(()=>c(),[]),o(m,{children:o("playground-ide",{id:"playground",class:"playground-theme-material",ref:r,"editable-file-system":!0,"line-numbers":!0,resizable:!0,style:{height:"100%",width:"100%","--playground-preview-width":"50%"}})})};export{b as default};
