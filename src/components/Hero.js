import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5, delay: .2 }}>
        <section className={`bg-hero bg-cover bg-no-repeate bg-center relative w-full h-screen mx-auto`}>
          <div
            className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
          >
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 sm:h-80 h-40 bg-primary-gradient' />
            </div>
            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.5, delay: .4  }}>
                <div>
                  <h1 className={`${styles.heroHeadText} text-white`}>
                    Hello, I'm <span className='text-[#915EFF]'>Ahlam</span>
                  </h1>
                  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    a passionate Web Developer <br className='sm:block hidden' />
                  </p>
                </div>
            </motion.div>
          </div>
        </section>
    </motion.div>
    </>
  );
};

export default Hero;