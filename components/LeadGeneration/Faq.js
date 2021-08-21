import React, { Component } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion'

class Faq extends Component {
  render() {
    return (
      <section className='faq-area ptb-100 bg-f5fbff'>
        <div className='container'>
          <div className='lead-generation-section-title'>
            <h2>Frequently Asked Question</h2>
            <div className='bar'></div>
            <p>We might not need an FAQ section, but it sure looks nice.</p>
          </div>

          <div className='faq'>
            <Accordion allowZeroExpanded preExpanded={['a']}>
              <AccordionItem uuid='a'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Some common question you answer all the time?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='b'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Some other common question you are sick of answering?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='c'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do people even read FAQ's?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='d'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Another great question goes here?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='e'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Why is the sky blue?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
}

export default Faq
