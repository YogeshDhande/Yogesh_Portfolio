import '../styles/about.css'
import Hole from '../ui/Hole'
import { skills } from '../data'
import CardUi from '../assets/CardUi'
import { ABOUT_ME, ABOUT_ME_TEXT, MY_NAME } from '../uiContants'
const About = () => {
  return (
    <section id='about'>
      <div className='card section__wrapper'>
        <Hole />
        <div className='column left-column'>
          <h3 className='skill__title'>My Skills</h3>
          <div className='skill__container'>
            {skills.map((skill, index) => (
              <div className='flex skill__group' key={index}>
                {skill.data.map((list,key) =>(
                  <div className='blur__overlay flex__center skill' key={key}>
                    <div className='skill__logo'>
                      <img src={list.logo} alt={list.skill} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className='card__ui-item' color={'var(--color-primary)'}/>
        </div>
        <div className='column right-column'>
          <h2 className='shine'>{ABOUT_ME}</h2>
          <h1 className='title'>I am <span className='color__primary'>{MY_NAME}</span></h1>
          <p className='text__muted description'>{ABOUT_ME_TEXT}</p>

        </div>
      </div>
    </section>
  )
}

export default About