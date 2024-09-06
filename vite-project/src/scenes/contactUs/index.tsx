import { useForm } from 'react-hook-form'
import { SelectedPage } from '../../shared/types'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '../../assets/ContactUsPageGraphic.png'
import HText from '../../shared/HText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {

    const {register, trigger, formState: {errors}} = useForm()

const onSubmit = async (e: any) => { 
    const isValid = await trigger()
    if(!isValid) {
        e.preventDefault()
    }
}

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* Header */}
        <motion.div className='md:w-3/5' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{
                 hidden: {opacity: 0, x:-50},
                 visible: {opacity: 1, x: 0}
                }}>
                    <HText>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className='my-5'>
                    Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>
                </motion.div>

                {/* Form and Image */}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div className='mt-10 basis-3/5 md:mt-0' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{
                 hidden: {opacity: 0, y: 50},
                 visible: {opacity: 1, y: 0}
                }}>
                    <form 
                    target='_blank' 
                    onSubmit={onSubmit} 
                    action='https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e'
                    method='POST'>

                    </form>
                </motion.div>
                </div>


      </motion.div>
    </section>
  )
}

export default ContactUs