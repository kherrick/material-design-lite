import{p as h,y as m}from"./chunks/preact.module.8af602d9.js";import{_ as g,e as o}from"./chunks/jsxRuntime.module.1ac67d77.js";/* empty css                        */const u=({source:l=""})=>{const n=m(),c=()=>{const p=n.current,s=l.match(/<style>[\s\S]*?<\/style>/g),r=l.match(/<script>[\s\S]*?<\/script>/g),a=l.replace(/<style>[\s\S]*?<\/style>/g,"").replace(/<script>[\s\S]*?<\/script>/g,""),i={files:{}};if(a){let e=a;e=e.trim(),e=["<!DOCTYPE html> ",'<html lang="en"> ',"<head>",'  <meta charset="utf-8"> ','  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> ','  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"> ','  <link rel="stylesheet" href="https://rodydavis.github.io/material-design-lite/css/mdl.min.css"> ','  <link rel="stylesheet" href="https://rodydavis.github.io/material-design-lite/themes/baseline.css"> ',"  <title>Material Design Lite</title> ",...s?['  <link rel="stylesheet" href="./style.css"> ']:[],"</head> ",'<body class="light-theme">',`${e.split(`
`).map(t=>`  ${t}`).join(`
`)}`,...s?['  <script src="./main.js"><\/script> ']:[],"</body> ","</html> "].join(`
`),i.files["index.html"]={content:e}}if(s){let e=s.join(`
`);e=e.replace(/<style>/g,""),e=e.replace(/<\/style>/g,""),e=e.split(`
`).map(t=>t.replace(/^    /,"")).join(`
`),e=e.trim(),i.files["style.css"]={content:e}}if(r){let e=r.join(`
`);e=e.replace(/<script>/g,""),e=e.replace(/<\/script>/g,""),e=e.split(`
`).map(t=>t.replace(/^    /,"")).join(`
`),e=e.trim(),i.files["main.ts"]={content:e}}p.config=i};return g(()=>c(),[]),o(h,{children:o("playground-ide",{id:"playground",class:"playground-theme-material",ref:n,"editable-file-system":!0,"line-numbers":!0,resizable:!0,style:{height:"100%",width:"100%","--playground-preview-width":"50%"}})})};export{u as default};
