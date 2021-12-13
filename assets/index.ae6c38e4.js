import{l,e,d as c}from"./vendor.7d98092f.js";/* empty css              */const s=[{referrer:{firstName:"Charlotte",lastName:"Hallqvist",position:"Director of Communications",company:{name:"UNOPS Iraq center",logoUrl:"/assets/image/unops-referral_72x72.webp"}},referral:{title:"Software for displaced populations in Iraq",referralText:"Enverse Labs came on board to support us with the development of our software which helps <b>displaced populations</b> in Iraq access <b>life-saving information about the humanitarian response</b>. Among other things, they conducted an <b>extensive analysis of our existing software and codebase</b> to help identify pain points and much-needed upgrades. The team was professional, responsive, and very knowledgeable and <b>we would happily work with them again.</b>"}},{referrer:{firstName:"Seira",lastName:"Yun",position:"Founder & CEO",company:{name:"Socious",logoUrl:"/assets/image/socious-ceo_72x72.webp"}},referral:{title:"A new face for the leading social impact app",referralText:"Enverse are talented professionals who really care about <b>social and environmental impact</b>. They are also fun to work with! If you are working on a social/environmental project, they will be great partners because they <b>share your mission.</b>"},project:{appLogoUrl:"/assets/image/socious-app.png",projectUrl:"https://socious.io/"}},{referrer:{firstName:"K\xE9vin",lastName:"Eghriagi",position:"Founder & CEO",company:{name:"H\xE9r\xE9tique",logoUrl:"/assets/image/heretique-ceo_optimized.jpg"}},referral:{title:"D\xE9velopement de D\xE9rive",referralText:"Enverse are helping us build the next version of <b>D\xE9rive</b>. Thanks to their skills in <b>eco-conception and project management</b>, they allow us to continue developing a <b>sober</b> and <b>relevant application</b>. Their strength of proposal, their listening, their rigor and their good mood make them ideal partners to develop our projects in confidence and in good intelligence."},project:{projectUrl:"https://derive.today"}}];function m(){const[o,n]=l(0),{referral:i,project:r}=s[o];return e(c,{children:e("div",{className:"carousel-tetimonials__container-row",children:[e("div",{className:"carousel-testimonials__referers-container",children:s.map(({referrer:a},t)=>e("div",{className:`carousel-testimonials__referer-card ${o===t?"selected":""}`,onClick:()=>n(t),children:[e("div",{className:"carousel-testimonials__referer-img-container column",children:e("img",{src:a.company.logoUrl})}),e("div",{className:"column",children:[e("p",{children:e("b",{children:[a.firstName," ",a.lastName]})}),e("p",{children:a.position}),e("p",{children:a.company.name})]})]}))}),e("div",{className:"carousel-testimonials__referral-container",children:[e("h2",{children:i.title}),e("div",{class:"carousel-testimonials__referral-text-container",children:[e("div",{class:"carousel-testimonials__referral-quotes-container",children:e("i",{class:"fas fa-quote-left"})}),e("p",{dangerouslySetInnerHTML:{__html:i.referralText}}),e("div",{class:"carousel-testimonials__referral-quotes-container",children:e("i",{class:"fas fa-quote-right"})})]})]}),e("div",{className:"carousel-testimonials__project-image",children:r&&e("a",{href:r.projectUrl,target:"_blank",children:e("img",{src:r.appLogoUrl})})})]})})}export{m as default};
