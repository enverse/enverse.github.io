import{d as l}from"./chunks/chunk.57187bf6.js";import{m as c,e}from"./chunks/chunk.25893f8f.js";const s=[{referrer:{firstName:"Kévin",lastName:"Echraghi",position:"Founder & CEO",company:{name:"Hérétique",logoUrl:"/static/assets/image/heretique-ceo_optimized.jpg"}},referral:{title:"A light and powerful app for Dérive",referralText:"Enverse are helping us build the next version of Dérive. Thanks to their skills in development, eco-conception and project management, they allow us to continue developing a lightweight and pertinent application. Their strength of proposal, their listening skills, their rigor and their good mood make them ideal partners to develop our projects in confidence and in good intelligence."},project:{appLogoUrl:"/static/assets/image/project-image-derive.webp",projectUrl:"https://baladesentimentale.fr/"}},{referrer:{firstName:"Charlotte",lastName:"Hallqvist",position:"Director of Communications",company:{name:"UNOPS",logoUrl:"/static/assets/image/unops-referral_72x72.webp"}},referral:{title:"Software for displaced populations in Iraq",referralText:"Enverse Labs came on board to support us with the development of our software which helps displaced populations in Iraq access life-saving information about the humanitarian response. Among other things, they conducted an extensive analysis of our existing software and codebase to help identify pain points and much-needed upgrades. The team was professional, responsive, and very knowledgeable and we would happily work with them again."}},{referrer:{firstName:"Seira",lastName:"Yun",position:"Founder & CEO",company:{name:"Socious",logoUrl:"/static/assets/image/socious-ceo_72x72.webp"}},referral:{title:"A new face for the leading social impact app",referralText:"Enverse are talented professionals who really care about social and environmental impact. They are also fun to work with! If you are working on a social/environmental project, they will be great partners because they share your mission."},project:{appLogoUrl:"/static/assets/image/socious-app_221x393.png",projectUrl:"https://socious.io/"}}];function m(){const[r,a]=c(0),{referral:i,project:t}=s[r];return e(l,{children:e("div",{className:"carousel-tetimonials__container-row",children:[e("div",{className:"carousel-testimonials__referers-container",children:s.map((({referrer:i},t)=>e("div",{className:"carousel-testimonials__referer-card "+(r===t?"selected":""),onClick:()=>a(t),children:[e("div",{className:"carousel-testimonials__referer-img-container column",children:e("img",{width:"72",height:"72",alt:i.company.name,src:i.company.logoUrl})}),e("div",{className:"column",children:[e("p",{children:e("b",{children:[i.firstName," ",i.lastName]})}),e("p",{className:"carousel-testimonials__referer-card-refferer-position--small-text",children:i.position}),e("p",{className:"carousel-testimonials__referer-card-refferer-position--small-text",children:i.company.name})]})]})))}),e("div",{className:"carousel-testimonials__referral-container",children:[e("h2",{children:i.title}),e("div",{class:"carousel-testimonials__referral-text-container",children:[e("div",{class:"carousel-testimonials__referral-quotes-container",children:e("i",{class:"fas fa-quote-left"})}),e("p",{dangerouslySetInnerHTML:{__html:i.referralText}}),e("div",{class:"carousel-testimonials__referral-quotes-container",children:e("i",{class:"fas fa-quote-right"})})]})]}),e("div",{className:"carousel-testimonials__project-image",children:t&&e("a",{href:t.projectUrl,target:"_blank",children:e("img",{alt:t.projectUrl,width:"220",height:"393",src:t.appLogoUrl})})})]})})}export{m as default};