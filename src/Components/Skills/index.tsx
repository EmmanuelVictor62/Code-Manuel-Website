import React from "react";
import { skillsIcon } from "../../Utils/constants";
import './_skills.scss'

export interface SkillsProps{
    name?:string
    toggle?:boolean
}

export const Skills = (props:SkillsProps) => {
    return(
        <div 
            className="skills" 
            id='skills' 
            data-toggle={props.toggle}
        >
            <h1 className="skills__heading">Things I know</h1>
            <div className="skills__icon-container">
                {skillsIcon.map((skill, index) => {
                    return(
                        <div className="skills__icon-wrapper" key={index + 1}>
                            <i 
                                style={{color:skill.iconColor}}
                                className={`skills__icon ${skill.className}`}
                            ></i>
                            <p className="skills__icon-name">
                                {skill.iconName}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}