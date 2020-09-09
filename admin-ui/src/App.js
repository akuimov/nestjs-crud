import React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource } from "react-admin";
import crudProvider from "@fusionworks/ra-data-nest-crud";
import users from "./User";
import rules from "./Rules";
import { url } from "./config/connection";
import { FirebaseAuthProvider } from "react-admin-firebase";
import firebase from "firebase";
import polyglotI18nProvider from "ra-i18n-polyglot";

import createAdminStore from "./createAdminStore";
import englishMessages from "ra-language-english";
// import frenchMessages from "ra-language-french";

const messages = {
	// fr: frenchMessages,
	en: englishMessages,
};

const config = {
	apiKey: "AIzaSyC2zVOGE0vOYInfY7KxQgBAjPoZjqfwfm4",
	authDomain: "unitsys-224807.firebaseapp.com",
	databaseURL: "https://unitsys-224807.firebaseio.com",
	projectId: "unitsys-224807",
	storageBucket: "unitsys-224807.appspot.com",
	messagingSenderId: "919097063724",
	appId: "1:919097063724:web:4524d89cd7160d91011489",
};

const options = {
	// Use a different root document to set your resource collections, by default it uses the root collections of firestore
	// rootRef: 'root-collection/some-doc',
	// Your own, previously initialized firebase app instance
	//     app: firebaseAppInstance,
	// Enable logging of react-admin-firebase
	//logging: false,
	// Resources to watch for realtime updates, will implicitly watch all resources by default, if not set.
	//     watch: ['posts'],
	// Resources you explicitly dont want realtime updates for
	//     dontwatch: ['comments'],
};
const authProvider = FirebaseAuthProvider(config, options);
const dataProvider = crudProvider(url);
const history = createHashHistory();
const i18nProvider = polyglotI18nProvider((locale) => messages[locale]);

const App = () => (
	<Provider
		store={createAdminStore({
			authProvider,
			dataProvider: Object.assign(dataProvider),
			history,
		})}
	>
		<Admin
			authProvider={authProvider}
			dataProvider={Object.assign(dataProvider)}
			history={history}
			title="My Admin"
		>
			<Resource name="user" {...users} />
			<Resource name="rule" {...rules} />
		</Admin>
	</Provider>
);

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		//console.log(user);
	} else {
		// No user is signed in.
	}
});
export default App;
