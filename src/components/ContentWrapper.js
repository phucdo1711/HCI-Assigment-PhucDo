import React from 'react';
import styled from 'styled-components';
import { Grid, GridColumn } from '@atlaskit/page';
import { gridSize } from '@atlaskit/theme';
import PageHeader from '@atlaskit/page-header';

const Padding = styled.div`
  margin: ${gridSize() * 4}px ${gridSize() * 8}px;
  padding-bottom: ${gridSize() * 3}px;
  position: relative;
`;

export default ({ children, title, actions, breadcrumbs }) => (
  <Grid layout='fluid'>
    <GridColumn>
      <PageHeader actions={actions} breadcrumbs={breadcrumbs}>{title}</PageHeader>
      <Padding>{children}</Padding>
    </GridColumn>
  </Grid>
)