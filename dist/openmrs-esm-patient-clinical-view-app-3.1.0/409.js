(self.webpackChunk_openmrs_esm_patient_clinical_view_app=self.webpackChunk_openmrs_esm_patient_clinical_view_app||[]).push([[409],{4409:(e,i,n)=>{"use strict";n.r(i),n.d(i,{backendDependencies:()=>s,importTranslation:()=>c,setupOpenMRS:()=>r});var t=n(9035),l=n(3771);const a={clinicalViews:{_type:t.Type.Array,_elements:{slot:{_type:t.Type.String},slotName:{_type:t.Type.String}},_default:[{slot:"All",slotName:""}]}},o={name:"clinical-views",slot:"patient-chart-clinical-view-dashboard-slot",config:{columns:1,type:"grid"},title:"Clinical Views"},c=n(3979),s={};function r(){const e="@openmrs/esm-patient-clinical-view-app",i={featureName:"patient-clinical-view",moduleName:e};return(0,t.defineConfigSchema)(e,a),{extensions:[{id:"patient-clinical-view-overview",slot:"patient-chart-summary-dashboard-slot",order:11,load:(0,t.getAsyncLifecycle)((()=>Promise.all([n.e(501),n.e(171),n.e(358),n.e(923),n.e(403),n.e(906),n.e(404)]).then(n.bind(n,9404))),i),meta:{columnSpan:4},online:!0,offline:!0},{id:"patient-clinical-view-details",slot:o.slot,load:(0,t.getAsyncLifecycle)((()=>Promise.all([n.e(501),n.e(171),n.e(358),n.e(923),n.e(403),n.e(906),n.e(404)]).then(n.bind(n,9404))),i),online:!0,offline:!0},{id:"patient-clinical-view-form-workspace",load:(0,t.getAsyncLifecycle)((()=>Promise.all([n.e(501),n.e(279),n.e(358),n.e(87),n.e(403),n.e(906),n.e(194)]).then(n.bind(n,6194))),i),meta:{title:"Add Clinical View"},online:!0,offline:!0},{id:"clinical-view-summary-dashboard",slot:"patient-chart-dashboard-slot",order:1,load:(0,t.getSyncLifecycle)((0,l.createDashboardLink)(o),i),meta:o,online:!0,offline:!0}]}}},3979:(e,i,n)=>{var t={"./en.json":[3574,574]};function l(e){if(!n.o(t,e))return Promise.resolve().then((()=>{var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}));var i=t[e],l=i[0];return n.e(i[1]).then((()=>n(l)))}l.keys=()=>Object.keys(t),l.id=3979,e.exports=l}}]);
//# sourceMappingURL=409.js.map