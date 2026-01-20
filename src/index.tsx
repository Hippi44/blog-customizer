import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const updateFontFamily = (
		fontFamily: typeof defaultArticleState.fontFamilyOption
	) => {
		setArticleState((prev) => ({ ...prev, fontFamilyOption: fontFamily }));
	};

	const updateFontSize = (
		fontSize: typeof defaultArticleState.fontSizeOption
	) => {
		setArticleState((prev) => ({ ...prev, fontSizeOption: fontSize }));
	};

	const updateFontColor = (fontColor: typeof defaultArticleState.fontColor) => {
		setArticleState((prev) => ({ ...prev, fontColor: fontColor }));
	};

	const updateBackgroundColor = (
		backgroundColor: typeof defaultArticleState.backgroundColor
	) => {
		setArticleState((prev) => ({ ...prev, backgroundColor: backgroundColor }));
	};

	const updateContentWidth = (
		contentWidth: typeof defaultArticleState.contentWidth
	) => {
		setArticleState((prev) => ({ ...prev, contentWidth: contentWidth }));
	};

	const resetToDefaults = () => {
		setArticleState(defaultArticleState);
	};
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleState={articleState}
				onFontFamilyChange={updateFontFamily}
				onFontSizeChange={updateFontSize}
				onFontColorChange={updateFontColor}
				onBackgroundColorChange={updateBackgroundColor}
				onContentWidthChange={updateContentWidth}
				onReset={resetToDefaults}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
