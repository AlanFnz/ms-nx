import React from 'react';
import styled from 'styled-components';
import type { Link } from '@ixtlan-nx/shared-types';

const MainContainer = styled.div`
  .page {
  } q
`;

export function Index({ links }: { links: Link[] }) {
  return <MainContainer></MainContainer>;
}

export async function getServerSideProps() {
  let links = [];
  try {
    const res = await fetch('http://localhost:3333/links');
    links = await res.json();
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      links,
    },
  };
}

export default Index;
