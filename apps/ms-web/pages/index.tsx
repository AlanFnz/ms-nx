import React from 'react';
import styled from 'styled-components';
import type { Link } from '@ixtlan-nx/shared-types';

const MainContainer = styled.div`
  .page {
  } q
`;

export function Index({ links }: { links: Link[] }) {
  return (
    <MainContainer>
      <ul>
        {links &&
          links.map(({ id, title, url }) => (
            <li key={id}>
              <a href={url}>{title}</a>
            </li>
          ))}
      </ul>
    </MainContainer>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3333/links');
  const links = await res.json();

  return {
    props: {
      links,
    },
  };
}

export default Index;
