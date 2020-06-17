(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{351:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"how-to-use-this-template"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-template"}},[t._v("#")]),t._v(" How to use this template")]),t._v(" "),r("h2",{attrs:{id:"deploy-to-netlify"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-netlify"}},[t._v("#")]),t._v(" Deploy to Netlify")]),t._v(" "),r("p",[t._v("The best way to start is to hit this button:")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://app.netlify.com/start/deploy?repository=https://github.com/petedavisdev/VuePress-with-Netlify-CMS&stack=cms"}},[r("img",{attrs:{src:"https://www.netlify.com/img/deploy/button.svg",alt:"Deploy to Netlify"}})])]),t._v(" "),r("p",[t._v('This will give you a GitHub repo and a website hosted by Netlify on a random URL. You can add your own domain name later in your "Domain settings" on Netlify.')]),t._v(" "),r("p",[t._v("Alternatively, you can just start with a Git repo and deploy later. Visit the "),r("a",{attrs:{href:"https://github.com/petedavisdev/VuePress-with-Netlify-CMS",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub repo"),r("OutboundLink")],1),t._v(' and click the "Use this template" button.')]),t._v(" "),r("h2",{attrs:{id:"setup-netlify-cms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-netlify-cms"}},[t._v("#")]),t._v(" Setup Netlify CMS")]),t._v(" "),r("p",[t._v("Edit the "),r("code",[t._v("backend")]),t._v(" config in "),r("code",[t._v(".vuepress/public/admin/config.yml")]),t._v(" to point at your repo and deploy the change.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("backend:\n  name: github\n  repo: username/repo\n")])])]),r("h2",{attrs:{id:"login-with-github-oauth"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#login-with-github-oauth"}},[t._v("#")]),t._v(" Login with GitHub OAuth")]),t._v(" "),r("p",[t._v("You can use "),r("a",{attrs:{href:"https://docs.netlify.com/visitor-access/identity/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify Identity"),r("OutboundLink")],1),t._v(" to authenticate CMS users, but to start off, it's simplest to give yourself access with GitHub OAuth.")]),t._v(" "),r("ol",[r("li",[t._v("Go to your "),r("a",{attrs:{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("developer settings on GitHub"),r("OutboundLink")],1),t._v(" and add a new OAuth app.")]),t._v(" "),r("li",[t._v("Enter the name and full URL of your Netlify site and this authorization callback URL:")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("https://api.netlify.com/auth/done\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[t._v("Click Register application to get your Client ID and Client Secret. You will need these in a moment.")]),t._v(" "),r("li",[t._v("In your site Settings, open 'Access control'. Under OAuth, click 'Install provider' and copy in the Client ID and Secret from "),r("a",{attrs:{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("p",[t._v("You should now be able to visit the /admin page on your website and login with GitHub.")]),t._v(" "),r("h2",{attrs:{id:"install-and-develop-on-your-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-and-develop-on-your-computer"}},[t._v("#")]),t._v(" Install and develop on your computer")]),t._v(" "),r("p",[t._v("You will need "),r("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node"),r("OutboundLink")],1),t._v(" installed on your computer. Run these commands inside your repo to install vuepress and start a live-reloading development server:")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),r("h3",{attrs:{id:"build-and-deploy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-and-deploy"}},[t._v("#")]),t._v(" Build and deploy")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),r("p",[t._v("After build the folder to deploy is "),r("code",[t._v("docs/.vuepress/dist")])]),t._v(" "),r("h2",{attrs:{id:"read-the-docs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#read-the-docs"}},[t._v("#")]),t._v(" Read the docs")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vuepress.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official VuePress guide"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress default theme config"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.netlifycms.org/docs/intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify CMS docs"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"contribute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contribute"}},[t._v("#")]),t._v(" Contribute")]),t._v(" "),r("p",[t._v("This template is default VuePress - so please give your "),r("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("skills"),r("OutboundLink")],1),t._v(" or "),r("a",{attrs:{href:"https://opencollective.com/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("money"),r("OutboundLink")],1),t._v(" to the "),r("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress team"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"author"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" Author")]),t._v(" "),r("p",[t._v("Pete Davis")]),t._v(" "),r("ul",[r("li",[t._v("Website: "),r("a",{attrs:{href:"https://petedavis.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("petedavis.dev"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/petedavisdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("@petedavisdev"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Twitter: "),r("a",{attrs:{href:"https://twitter.com/petedavisdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("@petedavisdev"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);