import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        2022 - Desenvolvido por 
        {' '}
        <a target="blank" href="https://guitotti.github.io/guilhermetottidev/">
          Guilherme Totti
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
