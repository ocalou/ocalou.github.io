import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

import steam from "../img/steam.svg";
import github from "../img/github.svg";

import YoutubeEmbed from "../components/YoutubeEmbed";
import styles from "../css/ProjectDetail.module.css";

const Details = styled(motion.div)`
  color: #4a1e2b;
`;

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter((stateProject) => stateProject.url === url);
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <Details
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {project ? (
        <div class = {styles.project}>
          <div class = {styles.projectBody}>

            <div class = {styles.projectMedia}>
              {(() => {
                  if(project.video !== undefined){
                    return <>
                      <YoutubeEmbed embedId={project.video}/>
                    </>
                  }
              })()}
              <div class = {styles.projectLinks}>
                {(() => {
                    if(project.github !== undefined || project.steam !== undefined){
                      return <>
                      <p>More about on</p>
                      </> 
                    }
                })()}

                {(() => {
                    if(project.github !== undefined){
                      return <>
                      <a href={project.github}><img class = {styles.icon} src={github}/></a>
                      </>
                    }
                })()}

                {(() => {
                    if(project.steam !== undefined){
                      return <>
                        <a href={project.steam}><img class = {styles.icon} src={steam}/></a>
                      </>
                    }
                })()}

              </div>
             </div>
            <div class = {styles.projectInfo}>
              <h2>{project.title}</h2>

              {(() => {
                if(project.tags !== undefined){
                  return <>
                    { project.tags.map((item) => {
                      return <span class = {styles.tag}>{item}</span>;
                    }) }
                  </>
                }
              })()}

              {(() => {
                if(project.description !== undefined)
                {
                  return <p>{project.description}</p>
                }
              })()}

              {(() => {
                if(project.context !== undefined){
                  return <p>{project.context}</p>
                }
              })()}

              {(() => {
                if(project.contributions !== undefined){
                  return <>
                    <p>Some of my contributions are:</p>
                      <ul>
                        { project.contributions.map((item) => {
                          return <li>{item}</li>;
                        }) }
                      </ul>
                  </>
                }
              })()}
            </div>
          </div>
        </div>
      ) : (
        <h3>Sorry, the project you are looking is not available</h3>
      )}
      <ScrollTop />
    </Details>
  );
};

export default ProjectDetail;
