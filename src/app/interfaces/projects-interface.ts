import { TechnicalSkills } from "./technicalskills-interface";
export interface ProjectInterface {

    imgURL: string;
    demoURL: string;
    title: string;
    desc: string;
    techUsed: Array<TechnicalSkills>;
      
}
