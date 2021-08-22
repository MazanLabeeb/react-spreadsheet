"use strict";(self.webpackChunkreact_spreadsheet=self.webpackChunkreact_spreadsheet||[]).push([[827],{5644:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),i=["components"],r={id:"usage",title:"Usage"},p="Usage",d={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"Simple",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/react-spreadsheet/docs/usage",editUrl:"https://github.com/iddan/react-spreadsheet/tree/master/website/docs/usage.md",version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"sidebar",previous:{title:"Get Started",permalink:"/react-spreadsheet/docs/"}},s=[{value:"Simple",id:"simple",children:[]},{value:"Props",id:"props",children:[{value:"Events",id:"events",children:[]},{value:"Components",id:"components",children:[]},{value:"Customization",id:"customization",children:[]}]}],k={toc:s};function u(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("h2",{id:"simple"},"Simple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport Spreadsheet from "react-spreadsheet";\n\nconst App = () => {\n  const data = [\n    [{ value: "Vanilla" }, { value: "Chocolate" }],\n    [{ value: "Strawberry" }, { value: "Cookies" }],\n  ];\n  return <Spreadsheet data={data} />;\n};\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h4",{id:"data-required"},(0,o.kt)("inlineCode",{parentName:"h4"},"data")," ",(0,o.kt)("em",{parentName:"h4"},"Required")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array<Array<CellType>>")),(0,o.kt)("p",null,"The data matrix of the Spreadsheet.\nFirst array size will determine how many columns the Spreadsheet will present."),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("h4",{id:"onchange"},(0,o.kt)("inlineCode",{parentName:"h4"},"onChange")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(data: Array<Array<CellType>>) => void")),(0,o.kt)("p",null,"Callback called when the Spreadsheet's data changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("h4",{id:"onmodechange"},(0,o.kt)("inlineCode",{parentName:"h4"},"onModeChange")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(mode: Mode) => void")),(0,o.kt)("p",null,"Callback called when the Spreadsheet's edit mode changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("h4",{id:"onselect"},(0,o.kt)("inlineCode",{parentName:"h4"},"onSelect")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(points: Point[]) => void")),(0,o.kt)("p",null,"Callback called when the Spreadsheet's selection changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("h4",{id:"onactivate"},(0,o.kt)("inlineCode",{parentName:"h4"},"onActivate")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(active: Point) => void")),(0,o.kt)("p",null,"Callback called when Spreadsheet's active cell changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("h4",{id:"oncellcommit"},(0,o.kt)("inlineCode",{parentName:"h4"},"onCellCommit")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(prevCell: CellType, nextType: CellType) => void")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("h4",{id:"onkeydown"},(0,o.kt)("inlineCode",{parentName:"h4"},"onKeyDown")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(event: KeyboardEvent) => void")),(0,o.kt)("p",null,"Callback called on key down inside the spreadsheet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("h4",{id:"columnindicator"},(0,o.kt)("inlineCode",{parentName:"h4"},"ColumnIndicator")),(0,o.kt)("p",null,"Component rendered above each column."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal component."),(0,o.kt)("h4",{id:"cornerindicator"},(0,o.kt)("inlineCode",{parentName:"h4"},"CornerIndicator")),(0,o.kt)("p",null,"Component rendered in the corner of row and column indicators."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal component."),(0,o.kt)("h4",{id:"rowindicator"},(0,o.kt)("inlineCode",{parentName:"h4"},"RowIndicator")),(0,o.kt)("p",null,"Component rendered next to each row."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal component."),(0,o.kt)("h4",{id:"table"},(0,o.kt)("inlineCode",{parentName:"h4"},"Table")),(0,o.kt)("p",null,"The Spreadsheet's table component."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal component."),(0,o.kt)("h4",{id:"row"},(0,o.kt)("inlineCode",{parentName:"h4"},"Row")),(0,o.kt)("p",null,"The Spreadsheet's row component."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal component."),(0,o.kt)("h4",{id:"cell"},(0,o.kt)("inlineCode",{parentName:"h4"},"Cell")),(0,o.kt)("p",null,"The Spreadsheet's cell component."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal component."),(0,o.kt)("h4",{id:"dataviewer"},(0,o.kt)("inlineCode",{parentName:"h4"},"DataViewer")),(0,o.kt)("p",null,"Component rendered for cells in read mode."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal component."),(0,o.kt)("h4",{id:"dataeditor"},(0,o.kt)("inlineCode",{parentName:"h4"},"DataEditor")),(0,o.kt)("p",null,"Component rendered for cells in edit mode."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal component."),(0,o.kt)("h3",{id:"customization"},"Customization"),(0,o.kt)("h4",{id:"formulaparser"},(0,o.kt)("inlineCode",{parentName:"h4"},"formulaParser")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FormulaParser")),(0,o.kt)("p",null,"Instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"FormulaParser")," to be used by the Spreadsheet"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal instance created by the component."),(0,o.kt)("h4",{id:"columnlabels"},(0,o.kt)("inlineCode",{parentName:"h4"},"columnLabels")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.kt)("p",null,"Labels to use in column indicators."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," alphabetical labels."),(0,o.kt)("h4",{id:"rowlabels"},(0,o.kt)("inlineCode",{parentName:"h4"},"rowLabels")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.kt)("p",null,"Labels to use in row indicators."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," row index labels."),(0,o.kt)("h4",{id:"hiderowindicators"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideRowIndicators")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Hides row indicators."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h4",{id:"hidecolumnindicators"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideColumnIndicators")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Hides column indicators."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h4",{id:"getbindingsforcell"},(0,o.kt)("inlineCode",{parentName:"h4"},"getBindingsForCell")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(cell: CellType, data: Matrix<CellType>) => Point[]")),(0,o.kt)("p",null,"Calculate which cells should be updated when given cell updates."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults to:")," internal implementation which infers dependencies according to formulas."))}u.isMDXComponent=!0}}]);