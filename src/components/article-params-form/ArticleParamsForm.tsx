import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import styles from './ArticleParamsForm.module.scss';

interface ArticleParamsFormProps {
	articleState: ArticleStateType;
	onFontFamilyChange: (
		fontFamily: ArticleStateType['fontFamilyOption']
	) => void;
	onFontSizeChange: (fontSize: ArticleStateType['fontSizeOption']) => void;
	onFontColorChange: (fontColor: ArticleStateType['fontColor']) => void;
	onBackgroundColorChange: (
		backgroundColor: ArticleStateType['backgroundColor']
	) => void;
	onContentWidthChange: (
		contentWidth: ArticleStateType['contentWidth']
	) => void;
	onReset: () => void;
}

export const ArticleParamsForm = ({
	articleState,
	onFontFamilyChange,
	onFontSizeChange,
	onFontColorChange,
	onBackgroundColorChange,
	onContentWidthChange,
	onReset,
}: ArticleParamsFormProps) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	function handleButton() {
		setIsSidebarOpen(!isSidebarOpen);
	}

	function handleOverlayClick() {
		setIsSidebarOpen(false);
	}

	return (
		<>
			<ArrowButton isOpen={isSidebarOpen} onClick={handleButton} />
			{isSidebarOpen && (
				<div
					className={styles.overlay}
					onClick={handleOverlayClick}
					aria-hidden='true'
				/>
			)}
			<aside
				className={`${styles.container} ${
					isSidebarOpen ? styles.container_open : styles.container_close
				}`}>
				<form className={styles.form}>
					<div className={styles.formSection}>
						<Text size={31} weight={800} uppercase={true}>
							Задайте параметры
						</Text>
						<div className={styles.fieldGroup}>
							<Select
								selected={articleState.fontFamilyOption}
								options={fontFamilyOptions}
								onChange={onFontFamilyChange}
								placeholder='Выберите шрифт'
								title='Шрифт'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<RadioGroup
								name='fontSize'
								options={fontSizeOptions}
								selected={articleState.fontSizeOption}
								onChange={onFontSizeChange}
								title='Размер шрифта'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<Select
								selected={articleState.fontColor}
								options={fontColors}
								onChange={onFontColorChange}
								placeholder='Выберите цвет шрифта'
								title='Цвет шрифта'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<Separator />
						</div>

						<div className={styles.fieldGroup}>
							<Select
								selected={articleState.backgroundColor}
								options={backgroundColors}
								onChange={onBackgroundColorChange}
								placeholder='Выберите цвет фона'
								title='Цвет фона'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<Select
								selected={articleState.contentWidth}
								options={contentWidthArr}
								onChange={onContentWidthChange}
								placeholder='Выберите ширину контента'
								title='Ширина контента'
							/>
						</div>
					</div>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={onReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
