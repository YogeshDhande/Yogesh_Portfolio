import { socialHandles } from '../data';
import '../styles/socialHandles.css';

const SocialHandles = () => {
  return (
    <div className='social__handles__container'>
        {socialHandles.map((media, index) => (
            <a
            key={index}
            href={media.link}
            target="_blank"
            className='icon__container social__handle'
        >
            <span className='flex__center tooltip'>{media.icon} {media.name}</span>
            {media.icon}
        </a>
        ))}
    </div>
  )
}

export default SocialHandles