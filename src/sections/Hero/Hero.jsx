import styles from './HeroStyles.module.css';
import heroImg from '../../assets/WEBPIC.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterDark from '../../assets/fblight.svg';
import twitterLight from '../../assets/fbdark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CVALT.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Souhail Smiri"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Souhail
          <br />
          Smiri
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://www.facebook.com/souhail.smiri.3" target="_blank">
            <img src={twitterIcon} alt="Facebook icon" />
          </a>
          <a href="https://github.com/NotGAspegic" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/sousmiri/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          In quest for new opportunities to show my dedication towards
          programming and Cybersecurity
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
