import{m as r,A as u,e as a}from"./chunks/chunk.25893f8f.js";import{B as N}from"./chunks/chunk.94b8f75a.js";import{T as i}from"./chunks/chunk.0c1c6ffa.js";import"./chunks/chunk.57187bf6.js";const{PUBLIC_CONNECT_SENDINBLUE_URL:c}={PUBLIC_CONTENTFUL_API:"wVDZX1vhl2Dltv7Wd29qWny9R-IqfhgdD8tfsWEiqg4",PUBLIC_CONTENTFUL_SPACE:"0dyvnigvynpa",PUBLIC_FORMSPREE_KEY_CONTACT:"xrgjzwoq",PUBLIC_FORMSPREE_FUNNEL_KEY:"xwkyzljj",PUBLIC_CONNECT_SENDINBLUE_URL:"https://connect-sendinblue.vercel.app/api",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},d="forwardContact";var _=()=>{const[e,t]=r({firstName:"",lastName:"",email:""}),[n,o]=r(!1),l=u((async a=>{a.preventDefault();try{o(!0),await fetch(`${c}/${d}`,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})&&(o(!1),window.location.href="/cto/thank-you")}catch(a){o(!1),window.location.href="/cto/thank-you",console.error(a)}}),[e]);return a("form",{class:"optin-form__container",onSubmit:l,children:[a(i,{autoComplete:"given-name",label:"First Name",type:"text",name:"firstname",onChange:a=>t({...e,firstName:a}),value:e.firstName}),a(i,{autoComplete:"family-name",label:"Last Name",type:"text",name:"lastname",onChange:a=>t({...e,lastName:a}),value:e.lastName}),a(i,{required:!0,autoComplete:"email",label:"Email",type:"email",name:"email",onChange:a=>t({...e,email:a}),value:e.email}),a("div",{children:a(N,{inverted:!0,fullWidth:!0,type:"submit",name:"submit",label:"Watch the video NOW !",loading:n})})]})};export{_ as default};