/** @format */

import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Image,
  Heading,
  Text,
  Grommet,
  Header,
  Layer,
  ResponsiveContext,
} from 'grommet';
import eyes from './images/eyes.png';
import { FormClose, Help, Github } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: 'black',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const sidebar = (
  <>
    <h3>Was the f***?</h3>
    <Text>
      NichtSoLeute.de soll irgendwann mal so eine Art open source Alternative
      für Tinder und co. sein, damit auch du superliken und boosten kannst,
      obwohl du ja gar nicht so jemand bist. Und das beste: Alles For Free!
    </Text>
    <h3>Warum?</h3>
    <Text>
      Tim Rainer vom Qualitätspodcast "Gespräch ohne Sinn" analysierte ganz
      richtig, dass mittlerweile viel zu viele Menschen gezwungen sind Tinder zu
      nutzen, obwohl sie gar nicht solche Menschen sind. Das kann und darf nicht
      sein.
    </Text>
    <h3>Wie? Und jetzt?</h3>
    <Text>
      Kannste coden? Nice! Dann ab zum{' '}
      <a href="https://github.com/jabusch24/nichtsoleute" target="_blank">
        github repo
      </a>{' '}
      und mitmachen. Kannst du design? Dann tweet me at @jannisbusch. Kannst du
      irgendwas anderes? Schreibs Till!
    </Text>
  </>
);

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <Header background="brand" pad="medium">
              <Heading level="3" margin="none">
                NichtSoLeute.de
              </Heading>
              <Button
                icon={<Help />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </Header>
            <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align="center" justify="center" pad="large">
                <Heading level="3" margin="none">
                  NichtSoLeute.de
                </Heading>
                <Image src={eyes} margin="1.5rem" />
                <Text textAlign="center">
                  Du bist gar nicht so jemand? Das is nix für dich? Dann bist du
                  hier genau richtig!
                </Text>
                <br />
                <Text textAlign="center">
                  NichtSoLeute.de ist genauso wie Tinder, außer das es halt
                  nicht Tinder ist.
                </Text>
                <br />
                <Text textAlign="center">Mach mit!</Text>
                <Button
                  icon={<Github color="brand" />}
                  href="https://github.com/jabusch24/nichtsoleute"
                  target="_blank"
                />
              </Box>
              {!showSidebar || size !== 'small' ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="left"
                    pad="small"
                  >
                    {sidebar}
                  </Box>
                </Collapsible>
              ) : (
                <Layer margin="medium">
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    pad="medium"
                    overflow="scroll"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                    {sidebar}
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
