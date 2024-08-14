import Link from 'next/link';
const Download = ({ icon }) => {
  return (
    <>
      <Link href='https://drive.google.com/file/d/1udZUChVPjbrfrzIDedAshH_9p0b-HbFT/view?usp=sharing' target='_blank' rel='noopener noreferrer' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </Link>


    </>
  );
};

export default Download;
