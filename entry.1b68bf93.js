import{m as n,A as s,e as o}from"./chunks/chunk.25893f8f.js";import{N as c}from"./chunks/chunk.88060c4e.js";import{d as l}from"./chunks/chunk.57187bf6.js";var m=({link:a,title:e})=>{const[t,r]=n(),i=s((()=>{navigator.clipboard.writeText(`Read about ${e} on ${a}`).then((()=>r({message:"Copied to clipboard",open:!0})))}),[]);return o(l,{children:[o("button",{class:"share-link__share-button",onClick:i,children:o("i",{class:"fas fa-link"})}),o(c,{...t,onClose:()=>r({message:"",open:!1})})]})};export{m as default};