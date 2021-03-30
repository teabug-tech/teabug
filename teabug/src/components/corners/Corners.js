import React from 'react'
import { Section } from '../section/Section'
import { Corner } from './Corner'
import './Corners.scss'

export const Corners = () => {
    return (
        <div id="corners">
            <Section />
            <Corner id="top-left" row1={5} row2={5} row3={2} row4={2} row5={2} />
            <Corner id="top-right" row1={5} row2={5} row3={2} row4={2} row5={2} />
            <Corner id="bottom-left" row1={2} row2={2} row3={2} row4={5} row5={5} />
            <Corner id="bottom-right" row1={2} row2={2} row3={2} row4={5} row5={5} />
        </div>
    )
}
