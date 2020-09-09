import React from "react";
import {
	Create,
	SimpleForm,
	TextInput,
	Edit,
	required,
	TabbedShowLayout,
	Tab,
	TextField,
	Show,
	ReferenceField,
	List,
	Datagrid,
	ReferenceInput,
	SelectInput,
} from "react-admin";
import { parse } from "query-string";

const validateRequired = required();

export const UserCreate = (props) => {
	const { location } = props;
	const { ruleId } = parse(location.search);
	const redirect = ruleId ? `/rule/${ruleId}/show/rules` : false;

	return (
		<Create {...props}>
			<SimpleForm redirect={redirect}>
				<TextInput source="name" validate={validateRequired} />
				<TextInput source="phone" validate={validateRequired} />
				<TextInput source="email" validate={validateRequired} />
				<TextInput source="password" validate={validateRequired} />
				{ruleId ? null : (
					<ReferenceInput source="ruleId" reference="rule">
						<SelectInput optionText="name" />
					</ReferenceInput>
				)}
			</SimpleForm>
		</Create>
	);
};

const UserName = ({ record }) => <span>{`${record.name}`}</span>;

export const UserEdit = (props) => (
	<Edit {...props} title={<UserName />}>
		<SimpleForm
			redirect={(basePath, id, data) => `/rule/${data.ruleId}/show/rules`}
		>
			<TextInput source="name" validate={validateRequired} />
			<TextInput source="phone" validate={validateRequired} />
			<TextInput source="email" validate={validateRequired} />
			<TextInput source="password" validate={validateRequired} />
			<ReferenceInput source="ruleId" reference="rule">
				<SelectInput optionText="name" optionValue="id" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);

export const UserList = (props) => (
	<List {...props}>
		<Datagrid rowClick="show">
			<TextField source="name" />
			<TextField source="phone" />
			<TextField source="email" />
			<TextField source="password" />
			<ReferenceField source="ruleId" reference="rule" linkType="show">
				<TextField source="name" />
			</ReferenceField>
		</Datagrid>
	</List>
);

export const UserShow = (props) => (
	<Show {...props}>
		<TabbedShowLayout>
			<Tab label="resources.summary.name">
				<TextField source="name" />
				<TextField source="phone" />
				<TextField source="email" />
				<TextField source="password" />
				<ReferenceField source="ruleId" reference="rule" linkType="show">
					<TextField source="name" />
				</ReferenceField>
			</Tab>
		</TabbedShowLayout>
	</Show>
);

export default {
	list: UserList,
	create: UserCreate,
	edit: UserEdit,
	show: UserShow,
};
