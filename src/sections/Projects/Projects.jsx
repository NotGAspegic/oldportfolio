import styles from './ProjectsStyles.module.css';
import dstuff from '../../assets/ds.png';
import k3srpi from '../../assets/k3snew.png';
import myWeather from '../../assets/myweatherimg.png';
import educateck from '../../assets/EducatekV2.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={educateck}
          link="https://github.com/NotGAspegic/Educateck"
          h3="Educateck"
          p="An IoT-based smart high school system"
        />
        <ProjectCard
          src={myWeather}
          link="https://github.com/NotGAspegic/MyWeather"
          h3="MyWeather"
          p="An Android weather app"
        />
        <ProjectCard
          src={k3srpi}
          link="https://github.com/NotGAspegic/k3srpi"
          h3="Raspberry Pi Cluster"
          p="Raspberry Pi Cluster using Kubernetes"
        />
        <ProjectCard
          src={dstuff}
          link="https://not-aspegic.itch.io/deadly-stuff"
          h3="Deadly stuff"
          p=" a 2D pixel art game in Unity"
        />
      </div>
    </section>
  );
}

export default Projects;
