import React from 'react';
import {
  TabbedShowLayout,
  Tab,
  List,
  Create,
  SimpleForm,
  Edit,
  Show,
  ReferenceManyField,
  Datagrid,
  EditButton,
  TextField,
  TextInput,
} from 'react-admin';
import AddAddressButton from './AddAddressButton';

const RuleCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="show">
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};

const RuleTitle = ({ record }) => (<span>{record.name}</span>);

const RuleEdit = props => {
  return (
    <Edit {...props} title={<RuleTitle />}>
      <SimpleForm redirect="list">
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

const RuleShow = props => (
  <Show {...props} title={<RuleTitle />}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField source="name" />
      </Tab>
      <Tab label="users" path="user">
        <ReferenceManyField reference="user" target="ruleId" addLabel={false}>
          <Datagrid>
          <TextField source="name" />
        <TextField source="phone" />
        <TextField source="email" />
        <TextField source="password" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddAddressButton />
      </Tab>
    </TabbedShowLayout>
  </Show>
);

const RuleList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
    </Datagrid>
  </List>
);

export default {
  list: RuleList,
  create: RuleCreate,
  edit: RuleEdit,
  show: RuleShow,
};
