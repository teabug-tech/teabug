import React from 'react'
import { Figure } from './Figure'
import './Section.scss'

export const Section = () => {
    return (
        <section>
            <Figure />
            <div class="description">
                <div class="description-content">
                    <p>
                        lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. tincidunt blandit imperdiet
                        auctor congue scelerisque dolor. felis integer
                        viverra sodales integer arcu donec.
                        </p>
                    <div class="br"></div>
                    <p>
                        quis fames pharetra tempus tellus morbi mauris,
                        felis.
                        </p>
                </div>
            </div>
        </section>
    )
}
