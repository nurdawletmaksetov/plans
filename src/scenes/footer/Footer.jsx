
const Footer = () => {
  return (
    <>
      <footer className="bg-prussian-blue py-3 text-white">
        <div className='mx-auto my-0 max-w-[1600px] py-0 px-4 flex items-center'>
          <div className="flex flex-col md:flex-row gap-5 md:justify-between w-full">
            <div className="flex flex-col md:w-[33%] gap-[11px]">
              <div className="flex gap-2 items-center w-[210px] h-[50px] bg-blue-dark rounded-[10px] px-2 py-1.5">
                <div className="flex items-center bg-dusk-blue rounded-full w-10 h-10 justify-center">
                  <p className="font-bold italic">WP</p>
                </div>
                <p className="text-[22px] text-alabaster-grey">Week Planner</p>
              </div>
              <p className="text-[18px] text-lavender-grey">About</p>
              <p className="text-alabaster-grey text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quam quibusdam, est maxime eaque non assumenda officiis aperiam rem quia enim?
              </p>
            </div>
            <div className="flex flex-col md:w-[33%] gap-[11px]">
              <p className="text-[18px] text-lavender-grey">Socials</p>
              <a href="https://www.instagram.com/m_nurdawlet/" className="text-[16px] text-alabaster-grey">
                Instagram
              </a>
              <a href="https://t.me/nurdawlet_dev" className="text-[16px] text-alabaster-grey">
                Telegram
              </a>
              <a href="https://github.com/nurdawletmaksetov" className="text-[16px] text-alabaster-grey">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nurdawlet-maksetov-a3155b376/" className="text-[16px] text-alabaster-grey">
                Linkedin
              </a>
            </div>
            <div className="flex flex-col md:w-[33%] gap-[11px]">
              <p className="text-[18px] text-lavender-grey">Last Projects</p>
              <a href="https://glowing-kringle-6a0467.netlify.app/" className="text-[16px] text-alabaster-grey">
                NurShop
              </a>
              <a href="https://spend-elon-musk-money-for-army.netlify.app/" className="text-[16px] text-alabaster-grey">
                Spending Elon's Money
              </a>
              <a href="https://ornate-moxie-a30fd7.netlify.app/" className="text-[16px] text-alabaster-grey">
                Product Designer Portfolio
              </a>
              <a href="https://peaceful-jelly-a45a49.netlify.app/" className="text-[16px] text-alabaster-grey">
                Calculator App
              </a>
              <a href="https://trading-skills-page.netlify.app/" className="text-[16px] text-alabaster-grey">
                Trading Skills
              </a>
              <a href="https://fitnessgym-landingpage.netlify.app/" className="text-[16px] text-alabaster-grey">
                Fitness Application
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer