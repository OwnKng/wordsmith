import React from 'react';
import { styles } from './styles';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import './Results.css';

export const Results = (props) => {

    if (props.words.length) {
        return (
            props.words.map((word, index) => {
                return (
                    <TransitionGroup>
                        <CSSTransition
                            key={index}
                            in={true}
                            appear={true}
                            timeout={2000}
                            classNames="fade">
                            <div style={styles}>
                                <p>{word.word}</p>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                )
            })
        )
    } else {
        return (
            <p style={styles}>No synonyms found!</p>
        )
    }
}