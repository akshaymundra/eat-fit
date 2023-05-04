import GithubSvg from '../../assets/github_logo.svg'
import LinkdinSvg from '../../assets/linkdin_logo.svg'
const Footer = () => {
    return ( 
        <footer className="p-4 bg-[#7da5b9] flex justify-between items-center">
            <span className='text-black'>Develped by Akshay</span>
            {/* <div className='flex gap-4'>
                <a href="https://github.com/Akshay272003">
                    <img className='w-5 h-5' src={GithubSvg} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/akshay-mundra-0a81121a5">
                    <img className='w-5 h-5' src={LinkdinSvg} alt="" />
                </a>
            </div> */}
        </footer>
     );
}
 
export default Footer;