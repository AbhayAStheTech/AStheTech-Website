import React from 'react';
import tw from "twin.macro";

const Container = tw.div`bg-black text-white font-medium flex justify-center sm:px-40 md:px-56 sm:py-16 `;

export default function LoadingAnimation(props) {

    return (
        <Container>
            <div className={props.styles.loader}>
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        </Container>
    );
}