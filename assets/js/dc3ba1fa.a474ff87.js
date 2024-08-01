"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[5207],{96983:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(85893),t=s(11151);const r={},o="130: Windows Update",d={id:"workshop-guidance/devices/RMD_130",title:"130: Windows Update",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_130.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_130",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_130",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_130.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"129: Client Apps",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_129"},next:{title:"131: MDM based policies for certs",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_131"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Drawbacks",id:"drawbacks",level:3},{value:"Impact on End Users",id:"impact-on-end-users",level:3},{value:"Deployment Rings",id:"deployment-rings",level:3},{value:"Configuring Windows Update Deployment Rings",id:"configuring-windows-update-deployment-rings",level:3},{value:"Tying to Zero Trust",id:"tying-to-zero-trust",level:3},{value:"Reference",id:"reference",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"130-windows-update",children:"130: Windows Update"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Deploying Windows Updates to Windows devices using Microsoft Intune offers a structured and efficient way to manage updates across your organization. Here's a detailed overview:"}),"\n",(0,i.jsx)(n.h3,{id:"benefits",children:"Benefits"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Centralized Management"}),": Intune allows you to manage updates from a single console, simplifying the process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compliance and Security"}),": Ensures devices are up-to-date with the latest security patches, reducing vulnerabilities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Customization"}),": You can tailor update policies to fit different groups within your organization."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Automation"}),": Automates the deployment process, reducing the need for manual intervention."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Complexity"}),": Initial setup and configuration can be complex and time-consuming."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Network Bandwidth"}),": Large updates can consume significant network bandwidth, potentially impacting other operations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compatibility Issues"}),": Updates might cause compatibility issues with existing applications."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"impact-on-end-users",children:"Impact on End Users"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Downtime"}),": Users might experience downtime during updates, which can affect productivity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Performance"}),": Post-update performance issues can arise if updates are not thoroughly tested."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"User Experience"}),": Frequent updates can be disruptive if not scheduled properly."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deployment-rings",children:"Deployment Rings"}),"\n",(0,i.jsx)(n.p,{children:"Deployment rings are groups of devices that receive updates at different times. This staged approach helps in identifying and resolving issues before they affect the entire organization."}),"\n",(0,i.jsx)(n.h3,{id:"configuring-windows-update-deployment-rings",children:"Configuring Windows Update Deployment Rings"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create Rings"}),": Define rings based on device criticality and user roles."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Set Deferral Periods"}),": Configure deferral periods for quality and feature updates."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Assign Devices"}),": Assign devices to appropriate rings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Monitor and Adjust"}),": Continuously monitor update deployment and make adjustments as needed."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tying-to-zero-trust",children:"Tying to Zero Trust"}),"\n",(0,i.jsx)(n.p,{children:"Zero Trust is a security model that assumes breaches will occur and verifies each request as though it originates from an open network. Deploying updates through Intune aligns with Zero Trust by ensuring devices are always up-to-date with the latest security patches, thereby reducing the attack surface."}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Configure Update rings for Windows 10 and later policy in Intune. ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-update-rings",children:"https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-update-rings"})]}),"\n",(0,i.jsxs)(n.li,{children:["Configure feature updates policy for Windows 10 Windows 11 devices in .... ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-feature-updates",children:"https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-feature-updates"})]}),"\n",(0,i.jsxs)(n.li,{children:["Use Intune to expedite Windows quality updates | Microsoft Learn. ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-expedite-updates",children:"https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-expedite-updates"})]}),"\n",(0,i.jsxs)(n.li,{children:["Use Windows Update for Business reports for Windows Updates: ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-reports",children:"https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-reports"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var i=s(67294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);