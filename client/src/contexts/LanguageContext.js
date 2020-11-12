import useAxios from 'axios-hooks';
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();
export const DataContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('english');
	const [pageContent] = useAxios(`http://localhost:36236/${language}`);

	const changeLanguage = (lang) => {
		setLanguage(lang);
	};

	return (
		<LanguageContext.Provider
			value={{ language, changeLanguage: changeLanguage }}>
			<DataContext.Provider value={{pageContent}}>
				{children}
			</DataContext.Provider>
		</LanguageContext.Provider>
	);
};
