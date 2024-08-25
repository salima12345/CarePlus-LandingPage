import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai' 

function FaQ() {
  return (
    <div  id="FaQ" className='mt-32 w-[80%] mx-auto'>
        <h3 className='header mb-10 text-start text-3xl font-bold'>Frequently Asked Questions</h3>
        <div className='flex flex-col md:flex-row gap-10'>
            <div className='flex-1'>
                <p className='mb-6 text-lg text-gray-700'>
                  For any inquiries or assistance regarding our medical services, feel free to contact us via email or phone. Our support team is available to help you with any questions you may have.
                </p>
                <div className='flex items-center gap-4 mb-4'>
                    <AiOutlineMail className='text-green-300 text-2xl' /> 
                    <span className='text-lg text-gray-700'>contact@careplus.com</span>
                </div>
                <div className='flex items-center gap-4'>
                    <AiOutlinePhone className='text-green-300 text-2xl' /> 
                    <span className='text-lg text-gray-700'>+212 556 789 001</span>
                </div>
            </div>

            <div className='flex-1'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What are your visiting hours?</AccordionTrigger>
                        <AccordionContent>
                            Our visiting hours are from 8:00 AM to 8:00 PM every day. Please check with specific departments for any restrictions.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>How do I schedule an appointment?</AccordionTrigger>
                        <AccordionContent>
                            You can schedule an appointment by calling our main line or through our online booking system available on our website.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Do you accept insurance?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we accept a wide range of insurance plans. Please contact our billing department to confirm if your insurance is accepted.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>What should I bring for my first visit?</AccordionTrigger>
                        <AccordionContent>
                            For your first visit, please bring a valid ID, your insurance card, and any medical records relevant to your condition.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>Where can I find parking?</AccordionTrigger>
                        <AccordionContent>
                            We have ample parking available in the main lot adjacent to the hospital. Parking is free for the first two hours.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default FaQ
