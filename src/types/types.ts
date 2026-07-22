export type Project ={
projectTitle:string,
projectSubtitle:string,
projectParagraph:string,
projectStack:string [],
projectLink?:string[],
projectStatus: string,
projectPreview?:string[],
}

export type Stack={
  stackCategory:string,
  stackItem:string[],
}

export type Experience ={
experienceType: string,
experienceTitle:string,
experienceSubtitle:string,
experienceParagraph:string,
}