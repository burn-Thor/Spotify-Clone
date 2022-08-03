import React from 'react'
import styled from 'styled-components'
import CurrentTrack from './CurrentTrack';

export default function Footer() {
  return (
    <Container>
      <CurrentTrack/>
      <PlayerControls/>
    </Container>
  )
}


const Container = styled.div`
    background-color: #a9a9a914;
    height: 100%;
    width: 100%;
    border-top: 1px solid #6a2b0ce0;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
`;