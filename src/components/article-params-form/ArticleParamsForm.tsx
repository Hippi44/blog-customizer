import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, useEffect } from 'react';
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
	onApply: (articleState: ArticleStateType) => void;
	onReset: () => void;
}

export const ArticleParamsForm = ({
	articleState,
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [formState, setFormState] = useState(articleState);

	useEffect(() => setFormState(articleState), [articleState]);

	const onFontFamilyChange = (
		fontFamily: ArticleStateType['fontFamilyOption']
	) => {
		setFormState((prev) => ({ ...prev, fontFamilyOption: fontFamily }));
	};

	const onFontSizeChange = (fontSize: ArticleStateType['fontSizeOption']) => {
		setFormState((prev) => ({ ...prev, fontSizeOption: fontSize }));
	};

	const onFontColorChange = (fontColor: ArticleStateType['fontColor']) => {
		setFormState((prev) => ({ ...prev, fontColor: fontColor }));
	};

	const onBackgroundColorChange = (
		backgroundColor: ArticleStateType['backgroundColor']
	) => {
		setFormState((prev) => ({ ...prev, backgroundColor: backgroundColor }));
	};

	const onContentWidthChange = (
		contentWidth: ArticleStateType['contentWidth']
	) => {
		setFormState((prev) => ({ ...prev, contentWidth: contentWidth }));
	};

	const handleButton = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const handleOverlayClick = () => {
		setIsSidebarOpen(false);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply(formState);
	};

	const handleResetClick = () => {
		setFormState(articleState);
		onReset();
	};

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
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.formSection}>
						<Text size={31} weight={800} uppercase={true}>
							Задайте параметры
						</Text>
						<div className={styles.fieldGroup}>
							<Select
								selected={formState.fontFamilyOption}
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
								selected={formState.fontSizeOption}
								onChange={onFontSizeChange}
								title='Размер шрифта'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<Select
								selected={formState.fontColor}
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
								selected={formState.backgroundColor}
								options={backgroundColors}
								onChange={onBackgroundColorChange}
								placeholder='Выберите цвет фона'
								title='Цвет фона'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<Select
								selected={formState.contentWidth}
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
							onClick={handleResetClick}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
