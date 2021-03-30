import React from 'react'

const pixels = (n) => Array(n).fill(<div class="pixel"></div>)

export const Corner = ({ id, row1, row2, row3, row4, row5 }) => {
    return (
        <div id={id}>
            <div id="row1">
                {pixels(row1)}
            </div>
            <div id="row2">
                {pixels(row2)}
            </div>
            <div id="row3">
                {pixels(row3)}
            </div>
            <div id="row4">
                {pixels(row4)}
            </div>
            <div id="row5">
                {pixels(row5)}
            </div>
        </div>
    )
}
