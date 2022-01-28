import jcbose from '../image/jcbose.jfif';
import UserCircle from '../icons/userCircle.js';
import Mail from '../icons/mail.js';

export default function Footer(){
    return (
        <footer className="h-20v bg-sky-700 flex items-center justify-center">
            <div className="h-full flex items-center">
                <div className="h-full flex items-center mr-2"><img src={jcbose} className="h-1/2 rounded-xl" alt="JC Bose University of Science &amp; Technology" /></div>
                <div className="inline-block font-mono text-white ">
                    <div className="flex flex-wrap">
                        <div className="inline-block mr-auto">
                            <div className="flex">
                                <UserCircle color="#fff" />&nbsp;Niranajan&nbsp;Pandit
                            </div>
                        </div>
                        <div className="inline-block">
                            <div className="flex">
                                <Mail color="#fff" />&nbsp;<a href="mailto:niranjan775533@gmail.com">niranjan775533@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="">JC Bose University of Science and Technology, YMCA</div>
                </div>
            </div>
        </footer>
    );
}